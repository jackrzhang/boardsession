export const handleStartDrawing = (startDrawing) => {

};

export const handleStopDrawing = (stopDrawing) => {

};

export const handleDraw = (isDrawing, draw) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('onmousedown', (e) => {
    console.log(e);
  }, false);
};
