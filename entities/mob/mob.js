import { Entity } from "../entity.js";

export class Mob extends Entity {
    constructor(x, y, length, width){
        super(x, y, length, width)

        this.hp = 0
        this.xSpeed = 0
        this.ySpeed = 0
        this.accel = 0
    }

    // command move in a direction
    move(dir){
        // abstract
    }

    // default draw them as a rectangle
    draw () {
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
    }
}