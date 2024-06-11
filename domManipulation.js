// html elements
let example1 = document.querySelector(".example-1");
let pink = document.querySelector(".pink");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let lightGreen = document.querySelector(".light-green");
let row1 = document.querySelector(".row-1");

// CHALLENGE #1 - make the rows match

example1.style.backgroundColor = 'black';

pink.style.backgroundColor = 'pink';

// 3. Set the styling of `green` to a background color of green.

// 4. Set the styling of `blue` to a background color of blue.

// 5. Set the styling of `lightGreen` to a background color of lightGreen.

row1.style.color = 'white';



// CHALLENGE #2 - style the image

let image = document.querySelector(".image");
let imageButton = document.querySelector(".image-button");
                                   
imageButton.addEventListener('click', function() {image.style.width = '300px'});
imageButton.addEventListener('click', function() {image.styler.border = '5px solid #42068c'});

// Include the next tasks in the body of the function.

// 8. The image is wayyyy too big and needs a border.
// - Set the width of `image` to 300px
// - Set the border of `image` so that it's:
//   - solid
//   - hex color #42068c
//   - 5 pixels
