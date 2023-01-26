export class Entity {
    constructor(x, y, length, width, id, color){
        this.x = x
        this.y = y
        this.length = length
        this.width = width
        this.color = color
        this.id = id
    }

    update(event_handler){
        // abstract
    }

    draw(x_offset, y_offset){
        // abstract
    }

    set_xy(x, y){
        this.x = x
        this.y = y
    }
}