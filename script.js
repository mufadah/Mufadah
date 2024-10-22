document.addEventListener("DOMContentLoaded", function () {
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(
    ".nav-links a, .tombol-CV, .bottom img, .feed, .penjelasan2, .isi, .button, .desc "
  );

  if (mouseCursor) {
    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    }
    navLinks.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
      });
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
      });
    });
  } else {
    console.error("Cursor element not found.");
  }
});
