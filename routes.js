const btnHome = document.querySelector("#btnHome");
const btnComparison = document.querySelector("#btnComparison");
const btnDocumentation = document.querySelector("#btnDocumentation");
const btnInformation = document.querySelector("#btnInformation");

btnHome.addEventListener("click", function () {
  location.href = "ProjectCaf2/";
});
btnComparison.addEventListener("click", function () {
  location.href = "/comparison.html";
});
btnDocumentation.addEventListener("click", function () {
  location.href = "/documentation.html";
});
btnInformation.addEventListener("click", function () {
  location.href = "/information.html";
});
