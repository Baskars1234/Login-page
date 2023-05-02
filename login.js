var favoritemovie = sessionStorage.getItem("favoriteMovie");
console.log(favoritemovie);
function welcome() {
  document.getElementById("heading").innerHTML = "Hi " + favoritemovie + ",";
}
