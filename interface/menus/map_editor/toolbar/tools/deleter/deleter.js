import { Tool } from "../tool.js";


export class Deleter extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Deleter", page, 1, display)
    }

    trigger_action(event_handler){
        console.log(mouseX - this.display.offset.x + " " + (mouseY - this.display.offset.y))
        this.display.remove_entity_coord(mouseX - this.display.offset.x, mouseY - this.display.offset.y)
    }
}