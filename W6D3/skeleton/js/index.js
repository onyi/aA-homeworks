console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax({
  type: "POST",
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  dataType: 'json',
  success: function (response) {
    console.log(`Successfully retrieve data!`);
    // console.log(response);

    let $ui = $("<ul>");
    // $("body").append($ul);

    Object.values(response).forEach( (ele) => {
      console.log(ele);
      Object.entries(ele).forEach ( (key, value) => {
        console.log(`Key: ${key}: ${value}`);
      })
    });

  },
  error: function(response){
    console.log("Error occurred... " + response);
  }
});

// Add another console log here, outside your AJAX request

console.log('This is outside of AJAX call');