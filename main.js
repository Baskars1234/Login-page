function login() {
  var favoritemovie = document.querySelector("input").value;
  sessionStorage.setItem("favoriteMovie", favoritemovie);
}
