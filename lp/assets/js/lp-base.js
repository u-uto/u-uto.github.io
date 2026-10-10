/* =====================================================================
   LP BASE JS — 全LP共通の動き
   ・ヘッダーの影 / SPメニュー開閉 / スクロール表示アニメ / 追従CTA / タブ
   ・LP固有の動き(診断・シミュレーター等)は各LPの script.js に書く
   ===================================================================== */
(() => {
  const root = document.documentElement;

  // ヘッダー:スクロールしたら下線を出す
  const header = document.querySelector(".l-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // SPメニュー
  const toggle = document.querySelector(".l-header__toggle");
  if (toggle) {
    const setOpen = open => {
      root.classList.toggle("is-nav-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    };
    toggle.addEventListener("click", () => setOpen(!root.classList.contains("is-nav-open")));
    document.querySelectorAll(".l-nav a").forEach(a => a.addEventListener("click", () => setOpen(false)));
    addEventListener("keydown", e => e.key === "Escape" && setOpen(false));
  }

  // スクロールで表示(data-reveal を付けた要素)
  const targets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add("is-in"));
  }

  // 追従CTA(SP):ヒーローを過ぎたら表示、最後のCTAセクションでは隠す
  const sticky = document.querySelector(".c-sticky");
  const hero = document.querySelector(".p-hero");
  const finalCta = document.querySelector(".p-cta");
  if (sticky && hero && "IntersectionObserver" in window) {
    let pastHero = false, atCta = false;
    const sync = () => sticky.classList.toggle("is-show", pastHero && !atCta);
    new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; sync(); }).observe(hero);
    if (finalCta) new IntersectionObserver(([e]) => { atCta = e.isIntersecting; sync(); }).observe(finalCta);
  }

  // タブ(role="tablist" の中の role="tab")
  document.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = tab => tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", e => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
        select(next); next.focus();
      });
    });
  });

  // フッターの年
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
