/** Progressive visual effects. Native navigation and scroll remain available without JS. */
export function initConceptMotion() {
  const body = document.body;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(pointer: fine)");
  const toggle = document.querySelector<HTMLButtonElement>(".motion-toggle");
  const hero = document.querySelector<HTMLElement>(".concept-hero");
  const artLayers = [...document.querySelectorAll<HTMLElement>(".concept-art")];
  const parallax = [
    ...document.querySelectorAll<HTMLElement>("[data-parallax]"),
  ];
  const canvases = [
    ...document.querySelectorAll<HTMLCanvasElement>("canvas[data-art]"),
  ];
  const magnetics = [
    ...document.querySelectorAll<HTMLElement>("[data-magnetic]"),
  ];
  const cards = [...document.querySelectorAll<HTMLElement>("[data-spotlight]")];
  let userPaused = false;
  let paused = reduced.matches;
  let frame = 0;
  let lastPaint = 0;
  let lastFrame = 0;
  let elapsed = 0;
  let targetX = 0;
  let targetY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let sceneX = 0;
  let sceneY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let pointerPresent = false;
  let heroProgress = 0;

  // Seeded geometry keeps the initial composition reproducible across captures.
  let seed = 731;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const stars = Array.from({ length: 260 }, () => ({
    x: random(),
    y: random(),
    size: random() * 1.6 + 0.35,
    alpha: random() * 0.5 + 0.22,
    depth: random(),
    phase: random() * Math.PI * 2,
  }));
  const dust = Array.from({ length: 1900 }, () => ({
    angle: random() * Math.PI * 2,
    radius: 1.02 + random() ** 1.7 * 1.4,
    y: (random() - 0.5) * 0.045,
    alpha: random() * 0.8 + 0.12,
    size: random() * 1.1 + 0.25,
  }));
  const inView = new WeakMap<Element, boolean>();
  const visualObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) =>
        inView.set(entry.target, entry.isIntersecting),
      ),
    { rootMargin: "80px" },
  );

  const surfaces = canvases.map((canvas) => {
    const context = canvas.getContext("2d");
    visualObserver.observe(canvas);
    inView.set(canvas, true);
    return {
      canvas,
      context,
      width: 0,
      height: 0,
      compact: !!canvas.closest(".compact"),
    };
  });

  function resizeCanvases() {
    for (const surface of surfaces) {
      // Layout dimensions remain stable while the scene is transformed in 3D.
      const width = surface.canvas.clientWidth;
      const height = surface.canvas.clientHeight;
      surface.width = width;
      surface.height = height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.canvas.width = Math.round(width * ratio);
      surface.canvas.height = Math.round(height * ratio);
      surface.context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    if (paused) paintAll(0);
  }
  const resizeObserver = new ResizeObserver(resizeCanvases);
  canvases.forEach((canvas) => resizeObserver.observe(canvas));

  function paintStars(surface: (typeof surfaces)[number], time: number) {
    const { context: ctx, width: w, height: h, compact } = surface;
    if (!ctx || !w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const bounds = surface.canvas.getBoundingClientRect();
    const localX = mouseX - bounds.left,
      localY = mouseY - bounds.top;
    const active =
      !paused && pointerPresent && fine.matches && localY >= 0 && localY <= h;
    const count = Math.min(stars.length, Math.round((w * h) / 3800));
    for (let i = 0; i < count; i++) {
      const star = stars[i];
      const depth = (compact ? 15 : 32) + star.depth * (compact ? 25 : 122);
      const drift = paused ? 0 : Math.sin(time * 0.12 + star.phase) * 5;
      let x =
        ((((star.x * (w + 260) - pointerX * depth + drift + 130) % (w + 260)) +
          w +
          260) %
          (w + 260)) -
        130;
      let y =
        ((((star.y * (h + 180) - pointerY * depth * 0.8 + 90) % (h + 180)) +
          h +
          180) %
          (h + 180)) -
        90;
      const originalX = x,
        originalY = y;
      const dx = localX - x,
        dy = localY - y;
      const distance = Math.hypot(dx, dy);
      const influence = active ? Math.max(0, 1 - distance / 240) : 0;
      // A broad attraction field bends the existing starfield instead of drawing a cursor.
      if (influence > 0 && distance > 1) {
        const pull = influence * influence * (30 + star.depth * 44);
        x += (dx / distance) * pull;
        y += (dy / distance) * pull;
      }
      const veil = compact
        ? 1
        : w <= 760
          ? 0.3 + Math.min(0.7, y / h)
          : 0.24 + Math.min(0.76, Math.max(0, x / w));
      const alpha = Math.min(0.95, star.alpha * veil + influence * 0.45);
      if (influence > 0.12) {
        ctx.strokeStyle = `rgba(237,187,120,${influence * 0.28})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(originalX, originalY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      if (star.depth > 0.7 || influence > 0.3) {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4.5);
        glow.addColorStop(0, `rgba(255,220,164,${alpha * 0.46})`);
        glow.addColorStop(1, "rgba(255,220,164,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(
          x - star.size * 4.5,
          y - star.size * 4.5,
          star.size * 9,
          star.size * 9,
        );
      }
      ctx.fillStyle = `rgba(247,226,192,${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, star.size * 0.6 + influence * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function paintHorizon(surface: (typeof surfaces)[number], time: number) {
    const { context: ctx, width: w, height: h, compact } = surface;
    if (!ctx || !w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const mobile = !compact && w <= 760;
    const cx = w * (compact ? 0.55 : mobile ? 0.5 : 0.7);
    const cy = h * (compact ? 0.4 : mobile ? 0.5 : 0.46);
    const radius = compact
      ? w * 0.315
      : mobile
        ? Math.min(w * 0.34, 175)
        : Math.min(w * 0.21, 325);
    const bounds = surface.canvas.getBoundingClientRect();
    const localMouseX = mouseX - bounds.left;
    const localMouseY = mouseY - bounds.top;
    const angle = -0.49 + sceneX * 0.1;
    const inclination = 0.26 + sceneY * 0.04;
    const cos = Math.cos(angle),
      sin = Math.sin(angle);
    for (const point of dust) {
      const t = point.angle + time * 0.018;
      const x = Math.cos(t) * radius * point.radius;
      const z = Math.sin(t);
      const y = z * radius * point.radius * inclination + point.y * radius;
      let px = x * cos - y * sin;
      let py = x * sin + y * cos;
      if (px * px + py * py < radius ** 2 * 0.98 && z < 0) continue;
      // Local dust displacement adds depth to the scene's camera and orbital response.
      const dx = cx + px - localMouseX,
        dy = cy + py - localMouseY;
      const distance = Math.hypot(dx, dy);
      if (
        !paused &&
        !compact &&
        fine.matches &&
        pointerPresent &&
        distance < 140 &&
        distance > 1
      ) {
        const force = (1 - distance / 140) * 8;
        px += (dx / distance) * force;
        py += (dy / distance) * force;
      }
      const veil =
        compact || mobile
          ? 1
          : Math.min(1, Math.max(0.1, ((cx + px) / w) * 1.4 - 0.2));
      ctx.fillStyle = `rgba(235,${Math.round(157 + point.radius * 22)},122,${point.alpha * 0.7 * veil})`;
      ctx.fillRect(cx + px, cy + py, point.size, point.size * 0.65);
    }
  }

  function paintMatter(surface: (typeof surfaces)[number], time: number) {
    const { context: ctx, width: w, height: h, compact } = surface;
    if (!ctx || !w || !h) return;
    ctx.clearRect(0, 0, w, h);
    const mobile = !compact && w <= 760;
    const cx = w * (compact ? 0.54 : mobile ? 0.53 : 0.76);
    const cy = h * (compact ? 0.37 : mobile ? 0.71 : 0.46);
    const scale = compact
      ? w * 0.235
      : mobile
        ? w * 0.31
        : Math.min(w * 0.17, 265);
    const rotationX = 1.02 + pointerY * 0.13;
    const rotationY = 0.34 + pointerX * 0.17 + time * 0.035;
    const rotationZ = -0.48 + (compact || mobile ? 0 : heroProgress * 0.35);
    const sx = Math.sin(rotationX),
      cosx = Math.cos(rotationX);
    const sy = Math.sin(rotationY),
      cosy = Math.cos(rotationY);
    const sz = Math.sin(rotationZ),
      cosz = Math.cos(rotationZ);
    function project(x: number, y: number, z: number) {
      const y1 = y * cosx - z * sx,
        z1 = y * sx + z * cosx;
      const x2 = x * cosy + z1 * sy,
        z2 = -x * sy + z1 * cosy;
      return {
        x: cx + (x2 * cosz - y1 * sz) * scale,
        y: cy + (x2 * sz + y1 * cosz) * scale,
        z: z2,
      };
    }
    const rings = [];
    for (let i = 0; i < 132; i++) {
      const u = (i / 132) * Math.PI * 2;
      const radius = 1 + 0.13 * Math.sin(3 * u);
      const tube = 0.32 + 0.065 * Math.cos(3 * u);
      const points = [];
      for (let j = 0; j <= 52; j++) {
        const v = (j / 52) * Math.PI * 2;
        const r = radius + tube * Math.cos(v);
        points.push(
          project(
            r * Math.cos(u),
            r * Math.sin(u),
            tube * Math.sin(v) + 0.24 * Math.sin(3 * u),
          ),
        );
      }
      const center = project(
        radius * Math.cos(u),
        radius * Math.sin(u),
        0.24 * Math.sin(3 * u),
      );
      rings.push({ points, z: center.z, u });
    }
    rings.sort((a, b) => a.z - b.z);
    for (const ring of rings) {
      ctx.beginPath();
      ring.points.forEach((p, i) =>
        i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y),
      );
      ctx.closePath();
      const light = Math.round(
        95 + (Math.sin(ring.u * 2 - 0.3) * 0.5 + 0.5) * 134,
      );
      ctx.fillStyle = `rgb(${light},${light + 3},${light})`;
      ctx.fill();
      const green = ring.u > 3.4 && ring.u < 4.0;
      ctx.strokeStyle = green
        ? "#c3f181"
        : `rgba(${Math.max(15, light - 86)},${Math.max(24, light - 75)},${Math.max(15, light - 88)},.75)`;
      ctx.lineWidth = compact ? 0.65 : 0.9;
      ctx.stroke();
    }
  }

  function paintAll(time: number) {
    for (const surface of surfaces) {
      if (!inView.get(surface.canvas)) continue;
      if (surface.canvas.dataset.art === "horizon-stars")
        paintStars(surface, time);
      else if (surface.canvas.dataset.art === "horizon")
        paintHorizon(surface, time);
      else paintMatter(surface, time);
    }
  }

  function render(now: number) {
    frame = 0;
    if (paused || document.hidden) return;
    const delta = Math.min(now - lastFrame, 50);
    lastFrame = now;
    // Background feedback follows every display frame with refresh-rate-independent 90ms damping.
    const response = 1 - Math.exp(-delta / 90);
    pointerX += (targetX - pointerX) * response;
    pointerY += (targetY - pointerY) * response;
    // The foreground settles gently while the independent background keeps its faster response.
    const sceneResponse = 1 - Math.exp(-delta / 320);
    sceneX += (targetX - sceneX) * sceneResponse;
    sceneY += (targetY - sceneY) * sceneResponse;
    elapsed += delta / 1000;
    const heroBounds = hero?.getBoundingClientRect();
    heroProgress = hero
      ? Math.min(
          1.3,
          Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight),
        )
      : 0;
    for (const layer of artLayers) {
      const interactive =
        !heroBounds ||
        (layer.closest(".concept-hero") && heroBounds.bottom > 0);
      layer.style.setProperty("--px", String(interactive ? pointerX : 0));
      layer.style.setProperty("--py", String(interactive ? pointerY : 0));
      layer.style.setProperty("--scene-x", String(interactive ? sceneX : 0));
      layer.style.setProperty("--scene-y", String(interactive ? sceneY : 0));
      layer.style.setProperty("--progress", String(heroProgress));
    }
    if (window.innerWidth > 760)
      for (const element of parallax) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const amount = Number(element.dataset.parallax || 0);
          const offset = element.classList.contains("hero-copy")
            ? window.scrollY
            : rect.top - window.innerHeight * 0.5;
          element.style.transform = `translate3d(0,${offset * amount}px,0)`;
        }
      }
    // Keep the heavier particle painting at 30fps; off-screen canvases do not paint.
    if (now - lastPaint >= 1000 / 30) {
      lastPaint = now;
      paintAll(elapsed);
    }
    frame = requestAnimationFrame(render);
  }

  function syncMotion() {
    paused = userPaused || reduced.matches;
    body.classList.toggle("motion-paused", paused);
    body.classList.toggle("motion-ready", !paused);
    toggle?.setAttribute("aria-pressed", String(paused));
    if (toggle) {
      toggle.disabled = reduced.matches;
      toggle.textContent = reduced.matches
        ? toggle.dataset.reducedLabel || "Reduced motion"
        : paused
          ? toggle.dataset.resumeLabel || "Resume motion"
          : toggle.dataset.pauseLabel || "Pause motion";
    }
    if (paused) {
      cancelAnimationFrame(frame);
      frame = 0;
      pointerX = 0;
      pointerY = 0;
      sceneX = 0;
      sceneY = 0;
      heroProgress = 0;
      for (const layer of artLayers)
        for (const key of [
          "--px",
          "--py",
          "--scene-x",
          "--scene-y",
          "--progress",
        ])
          layer.style.setProperty(key, "0");
      for (const element of [...parallax, ...magnetics])
        element.style.transform = "";
      paintAll(0);
    } else if (!frame && !document.hidden) {
      lastPaint = performance.now();
      lastFrame = lastPaint;
      frame = requestAnimationFrame(render);
    }
  }
  const revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((element) => revealObserver.observe(element));

  window.addEventListener(
    "pointermove",
    (event) => {
      if (paused || !fine.matches || event.pointerType === "touch") return;
      pointerPresent = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      const bounds = hero?.getBoundingClientRect();
      if (bounds) {
        const visibleTop = Math.max(0, bounds.top);
        const visibleBottom = Math.min(window.innerHeight, bounds.bottom);
        const inside =
          event.clientY >= visibleTop && event.clientY <= visibleBottom;
        const gain = body.dataset.concept === "horizon" ? 1.35 : 1;
        targetX = inside
          ? Math.max(
              -1,
              Math.min(
                1,
                ((event.clientX - bounds.left) / bounds.width - 0.5) * 2 * gain,
              ),
            )
          : 0;
        targetY = inside
          ? Math.max(
              -1,
              Math.min(
                1,
                ((event.clientY - visibleTop) /
                  Math.max(1, visibleBottom - visibleTop) -
                  0.5) *
                  2 *
                  gain,
              ),
            )
          : 0;
      } else {
        targetX = (event.clientX / window.innerWidth - 0.5) * 2;
        targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      }
    },
    { passive: true },
  );
  document.documentElement.addEventListener("pointerleave", () => {
    pointerPresent = false;
    targetX = 0;
    targetY = 0;
  });
  for (const element of magnetics) {
    element.addEventListener("pointermove", (event) => {
      if (paused || !fine.matches) return;
      const rect = element.getBoundingClientRect();
      element.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.12}px,${(event.clientY - rect.top - rect.height / 2) * 0.15}px)`;
    });
    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  }
  for (const card of cards)
    card.addEventListener(
      "pointermove",
      (event) => {
        if (paused || !fine.matches) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--sx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--sy", `${event.clientY - rect.top}px`);
      },
      { passive: true },
    );
  toggle?.addEventListener("click", () => {
    userPaused = !userPaused;
    syncMotion();
  });
  reduced.addEventListener("change", syncMotion);
  fine.addEventListener("change", () => {
    targetX = 0;
    targetY = 0;
    pointerPresent = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else syncMotion();
  });
  resizeCanvases();
  syncMotion();
}
