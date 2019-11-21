const IS_LEFT_KEY = {
  ArrowLeft: true,
  37: true,
  KeyA: true,
  65: true
};
const IS_RIGHT_KEY = {
  ArrowRight: true,
  39: true,
  KeyD: true,
  68: true
};
const SLIDE_NUM_MAX = 10;
const SLIDE_URL_PREFIX = "s";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", onKeydown);
});

function onKeydown(ev) {
  const pressedKey = ev.code || ev.keyCode;
  if (window.location) {
    const hash = window.location.hash || "";
    const currentSlideNum = parseInt(
      hash.slice(SLIDE_URL_PREFIX.length + 1), // `+1` to account for the hash char
      10
    );
    if (IS_LEFT_KEY[pressedKey] && currentSlideNum > 1) {
      navigateWithNewHash(SLIDE_URL_PREFIX + (currentSlideNum - 1));
    }
    else if (IS_RIGHT_KEY[pressedKey]) {
      if (Number.isNaN(currentSlideNum)) {
        navigateWithNewHash(SLIDE_URL_PREFIX + 2);
      }
      else if (currentSlideNum < SLIDE_NUM_MAX) {
        navigateWithNewHash(SLIDE_URL_PREFIX + (currentSlideNum + 1));
      }
    }
  }
}

// FYI: the part after '#' in URL is called 'fragment identifier':
// https://en.wikipedia.org/wiki/Fragment_identifier
function navigateWithNewHash(urlFragment) {
  window.location.hash = urlFragment;
}
