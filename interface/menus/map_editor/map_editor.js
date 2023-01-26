
import { Menu } from "../menu.js";
import { Back_Main_Menu_Button } from "./back_main_menu_button.js";
import { Toolbar } from "./toolbar/toolbar.js";

export class Map_Editor extends Menu{
    constructor(width, height){
        super(0, 0, width, height)

        // back to menu button
        this.interactables.push(new Toolbar(this.x + 100, this.height/2, "main", this))
        this.interactables.push(new Back_Main_Menu_Button(this.x + 35, this.y + 15, 70, 30, "main"))

        this.entities = {}
        
        this.offset = {
            x: 0,
            y: 0
        }

        //this.save_to_file("Hello!")
    }

    save_to_file(txt){
        const myFile = new File([`${txt}`], "saveFile.txt");
        // Download it using our function
        downloadFile(myFile);
    }

    update(event_handler){
        super.update(event_handler)
        
        var w = 87
        var s = 83
        var a = 65
        var d = 68

        if (keyIsDown(w)){
            this.offset.y += 3
        } else if (keyIsDown(s)){
            this.offset.y -= 3
        } 
        
        if (keyIsDown(a)){
            this.offset.x += 3
        } else if (keyIsDown(d)){
            this.offset.x -= 3
        } 
    }

    draw(){
        for (var i in this.entities){
            this.entities[i].draw(this.offset.x, this.offset.y)
        }
        
        super.draw()
    }

    set_tool(tool){
        this.interactables[0].set_tool(tool) // the first element of map editor is the toolbox
    }

    add_entity(entity, id){
        this.entities[id] = entity
    }

    remove_entity(id){
        delete this.entities[id]
    }

    get_entities(){
        return this.entities
    }

    remove_entity_coord(x, y){
        for (var i in this.entities){
            if (this.entities[i].contains(x, y)){
                delete this.entities[i]
                return
            }
        }
    }

    get_offset(){
        return this.offset
    }

    pop_entity_coord(x, y){
        for (var i in this.entities){
            if (this.entities[i].contains(x, y)){
                var obj = this.entities[i]
                delete this.entities[i]
                return obj
            }
        }
    }
}