import { useEffect, useRef } from 'react';

const LAT_COUNT = 14;
const LON_COUNT = 32;
const TILT = 0.38;
const VISIBLE_R = 400;
const BEAT_FREQ = 1.2;
const RIPPLE_DIST = 0.010;
const DRIFT_SPEED = 0.005;
const ROT_SPEED = 0.06;
const DRAG_SENS = 0.001;
const BEAT_POS = 9;

interface GlobeDot {
  lat: number;
  lon0: number;
  shade: number;
  baseRadius: number;
  baseAlpha: number;
}

interface Edge { a: number; b: number; }

function buildGlobe(): { dots: GlobeDot[]; edges: Edge[] } {
  const dots: GlobeDot[] = [];
  const edges: Edge[] = [];

  for (let i = 0; i < LAT_COUNT; i++) {
    const lat = -Math.PI / 2 * 0.88 + Math.PI * 0.88 * (i / (LAT_COUNT - 1));
    for (let j = 0; j < LON_COUNT; j++) {
      dots.push({
        lat,
        lon0: (2 * Math.PI * j) / LON_COUNT,
        shade: Math.floor(8 + Math.random() * 48),
        baseRadius: 1.4 + Math.random() * 1.3,
        baseAlpha: 0.5 + Math.random() * 0.4,
      });
    }
  }

  for (let i = 0; i < LAT_COUNT; i++) {
    for (let j = 0; j < LON_COUNT; j++) {
      const idx = i * LON_COUNT + j;
      edges.push({ a: idx, b: i * LON_COUNT + (j + 1) % LON_COUNT });
      if (i < LAT_COUNT - 1)
        edges.push({ a: idx, b: (i + 1) * LON_COUNT + j });
    }
  }

  return { dots, edges };
}

export default function MagneticConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0, vx: ROT_SPEED * DRIFT_SPEED, vy: 0 });
  const rotRef = useRef({ yaw: 0, pitch: TILT });
  const globeRef = useRef(buildGlobe());
  const rafRef = useRef<number>(0);
  const tRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const build = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      sizeRef.current = { w: canvas.width, h: canvas.height };
    };

    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) return;
      dragRef.current.isDragging = true;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      document.body.style.userSelect = 'none';
    };
    const onUp = () => { 
      dragRef.current.isDragging = false;
      document.body.style.userSelect = '';
    };
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dragRef.current.isDragging) {
        const dx = e.clientX - dragRef.current.lastX;
        const dy = e.clientY - dragRef.current.lastY;
        dragRef.current.lastX = e.clientX;
        dragRef.current.lastY = e.clientY;
        dragRef.current.vx = dx * DRAG_SENS;
        dragRef.current.vy = dy * DRAG_SENS;
      }
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      if (dragRef.current.isDragging) {
        dragRef.current.isDragging = false;
        document.body.style.userSelect = '';
      }
    };

    build();
    window.addEventListener('resize', build);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    const tick = () => {
      tRef.current += DRIFT_SPEED;
      const t = tRef.current;
      const { w, h } = sizeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const { dots, edges } = globeRef.current;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.max(w, h) * 0.45; // Significantly larger, bases size on the larger screen dimension
      const beat = Math.sin(t * BEAT_FREQ * Math.PI * 2);

      if (!dragRef.current.isDragging) {
        dragRef.current.vx += (ROT_SPEED * DRIFT_SPEED - dragRef.current.vx) * 0.05;
        dragRef.current.vy += (0 - dragRef.current.vy) * 0.05;
      }
      rotRef.current.yaw += dragRef.current.vx;
      rotRef.current.pitch += dragRef.current.vy;

      // Constrain vertical pitch to avoid flipping upside down
      rotRef.current.pitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, rotRef.current.pitch));

      const { yaw, pitch } = rotRef.current;
      const cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
      const cpit = Math.cos(pitch), spit = Math.sin(pitch);

      type Proj = {
        sx: number; sy: number; depth: number;
        alpha: number; dotR: number; shade: number; proxSq: number;
      };

      const proj: Proj[] = dots.map(dot => {
        const clAT = Math.cos(dot.lat);
        const slAT = Math.sin(dot.lat);
        const clon = Math.cos(dot.lon0);
        const slon = Math.sin(dot.lon0);

        const x1 = clAT * clon;
        const z1 = clAT * slon;
        const y1 = slAT;

        const x2 = x1 * cyaw - z1 * syaw;
        const z2 = z1 * cyaw + x1 * syaw;
        const y2 = y1;

        const y3 = y2 * cpit - z2 * spit;
        const z3 = y2 * spit + z2 * cpit;

        const sxBase = cx + x2 * radius;
        const syBase = cy + y3 * radius;
        const depth = z3;

        const dx = sxBase - mx;
        const dy = syBase - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const prox = Math.max(0, 1 - dist / VISIBLE_R);
        const proxSq = prox * prox;

        const ripplePhase = t * BEAT_FREQ * Math.PI * 2 - dist * RIPPLE_DIST;
        const ripple = Math.sin(ripplePhase);

        const depthFront = (depth + 1) / 2;
        const baseA = 0.04 + 0.07 * depthFront;
        const cursorA = proxSq * dot.baseAlpha * (0.35 + 0.65 * (0.5 + 0.5 * ripple));
        const alpha = Math.min(0.92, baseA + cursorA);

        const shift = ripple * BEAT_POS * proxSq;
        const dirX = dist > 0 ? dx / dist : 0;
        const dirY = dist > 0 ? dy / dist : 0;

        const dotR = dot.baseRadius
          * (0.45 + 0.55 * depthFront)
          * (1 + 0.9 * proxSq + 0.25 * beat * proxSq + 0.2 * ripple * proxSq);

        return {
          sx: sxBase + dirX * shift,
          sy: syBase + dirY * shift,
          depth, alpha, proxSq,
          dotR: Math.max(0.3, dotR),
          shade: dot.shade,
        };
      });

      ctx.lineCap = 'round';
      for (const e of edges) {
        const a = proj[e.a], b = proj[e.b];
        const edgeAlpha = Math.min(a.alpha, b.alpha) * 0.45;
        if (edgeAlpha < 0.008) continue;

        const midDepth = (a.depth + b.depth) / 2;
        const backFade = 0.35 + 0.65 * ((midDepth + 1) / 2);
        const midShade = Math.round((proj[e.a].shade + proj[e.b].shade) / 2);

        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = `hsla(0,0%,${midShade}%,${edgeAlpha * backFade})`;
        ctx.lineWidth = 0.4 + 0.5 * ((midDepth + 1) / 2);
        ctx.stroke();
      }

      const sorted = [...proj].sort((a, b) => a.depth - b.depth);
      for (const d of sorted) {
        if (d.alpha < 0.015) continue;
        ctx.save();
        ctx.shadowBlur = 8 * d.proxSq;
        ctx.shadowColor = `hsla(0,0%,${d.shade}%,${d.alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(d.sx, d.sy, d.dotR, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0,0%,${d.shade}%,${d.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', build);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
