/**
 * Victoria Parsonage Ueda
 * IGME-102: Aquarium, 2/19/19
 * is the main class to create the fish and the water
 */


class Fish_Three extends Fish { //rectangle Fish
    display(y) { //draws the fish and the water bubbles at y
        this.water(y)
        //fish
        fill("green");
        stroke(15, 67, 35);

        if (this.within(y) === true) {

            if ((frameCount / 3) % 2 === 0) {
                triangle(this.x + 15, y, this.x + 27, y + 13, this.x + sqrt(394) + 15, y - 5);
            } else if ((frameCount / 3) % 2 === 1) {
                triangle(this.x + 15, y, this.x + 27, y - 13, this.x + sqrt(394) + 15, y + 5);
            }
            rect(this.x - 25, y - 10, 50, 20);
        } else {
            triangle(this.x + 20, y, this.x + 40, y + 13, this.x + 40, y - 13);
            rect(this.x - 25, y - 10, 50, 20);
        }
    }
    move() { //moves the fish
        this.speedX = 3

        this.x = this.x - this.speedX;
        if (this.x < 0 - (75)) {
            this.x = width + (75);
        }
        return (this.x);
    }
}
