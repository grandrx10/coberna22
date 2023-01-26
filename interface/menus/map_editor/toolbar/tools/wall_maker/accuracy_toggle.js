import { Button } from "../../../../../button.js"

export class Accuracy_Toggle extends Button{
    constructor(x, y, length, width, page, toggle_amount){
        super(x, y, length, width, toggle_amount, page)
        this.toggle_amount = toggle_amount
    }

    clicked(tool){
        tool.accuracy_rounding += this.toggle_amount
        return true
    }
}