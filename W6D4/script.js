document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const submit = document.getElementsByClassName("favorite-submit");
  const restaurants = document.getElementById("restaurants");
  const input = document.getElementsByClassName("favorite-input")[0];
  const favPlace = document.getElementsByClassName("add-favorite-place");
  console.log(favPlace);
  favPlace[0].addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(`Submit event triggered, e: ${e}`);
    let place = input.value;
    console.log(`Values: ${place}`);
    const li = document.createElement("li");
    li.textContent = place;
    restaurants.prepend(li);
  }); 




  // adding new photos

  // --- your code here!
  const showPhotoButton = document.getElementById("photo-show-button");
  showPhotoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const showPhotoDiv = document.getElementsByClassName("photo-form-container")[0];
    if(showPhotoDiv.classList.contains("hidden"))
      showPhotoDiv.classList.remove("hidden");
  })
  const showPhotoForm = document.getElementById("show-photo-form");
  showPhotoForm.addEventListener("submit", e => {
    e.preventDefault();
  })
  const showPhotoSubmit = document.getElementsByClassName("photo-url-submit")[0];
  showPhotoSubmit.addEventListener("click", (e) => {
    const photoUrlInput = document.getElementsByClassName("photo-url-input")[0];
    const photos = document.getElementsByClassName("dog-photos")[0];
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute("src", photoUrlInput.value);
    li.append(img)
    photos.append(li);
  });



});
