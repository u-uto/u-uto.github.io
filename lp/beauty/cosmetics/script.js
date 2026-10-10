/* NUANCE — カラー診断(2問の回答から6色のうち1色を表示) */
(() => {
  // 色名・色コード・説明はここで変更できます
  const SHADES = {
    pink:  [["P01 ライトピンク", "#f3dcd0"], ["P02 ナチュラルピンク", "#e8c7b4"], ["P03 ヘルシーピンク", "#d4a88f"]],
    ochre: [["O01 ライトオークル", "#f1dcc3"], ["O02 ナチュラルオークル", "#e6c6a2"], ["O03 ヘルシーオークル", "#cfa47c"]]
  };
  const DESC = {
    pink: "赤みを活かして、血色感のある仕上がりに。",
    ochre: "黄みを含んだ、肌なじみのよい仕上がりに。"
  };
  const form = document.getElementById("shadeForm");
  if (!form) return;
  const update = () => {
    const [name, color] = SHADES[form.hue.value][+form.tone.value];
    document.getElementById("shadeChip").style.background = color;
    document.getElementById("shadeName").textContent = name;
    document.getElementById("shadeDesc").textContent = DESC[form.hue.value] + "お試しセットはこの色と前後の2色をお届けします。";
  };
  form.addEventListener("change", update);
  update();
})();
