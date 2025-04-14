let header = document.querySelector("header");
let btn = document.querySelector(".about > button");
if (window.scrollY < 80) {
  btn.style.display = "none";
  header.style.cssText = "background-color: none;";
}

window.onscroll = function () {
  if (window.scrollY >= 80) {
    header.style.cssText = "background-color: rgba(40, 58, 90, 0.9);";
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    header.style.cssText = "background-color: none;";
  }
}
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};