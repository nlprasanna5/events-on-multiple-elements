const COLORS = [
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DodgerBlue",
   "FireBrick",
   "Gold",
   "Green",
   "GreenYellow",
   "Red",
   "Pink",
   "Violet",
   "HoneyDew",
   "White",
   "Black",
   "ForestGreen",
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DodgerBlue",
   "FireBrick",
   "Gold",
   "Green",
   "GreenYellow",
   "Red",
   "Pink",
   "Violet",
   "HoneyDew",
   "White",
   "Black",
   "crimson",
   "purple",
   "skyblue",
   "blue",
   "brown",
   "orange",
   "silver",
   "gray",
   "fuchsia",
   "lime",
   "olive",
   "navy",
   "teal",
   "aqua",
   "blueviolet",
   "burlywood",
   "cadetblue",
   "chocolate",
   "coral",
   "cornflowerblue",
   "darkcyan",
   "darkgoldenred",
   "indianred",
   "ivory",
   "khaki",
   "lightblue",
   "yellowgreen"


];

let root = document.querySelector('.buttons');
let h1 = document.querySelector('h1');

function handleClick(colorText, e) {
    if(e.shiftKey === true){
    h1.innerText = colorText;
    h1.style.backgroundColor = colorText;
}
else {
    h1.innerText = "Use shift key to change color";
    

}

    }
    


COLORS.forEach((color) => {
    let div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute("data-color", color);

   // div.addEventListener("click", function(event) {
     //   console.log(event);
      //  handleClick(color,event);
    //})
    div.style.background = color;
    root.append(div);
});

function handleEvent(event) {
    let color = event.target.dataset.color;
    //let color = event.target.style.backgroundColor;
    h1.innerText = color;
    h1.style.backgroundColor = color;
}

root.addEventListener("click",handleEvent);
