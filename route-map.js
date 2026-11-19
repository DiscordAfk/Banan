const routeMap = document.querySelector('#route-map');
const mapContext = routeMap.getContext('2d');
const mapBackdrop = document.createElement('canvas');
mapBackdrop.width = routeMap.width;
mapBackdrop.height = routeMap.height;
const backdropContext = mapBackdrop.getContext('2d');
const routePortrait = new Image();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const europe = { x: 22, y: 19, width: 660, height: 498, bounds: [-16, 31, 47, 73] };
const globe = { x: 28, y: 415, width: 134, height: 76, bounds: [-180, -65, 180, 83] };
let routeAnimation;

function project([lon, lat], { x, y, width, height, bounds: [west, south, east, north] }) {
  return [
    x + (lon - west) / (east - west) * width,
    y + (north - lat) / (north - south) * height,
  ];
}

function mapArea(ctx, area, paint) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.x, area.y, area.width, area.height);
  ctx.clip();
  paint();
  ctx.restore();
}

function drawLand(ctx, land, area, edge) {
  ctx.beginPath();
  for (const ring of land) {
    const [x, y] = project(ring[0], area);
    ctx.moveTo(Math.round(x), Math.round(y));
    for (const coordinate of ring.slice(1)) {
      const [px, py] = project(coordinate, area);
      ctx.lineTo(Math.round(px), Math.round(py));
    }
    ctx.closePath();
  }
  ctx.fillStyle = '#332b52';
  ctx.fill();
  ctx.strokeStyle = edge;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawGrid(ctx, area, spacing) {
  const [west, south, east, north] = area.bounds;
  ctx.strokeStyle = '#bcace01d';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let lon = Math.ceil(west / spacing) * spacing; lon < east; lon += spacing) {
    const [x] = project([lon, south], area);
    ctx.moveTo(x, area.y);
    ctx.lineTo(x, area.y + area.height);
  }
  for (let lat = Math.ceil(south / spacing) * spacing; lat < north; lat += spacing) {
    const [, y] = project([west, lat], area);
    ctx.moveTo(area.x, y);
    ctx.lineTo(area.x + area.width, y);
  }
  ctx.stroke();
}

let backdropReady = false;
function prepareBackdrop() {
  const ctx = backdropContext;
  ctx.fillStyle = '#100d20';
  ctx.fillRect(0, 0, mapBackdrop.width, mapBackdrop.height);
  mapArea(ctx, europe, () => {
    ctx.fillStyle = '#17263a';
    ctx.fillRect(europe.x, europe.y, europe.width, europe.height);
    drawLand(ctx, europeanLand, europe, '#6c5c89');
    drawGrid(ctx, europe, 5);
    ctx.font = 'bold 12px system-ui';
    ctx.fillStyle = '#c4b9db';
    for (const [label, coordinate] of [
      ['АТЛАНТИКА', [-14.8, 45]], ['БАЛТИКА', [13.5, 60.8]],
      ['СРЕДИЗЕМНОЕ МОРЕ', [3, 32.5]], ['ЧЁРНОЕ МОРЕ', [31, 42.2]],
    ]) {
      ctx.fillText(label, ...project(coordinate, europe));
    }
  });
  mapArea(ctx, globe, () => {
    ctx.fillStyle = '#17263a';
    ctx.fillRect(globe.x, globe.y, globe.width, globe.height);
    drawLand(ctx, worldLand, globe, '#6c5c89');
    const [west, south, east, north] = europe.bounds;
    const [x, y] = project([west, north], globe);
    const [right, bottom] = project([east, south], globe);
    ctx.strokeStyle = '#ff777f';
    ctx.strokeRect(x, y, right - x, bottom - y);
  });
  ctx.strokeStyle = '#776490';
  ctx.strokeRect(europe.x, europe.y, europe.width, europe.height);
  ctx.strokeRect(globe.x, globe.y, globe.width, globe.height);
  backdropReady = true;
}

