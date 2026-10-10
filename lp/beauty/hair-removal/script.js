/* LISSE — 料金シミュレーター
   部位の料金は index.html の各 input の value(円)で設定します。 */
(() => {
  const FULL_BODY_PRICE = 118800; // 全身脱毛プラン(12回)の料金
  const form = document.getElementById("simForm");
  if (!form) return;
  const boxes = [...form.querySelectorAll("input[type=checkbox]")];
  const yen = n => n.toLocaleString("ja-JP");
  const calc = () => {
    const picked = boxes.filter(b => b.checked);
    const sum = picked.reduce((a, b) => a + Number(b.value), 0);
    document.getElementById("simCount").textContent = picked.length + "部位";
    document.getElementById("simSum").textContent = yen(sum);
    document.getElementById("simHint").textContent =
      picked.length === 0 ? "気になる部位を選んでください" :
      sum >= FULL_BODY_PRICE ? `全身プラン(12回 ${yen(FULL_BODY_PRICE)}円)のほうがお得です` :
      picked.length >= 3 ? "部位が増えるなら、全身プランとも比べてみてください" :
      "6回コースの目安料金です";
  };
  form.addEventListener("change", calc);
  calc();
})();
