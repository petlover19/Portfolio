/**
 * Victoria Parsonage Ueda
 * IGME-102: Aquarium, 2/19/19
 * is the main class to create the fish and the water
 */

class Fish {
    constructor(fishWidth) {
        this.x = random(1, width)
        this.speedX = 2;
        this.width = fishWidth;
    }
    water(y) { //creates the water
        noFill();
        stroke(189, 229, 255);
        for (let mx = 10; mx < width; mx += 30) {
            ellipse(mx, y, 20, 20);
        }
    }

    within(y) { //tells whether or not the mouse is within the fish
        if (mouseX > this.x - 17.5 && mouseX < this.x + 30 && mouseY < y + 13 && mouseY > y - 13) {
            return (true);
        } else {
            return (false)
        }
    }

    move() { //moves the fish
        this.x = this.x - this.speedX;
        if (this.x < 0 - (23.75)) {
            this.x = width + (23.75);
        }
        return (this.x);
    }
    display(y) { //draws the fish and the water bubbles at y
        this.water(y)
        //this.within(y);

        //fish
        fill("red");
        stroke("orange");

        if (this.within(y) === true) {

            if ((frameCount / 3) % 2 === 0) {
                triangle(this.x + 15, y, this.x + 27, y + 13, this.x + sqrt(394) + 15, y - 5);
            } else if ((frameCount / 3) % 2 === 1) {
                triangle(this.x + 15, y, this.x + 27, y - 13, this.x + sqrt(394) + 15, y + 5);
            }
            ellipse(this.x, y, 35, 20);
        } else {
            triangle(this.x + 15, y, this.x + 30, y + 13, this.x + 30, y - 13);
            ellipse(this.x, y, 35, 20);
        }
    }
}
