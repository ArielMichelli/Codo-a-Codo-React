export default class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render(placeholder = "PorDefecto") {
        let myApp = document.getElementById(this.parentID);
        const myInputHTML = myApp.innerHTML + "<input type=" + this.type + " " + "placeholder=" + placeholder + ">";
        myApp.innerHTML = myInputHTML;
    }
}