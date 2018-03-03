// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const width = document.querySelector('#inputWidth');
 let widthVal = width.value;
  width.addEventListener('change', function(evt) {
    widthVal = this.value;
});
const height = document.querySelector('#inputHeight');
let heightVal = height.value;
  height.addEventListener('change', function(evt) {
    heightVal = this.value;
});

const canvas = document.querySelector('#pixelCanvas');

const color = document.querySelector('#colorPicker');
let colorVal = color.value;
  color.addEventListener('change', function(evt) {
  colorVal = this.value;
});


function makeGrid() {
  // loop to remove all children before drawing the canvas again
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  console.log(colorVal);

  // conditional to limit the size of the canvas
  if (heightVal > 50 || widthVal > 50) {
    alert('Please insert a value between 1 and 50. Thank you!');
  }

  //  loops to create the canvas
  for (i = 0; i < heightVal; i++) {
    const row = document.createElement('tr');
    canvas.appendChild(row);

    for (j =0; j < widthVal; j ++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
  }
}

// run the function when the submit button is pressed.
document.addEventListener('submit', function(evt) {
  evt.preventDefault();
  makeGrid();

});


canvas.addEventListener('click', function(e) {
  console.log(e.target);
  e.target.style.background = colorVal;
});
