/* STEP — 目標ペース計算
   1か月あたり「現在の体重 × PACE」を目安に、目標までの期間を計算します。 */
(() => {
  const PACE = 0.03;        // 1か月に減らす目安(体重の3%)
  const WARN_RATIO = 0.15;  // 減量幅が体重の15%を超えたら注意文を表示
  const now = document.getElementById("calcNow");
  const goal = document.getElementById("calcGoal");
  if (!now || !goal) return;
  const $ = id => document.getElementById(id);
  const calc = () => {
    const n = parseFloat(now.value), g = parseFloat(goal.value);
    $("calcWarn").textContent = "";
    if (!(n > 0 && g > 0)) { $("calcMonths").textContent = "-"; $("calcPace").textContent = "体重を入力してください"; return; }
    if (g >= n) { $("calcMonths").textContent = "-"; $("calcPace").textContent = "目標体重は現在より低い値を入力してください"; return; }
    const perMonth = n * PACE;
    const months = Math.ceil(((n - g) / perMonth) * 2) / 2; // 0.5か月単位で切り上げ
    $("calcMonths").textContent = months;
    $("calcPace").textContent = `1か月あたり約${perMonth.toFixed(1)}kgのペース(合計 ${(n - g).toFixed(1)}kg)`;
    if ((n - g) / n > WARN_RATIO) $("calcWarn").textContent = "大きな目標は、カウンセリングで段階的に一緒に立てましょう。";
  };
  [now, goal].forEach(el => el.addEventListener("input", calc));
  calc();
})();
