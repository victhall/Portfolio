const colors = ['#00A1E4', '#5dd751', '#FF7600', '#FFFF00'];

window.addEventListener("mousedown", (e) => {
  const color = colors.shift();
  document.documentElement.style.setProperty("--highlight-color", color);
  colors.push(color);
});


