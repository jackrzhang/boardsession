export const handleDraw = (drawAction) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('onmousedown', (e) => {
    console.log(e);
  }, false);
};
