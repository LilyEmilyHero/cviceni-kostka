const diceElement = document.querySelector('.dice');
let side = 1;

const rolling = () => {
  side = side + 1;
  if (side === 7) {
    side = 1;
  }
  diceElement.src = `img/side${side}.svg`;
};

document.addEventListener('keydown', rolling);
