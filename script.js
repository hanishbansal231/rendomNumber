let genraterBtn = document.getElementById('genraterBtn');

const random = () => {
  let min = document.getElementById('min');
  let max = document.getElementById('max');
  let show = document.getElementById('show');
  let minNumber = Number(min.value);
  let maxNumber = Number(max.value);

  if (minNumber > maxNumber) {
    minNumber = minNumber + maxNumber;
    maxNumber = minNumber - maxNumber;
    minNumber = minNumber - maxNumber;
    min.value = minNumber;
    max.value = maxNumber;
  }
  let num = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  show.innerText = num;
};

genraterBtn.addEventListener('click', random);