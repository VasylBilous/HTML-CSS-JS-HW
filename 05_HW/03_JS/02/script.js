document.body.onclick = (e) => {
  let ball = document.querySelector('.ball');
  let field = document.querySelector('.field').getBoundingClientRect();

  let x = parseFloat(e.clientX);
  let y = parseFloat(e.clientY);
  let fieldX = field.width;
  let fieldY = field.height;
  let windowX = document.body.clientWidth;
  let windowY = document.body.clientHeight;

  let cordX, cordY;

  if (x - ball.width / 2 >= (windowX - fieldX) / 2 && x + ball.width / 2 <= (windowX - fieldX) / 2 + fieldX)
    cordX = x - ball.width;

  if (y - ball.height / 2 >= (windowY - fieldY) / 2 && y + ball.height / 2 <= (windowY - fieldY) / 2 + fieldY)
    cordY = y - ball.height + (windowY - fieldY) / 2;

  ball.style.top = `${cordY}px`
  ball.style.left = `${cordX}px`
}