import { Mob } from "../../../entities/mob/mob.js";
import { Display } from "../../display.js";

export class Game_Display extends Display{
    constructor(width, height){
        super(0, 0, width, height)

        this.entities = {"1": new Mob(this.width/2, this.height/2, 50, 80)}
        this.background = {} // for later use if development goes as planned
    }

    draw(){
        for (let id in this.entities){
            this.entities[id].draw()
        }
    }

    mouse_clicked(event_handler){

    }

    update(event_handler){
        
    }

}