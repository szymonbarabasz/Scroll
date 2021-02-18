document.addEventListener("DOMContentLoaded", () => {
  window.scrollY; //właściwość pokazująca ile scrollowaliśmy - odjąć trzeba wysokość okna (window.innerHeight)
  document.documentElement.offsetHeight; //wysokość całej strony
  window.innerHeight; //wysokość okna przeglądarki

  const status = document.querySelector(".status");

  function statusbar() {
    let currentScroll = Math.round(
      (window.scrollY /
        (document.documentElement.offsetHeight - window.innerHeight)) *
        100
    ); //
    status.style.width = currentScroll + "%";
  }

  window.addEventListener("scroll", statusbar);
});