function traceRoute(ctx, points, area) {
  ctx.beginPath();
  for (const [index, point] of points.entries()) {
    const [x, y] = project(point, area);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.lineCap = 'round';
  ctx.setLineDash(area === europe ? [7, 6] : [3, 3]);
  ctx.lineWidth = area === europe ? 6 : 4;
  ctx.strokeStyle = '#210d20';
  ctx.stroke();
  ctx.lineWidth = area === europe ? 3.25 : 2;
  ctx.strokeStyle = '#ff5967';
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawPortrait(ctx, point) {
  const [x, y] = project(point, europe);
  ctx.fillStyle = '#ff5a69';
  ctx.fillRect(x - 3, y - 3, 6, 6);
  ctx.fillStyle = '#160d23';
  ctx.fillRect(x - 17, y - 39, 34, 34);
  ctx.strokeStyle = '#ff9ca3';
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 17, y - 39, 34, 34);
  if (routePortrait.complete && routePortrait.naturalWidth) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(routePortrait, x - 15, y - 37, 30, 30);
  }
}

function prepareDetail(leg, index) {
  const longitudes = leg.map(([lon]) => lon);
  const latitudes = leg.map(([, lat]) => lat);
  const west = Math.min(...longitudes);
  const east = Math.max(...longitudes);
  const south = Math.min(...latitudes);
  const north = Math.max(...latitudes);
  if (Math.max(east - west, north - south) > 2.2) return;
  const padding = index === 14 ? 0.04 : 0.16;
  const detail = {
    x: 172, y: 415, width: 195, height: 76,
    bounds: [west - padding, south - padding / 2, east + padding, north + padding / 2],
  };
  const surface = document.createElement('canvas');
  surface.width = detail.width;
  surface.height = detail.height;
  const ctx = surface.getContext('2d');
  ctx.translate(-detail.x, -detail.y);
  mapArea(ctx, detail, () => {
    ctx.fillStyle = '#17263a';
    ctx.fillRect(detail.x, detail.y, detail.width, detail.height);
    drawLand(ctx, europeanLand, detail, '#756488');
  });
  return { ...detail, surface };
}

function drawDetail(ctx, detail, traveled, current) {
  if (!detail) return;
  ctx.drawImage(detail.surface, detail.x, detail.y);
  mapArea(ctx, detail, () => {
    traceRoute(ctx, traveled, detail);
    const [x, y] = project(current, detail);
    ctx.fillStyle = '#ff9ca3';
    ctx.fillRect(x - 3, y - 3, 6, 6);
  });
  ctx.strokeStyle = '#776490';
  ctx.lineWidth = 1;
  ctx.strokeRect(detail.x, detail.y, detail.width, detail.height);
}

function stopRouteAnimation() {
  cancelAnimationFrame(routeAnimation);
}

function showRouteStop(index) {
  stopRouteAnimation();
  if (!backdropReady) prepareBackdrop();
  const history = workTrip.slice(0, index).flatMap(({ via }) => via);
  const leg = index === 0 ? workTrip[index].via : [history.at(-1), ...workTrip[index].via];
  const detail = prepareDetail(leg, index);
  const edges = leg.slice(1).map((point, i) => {
    const [x, y] = project(point, europe);
    const [px, py] = project(leg[i], europe);
    return Math.hypot(x - px, y - py);
  });
  const length = edges.reduce((sum, edge) => sum + edge, 0);
  const duration = reducedMotion.matches ? 0 : Math.min(2600, Math.max(540, length * 4.8));
  let start;

  function frame(now) {
    start ??= now;
    const progress = duration ? Math.min(1, (now - start) / duration) : 1;
    let distance = length * progress;
    const traveled = [leg[0]];
    for (const [i, edge] of edges.entries()) {
      const [x, y] = leg[i];
      const [nextX, nextY] = leg[i + 1];
      if (edge > distance) {
        const fraction = distance / edge;
        traveled.push([x + (nextX - x) * fraction, y + (nextY - y) * fraction]);
        break;
      }
      traveled.push(leg[i + 1]);
      distance -= edge;
    }

    const current = traveled.at(-1);
    mapContext.drawImage(mapBackdrop, 0, 0);
    traceRoute(mapContext, [...history, ...traveled], europe);
    drawDetail(mapContext, detail, traveled, current);
    drawPortrait(mapContext, current);
    if (progress < 1) routeAnimation = requestAnimationFrame(frame);
  }

  if (!routePortrait.getAttribute('src')) routePortrait.src = 'assets/route/portrait.webp';
  routeAnimation = requestAnimationFrame(frame);
}
