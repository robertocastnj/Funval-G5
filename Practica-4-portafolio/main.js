let all = document.querySelector("#all");
let button = document.querySelector("#btn");
button.addEventListener("click", function () {
  if (all.classList.contains("dark")) {
    all.classList.remove("dark");
  } else {
    all.classList.add("dark");
  }
});
