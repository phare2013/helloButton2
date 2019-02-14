import { Component, OnInit } from "@angular/core";
import { GestureEventData } from "tns-core-modules/ui/gestures";
const timerModule = require("tns-core-modules/timer");
import { TNSPlayer } from 'nativescript-audio';

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
    private _player: TNSPlayer;
    // public tada = soundModule.create("~/app/snd/test.mp3")

    constructor() {
        // Use the component constructor to inject providers.
        this._player = new TNSPlayer();
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
        this._player
          .initFromFile({
            audioFile: "~/app/snd/test.mp3", // ~ = app directory
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
          })
          .then(() => {
            this._player.getAudioTrackDuration().then(duration => {
              // iOS: duration is in seconds
              // Android: duration is in milliseconds
              console.log(`song duration:`, duration);
            });
          });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    buttonClicked(args: GestureEventData): void {
        console.log("button was pressed:" + args.eventName);
        this.buttonImg = this.buttonDownImg;
         this._player.play();
        timerModule.setTimeout(() => {
            this.buttonImg = this.buttonUpImg;
        },100 );
    }

    private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
      }
     
      private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
      }
    
}
