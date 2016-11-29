export const handleDraw = (drawAction) => {
  const ctx = document.getElementById('canvas');
  console.log(ctx);

  ctx.addEventListener('mousedown', (e) => {
    console.log(e);
  });
};
