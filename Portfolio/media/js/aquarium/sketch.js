/**
 * Victoria Parsonage Ueda
 * IGME-102: Aquarium, 2/19/19
 * Draws multiple fish
 *creates an array of fish, randomly selecting from diffrent classes of fish
 */

"use strict"; //catch some common coding errors

//Global Variable
let fishSchool;
/**
 * setup :
 *cretes a canvas
 *sets the variable
 */
function setup() {

    createCanvas(random(600, 1000), 800);

    fishSchool = stockAquarium(15);
}

/**
 * draw :
 *sets the background color
 *draws the fish onto the canvas constantly so that they seem to be moving
 */
function draw() {
    background(102, 195, 254);

    for (let l = 0; l < fishSchool.length; l += 1) {
        let y = ((800 / fishSchool.length) * l) + 30;
        fishSchool[l].display(y);
        fishSchool[l].move();
    }


    if (mouseIsPressed === true) {
        noFill();
        strokeWeight(3);
        stroke("grey");
        ellipse(mouseX + 5, mouseY - 14, 8, 8);
        bezier(mouseX + 5, mouseY - 10, mouseX + 10, mouseY + 10, mouseX, mouseY + 10, mouseX - 7, mouseY + 5);
    }
    strokeWeight(1);
}



function getNewFish() { //Randomly selects which fish class to draw the fish of
    let fish1 = new Fish();
    let fish2 = new Fish_Two();
    let fish3 = new Fish_Three();
    let fish4 = new Fish_Four();

    let newFish = null;
    let r = round(random(1, 4));
    if (r == 1) {
        newFish = fish1;
    } else if (r == 2) {
        newFish = fish2;
    } else if (r == 3) {
        newFish = fish3;
    } else if (r == 4) {
        newFish = fish4;
    }

    return (newFish);
}

function stockAquarium(numFish) { //Adds the fish to the array so that they can be displayed on the canvas
    let fishies = [];
    print("*****Stocking The Aquariums*****");

    for (let i = 0; i < numFish; i += 1) {
        fishies.push(getNewFish());
    }
    return (fishies);
}
