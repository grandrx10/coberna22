import { Tool } from "../tool.js";

export class Loader extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Load", page, 1, display)

    }

    load(file){

    }

}