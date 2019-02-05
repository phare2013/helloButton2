import { Component, OnInit } from "@angular/core";
import { GestureEventData } from "tns-core-modules/ui/gestures";
const timerModule = require("tns-core-modules/timer");
const soundModule = require("nativescript-sound");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public buttonImg:string = "~/app/imgs/red_button_up.png";
    public buttonUpImg:string = "~/app/imgs/red_button_up.png";
    public buttonDownImg:string = "~/app/imgs/red_button_down.png";
    public buttonPressed:boolean = false;
    public tada = soundModule.create("~/app/snd/test.mp3")

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    buttonClicked(args: GestureEventData): void {
        console.log("button was pressed:" + args.eventName);
        this.buttonImg = this.buttonDownImg;
        this.tada.play();
        timerModule.setTimeout(() => {
            this.buttonImg = this.buttonUpImg;
        },100 );
    }
}
