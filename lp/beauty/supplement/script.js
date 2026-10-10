/* YORUNE — 眠りのセルフチェック(チェック数に応じてメッセージを表示) */
(() => {
  const boxes = [...document.querySelectorAll("#checkBox input")];
  const out = document.getElementById("checkOut");
  if (!out) return;
  // メッセージはここで変更できます
  const message = n =>
    n === 0 ? "" :
    n <= 2 ? `${n}個チェック:眠りの時間を見直すヒントがありそうです。` :
             `${n}個チェック:夜の過ごし方を少し整えてみませんか。`;
  boxes.forEach(b => b.addEventListener("change", () => {
    out.textContent = message(boxes.filter(x => x.checked).length);
  }));
})();
