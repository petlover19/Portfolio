/**
 * Victoria Parsonage Ueda
 * IGME-102: Aquarium, 2/19/19
 * is the main class to create the fish and the water
 */


class Fish_Two extends Fish { //Triangle Fish
    display(y) { //draws the fish and the water bubbles at y
        this.water(y)
        //fish
        fill("black");
        stroke("white");

        if (this.within(y) === true) {

            if ((frameCount / 3) % 2 === 0) {
                triangle(this.x + 15, y, this.x + 27, y + 13, this.x + sqrt(394) + 15, y - 5);
            } else if ((frameCount / 3) % 2 === 1) {
                triangle(this.x + 15, y, this.x + 27, y - 13, this.x + sqrt(394) + 15, y + 5);
            }
            triangle(this.x - 15, y, this.x + 20, y + 20, this.x + 20, y - 20)
        } else {
            triangle(this.x + 15, y, this.x + 30, y + 13, this.x + 30, y - 13);
            triangle(this.x - 15, y, this.x + 20, y + 20, this.x + 20, y - 20)
        }
    }
    move() { //moves the fish
        this.speedX = 1

        this.x = this.x - this.speedX;
        if (this.x < 0 - (45)) {
            this.x = width + (45);
        }
        return (this.x);
    }
}
