"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timerModule = require("tns-core-modules/timer");
var soundModule = require("nativescript-sound");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.buttonImg = "~/app/imgs/red_button_up.png";
        this.buttonUpImg = "~/app/imgs/red_button_up.png";
        this.buttonDownImg = "~/app/imgs/red_button_down.png";
        this.buttonPressed = false;
        this.tada = soundModule.create("~/app/snd/test.mp3");
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.buttonClicked = function (args) {
        var _this = this;
        console.log("button was pressed:" + args.eventName);
        this.buttonImg = this.buttonDownImg;
        this.tada.play();
        timerModule.setTimeout(function () {
            _this.buttonImg = _this.buttonUpImg;
        }, 100);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN0RCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU9sRDtJQVFJO1FBTk8sY0FBUyxHQUFVLDhCQUE4QixDQUFDO1FBQ2xELGdCQUFXLEdBQVUsOEJBQThCLENBQUM7UUFDcEQsa0JBQWEsR0FBVSxnQ0FBZ0MsQ0FBQztRQUN4RCxrQkFBYSxHQUFXLEtBQUssQ0FBQztRQUM5QixTQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBR2xELHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLElBQXNCO1FBQXBDLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsQ0FBQyxFQUFDLEdBQUcsQ0FBRSxDQUFDO0lBQ1osQ0FBQztJQXZCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuY29uc3QgdGltZXJNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiKTtcbmNvbnN0IHNvdW5kTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgYnV0dG9uSW1nOnN0cmluZyA9IFwifi9hcHAvaW1ncy9yZWRfYnV0dG9uX3VwLnBuZ1wiO1xuICAgIHB1YmxpYyBidXR0b25VcEltZzpzdHJpbmcgPSBcIn4vYXBwL2ltZ3MvcmVkX2J1dHRvbl91cC5wbmdcIjtcbiAgICBwdWJsaWMgYnV0dG9uRG93bkltZzpzdHJpbmcgPSBcIn4vYXBwL2ltZ3MvcmVkX2J1dHRvbl9kb3duLnBuZ1wiO1xuICAgIHB1YmxpYyBidXR0b25QcmVzc2VkOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgdGFkYSA9IHNvdW5kTW9kdWxlLmNyZWF0ZShcIn4vYXBwL3NuZC90ZXN0Lm1wM1wiKVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIGJ1dHRvbkNsaWNrZWQoYXJnczogR2VzdHVyZUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiB3YXMgcHJlc3NlZDpcIiArIGFyZ3MuZXZlbnROYW1lKTtcbiAgICAgICAgdGhpcy5idXR0b25JbWcgPSB0aGlzLmJ1dHRvbkRvd25JbWc7XG4gICAgICAgIHRoaXMudGFkYS5wbGF5KCk7XG4gICAgICAgIHRpbWVyTW9kdWxlLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25JbWcgPSB0aGlzLmJ1dHRvblVwSW1nO1xuICAgICAgICB9LDEwMCApO1xuICAgIH1cbn1cbiJdfQ==