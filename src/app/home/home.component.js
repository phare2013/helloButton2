"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timerModule = require("tns-core-modules/timer");
var nativescript_audio_1 = require("nativescript-audio");
var HomeComponent = /** @class */ (function () {
    // public tada = soundModule.create("~/app/snd/test.mp3")
    function HomeComponent() {
        var _this = this;
        this.buttonImg = "~/app/imgs/red_button_up.png";
        this.buttonUpImg = "~/app/imgs/red_button_up.png";
        this.buttonDownImg = "~/app/imgs/red_button_down.png";
        this.buttonPressed = false;
        // Use the component constructor to inject providers.
        this._player = new nativescript_audio_1.TNSPlayer();
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
        this._player
            .initFromFile({
            audioFile: "~/app/snd/test.mp3",
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        })
            .then(function () {
            _this._player.getAudioTrackDuration().then(function (duration) {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log("song duration:", duration);
            });
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.buttonClicked = function (args) {
        var _this = this;
        console.log("button was pressed:" + args.eventName);
        this.buttonImg = this.buttonDownImg;
        this._player.play();
        timerModule.setTimeout(function () {
            _this.buttonImg = _this.buttonUpImg;
        }, 100);
    };
    HomeComponent.prototype._trackComplete = function (args) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    };
    HomeComponent.prototype._trackError = function (args) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN0RCx5REFBK0M7QUFPL0M7SUFPSSx5REFBeUQ7SUFFekQ7UUFBQSxpQkFrQkM7UUF6Qk0sY0FBUyxHQUFVLDhCQUE4QixDQUFDO1FBQ2xELGdCQUFXLEdBQVUsOEJBQThCLENBQUM7UUFDcEQsa0JBQWEsR0FBVSxnQ0FBZ0MsQ0FBQztRQUN4RCxrQkFBYSxHQUFXLEtBQUssQ0FBQztRQUtqQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQywyREFBMkQ7UUFDdEYsSUFBSSxDQUFDLE9BQU87YUFDVCxZQUFZLENBQUM7WUFDWixTQUFTLEVBQUUsb0JBQW9CO1lBQy9CLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0MsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNoRCw4QkFBOEI7Z0JBQzlCLHVDQUF1QztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFzQjtRQUFwQyxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxHQUFHLENBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyxzQ0FBYyxHQUF0QixVQUF1QixJQUFTO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELHFEQUFxRDtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsSUFBUztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFyRE0sYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzs7T0FDVyxhQUFhLENBdUR6QjtJQUFELG9CQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmNvbnN0IHRpbWVyTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIik7XG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBidXR0b25JbWc6c3RyaW5nID0gXCJ+L2FwcC9pbWdzL3JlZF9idXR0b25fdXAucG5nXCI7XG4gICAgcHVibGljIGJ1dHRvblVwSW1nOnN0cmluZyA9IFwifi9hcHAvaW1ncy9yZWRfYnV0dG9uX3VwLnBuZ1wiO1xuICAgIHB1YmxpYyBidXR0b25Eb3duSW1nOnN0cmluZyA9IFwifi9hcHAvaW1ncy9yZWRfYnV0dG9uX2Rvd24ucG5nXCI7XG4gICAgcHVibGljIGJ1dHRvblByZXNzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3BsYXllcjogVE5TUGxheWVyO1xuICAgIC8vIHB1YmxpYyB0YWRhID0gc291bmRNb2R1bGUuY3JlYXRlKFwifi9hcHAvc25kL3Rlc3QubXAzXCIpXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSB0cnVlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxuICAgICAgICB0aGlzLl9wbGF5ZXJcbiAgICAgICAgICAuaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogXCJ+L2FwcC9zbmQvdGVzdC5tcDNcIiwgLy8gfiA9IGFwcCBkaXJlY3RvcnlcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZ2V0QXVkaW9UcmFja0R1cmF0aW9uKCkudGhlbihkdXJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgIC8vIGlPUzogZHVyYXRpb24gaXMgaW4gc2Vjb25kc1xuICAgICAgICAgICAgICAvLyBBbmRyb2lkOiBkdXJhdGlvbiBpcyBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNvbmcgZHVyYXRpb246YCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIGJ1dHRvbkNsaWNrZWQoYXJnczogR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiB3YXMgcHJlc3NlZDpcIiArIGFyZ3MuZXZlbnROYW1lKTtcbiAgICAgICAgdGhpcy5idXR0b25JbWcgPSB0aGlzLmJ1dHRvbkRvd25JbWc7XG4gICAgICAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xuICAgICAgICB0aW1lck1vZHVsZS5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uSW1nID0gdGhpcy5idXR0b25VcEltZztcbiAgICAgICAgfSwxMDAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFja0NvbXBsZXRlKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcbiAgICAgICAgLy8gaU9TIG9ubHk6IGZsYWcgaW5kaWNhdGluZyBpZiBjb21wbGV0ZWQgc3VjY2VzZnVsbHlcbiAgICAgICAgY29uc29sZS5sb2coJ3doZXRoZXIgc29uZyBwbGF5IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHk6JywgYXJncy5mbGFnKTtcbiAgICAgIH1cbiAgICAgXG4gICAgICBwcml2YXRlIF90cmFja0Vycm9yKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBlcnJvcjonLCBhcmdzLmVycm9yKTtcbiAgICAgICAgLy8gQW5kcm9pZCBvbmx5OiBleHRyYSBkZXRhaWwgb24gZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coJ2V4dHJhIGluZm8gb24gdGhlIGVycm9yOicsIGFyZ3MuZXh0cmEpO1xuICAgICAgfVxuICAgIFxufVxuIl19