import { Tool } from "../tool.js";


export class Save extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Save", page, 1, display)
    }

    clicked(event_handler){
        event_handler.display.set_tool(null)
        this.trigger_action(event_handler)
    }

    trigger_action(event_handler){
        var entities = this.display.get_entities()
        var file_name = "save_file.txt"
        var myFile = new File([`${JSON.stringify(entities)}`], file_name, {
            type: "text/plain",
          });
        downloadFile(myFile, file_name);
    }
}