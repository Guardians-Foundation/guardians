document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", ev => {
    console.log(ev.code);
  });
});

function navigateWithNewFragment(urlFragment) {
  window.location.hash = urlFragment;
}
