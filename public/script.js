const list = document.querySelectorAll('ol>li');

// USING THE PLSRD (aka backpack)
function startAnimation() {
  let counter = 1;
  function setAnimation(item) {
    counter % 2 != 0
      ? item.setAttribute('data-aos', 'fade-right')
      : item.setAttribute('data-aos', 'fade-left');
    counter++;
  }
  return setAnimation;
}

const setAnimation = startAnimation();

for (let item of list) {
  setAnimation(item);
}

AOS.init();
