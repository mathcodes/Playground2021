 // Event listener for our cat-button
 $("#recipe-button").on("click", function() {

  

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.edamam.com/search?q=chicken&app_id=da0c3e38&app_key=7ba7f52c500edec95548d4c8fadc1220&calories=591-722&health=alcohol-free";
    
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.hits[Math.floor(Math.random() * 10)].recipe.image;

        // Creating and storing an image tag
        var recipeImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        recipeImage.attr("src", imageUrl);
        recipeImage.attr("alt", "recipe image");

        // Prepending the recipeImage to the images div
        $("#recipeImages").prepend(recipeImage);
      });
  });