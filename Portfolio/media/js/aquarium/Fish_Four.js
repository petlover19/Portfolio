/**
 * Victoria Parsonage Ueda
 * IGME-102: Aquarium, 2/19/19
 * is derived from the main class to create a diffrent fish
 */


class Fish_Four extends Fish { //Circle Fish
    display(y) { //draws the fish and the water bubbles at //moves the fishy
        this.water(y)
        //fish
        fill("yellow");
        stroke("brown");

        if (this.within(y) === true) {

            if ((frameCount / 3) % 2 === 0) {
                triangle(this.x + 15, y, this.x + 27, y + 13, this.x + sqrt(394) + 15, y - 5);
            } else if ((frameCount / 3) % 2 === 1) {
                triangle(this.x + 15, y, this.x + 27, y - 13, this.x + sqrt(394) + 15, y + 5);
            }
            ellipse(this.x, y, 40, 40);
        } else {
            triangle(this.x + 17, y, this.x + 35, y + 13, this.x + 35, y - 13);
            ellipse(this.x, y, 40, 40);
        }
    }
    move() { //moves the fish
        this.speedX = .5

        this.x = this.x - this.speedX;
        if (this.x < 0 - (55)) {
            this.x = width + (55);
        }
        return (this.x);
    }
}
