"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.updateThresholdText = function (e) {
        var threshold = e.detail.threshold;
        var msg = threshold.substr(threshold.lastIndexOf('-') + 1);
        if (msg === 'warning') {
            this.thresholdChangedMsg = "Warning! You should look at this.";
            this.thresholdChangedTextClass = 'warning-text';
        }
        else if (msg === 'danger') {
            this.thresholdChangedMsg = "Danger!!  Seriously, something's wrong!";
            this.thresholdChangedTextClass = 'danger-text';
        }
        else if (msg === 'success') {
            this.thresholdChangedMsg = "Whew...Everythings normal :-)";
            this.thresholdChangedTextClass = 'ok-text';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.titleVal = "RAM Usage";
        this.usedVal = 10;
        this.thresholdChangedTextClass = 'ok-text';
        this.thresholdChangedMsg = "Whew...Everythings normal :-)";
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // ()=> passes outside scope to inside setInterval
        setInterval(function () {
            if (_this.usedVal > 100) {
                _this.usedVal = 10;
            }
            else {
                _this.usedVal += 10;
            }
        }, 1000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <pf-utilization-bar-chart (thresholdSet)=\"updateThresholdText($event)\" [attr.chart-title]=\"titleVal\" [attr.used]=\"usedVal\" total=\"100\" units=\"MB\" threshold-warning=\"60\" threshold-error=\"85\"></pf-utilization-bar-chart>\n        <span class=\"doc-bottom-label\">Listening for Threshold Change Events: <span class=\"{{thresholdChangedTextClass}}\" id=\"thresholdChangedText\">{{thresholdChangedMsg}}</span></span>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map