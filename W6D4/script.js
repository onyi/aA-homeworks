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



});
