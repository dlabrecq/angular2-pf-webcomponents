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
    AppComponent.prototype.showCheckboxes = function (e) {
        this.checkboxesVisible = !this.checkboxesVisible;
    };
    AppComponent.prototype.rowSelectionChanged = function (e) {
        this.demoEvents = e.detail.value + "\n" + this.demoEvents;
    };
    AppComponent.prototype.listViewItemActionInitiated = function (e) {
        this.demoEvents = "Action '" + e.detail.actionType + "' initiated for item: '" + e.detail.itemId + "'\n" + this.demoEvents;
    };
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
        this.listData = JSON.stringify([
            { "name": "Fred Flintstone", "address": "20 Dinosaur Way" },
            { "name": "John Smith", "address": "415 East Main Street" },
            { "name": "Frank Livingston", "address": "234 Elm Street" },
            { "name": "Linda McGovern", "address": "22 Oak Street" }
        ]);
        this.checkboxesVisible = true;
        this.actionButtons = JSON.stringify([
            {
                name: 'Start',
                class: 'btn-primary',
                include: 'start-button-template',
                title: 'Start the server',
                actionType: 'start'
            },
            {
                name: 'Action 1',
                title: 'Perform an action',
                actionType: 'action1'
            }
        ]);
        this.demoEvents = "";
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
            template: "\n         <div class=\"container\">\n\n          <h2>pf-utilization-bar-chart</h2>\n          <pf-utilization-bar-chart (thresholdSet)=\"updateThresholdText($event)\" [attr.chart-title]=\"titleVal\" [attr.used]=\"usedVal\" total=\"100\" units=\"MB\" threshold-warning=\"60\" threshold-error=\"85\"></pf-utilization-bar-chart>\n          <span class=\"doc-bottom-label\">Listening for Threshold Change Events: <span class=\"{{thresholdChangedTextClass}}\" id=\"thresholdChangedText\">{{thresholdChangedMsg}}</span></span>\n\n          <h2>pf-list-view</h2>\n          <pf-list-view id=\"example1\" [attr.show-checkboxes]=\"checkboxesVisible\" [attr.action-buttons]=\"actionButtons\"\n            (RowSelectionChanged)=\"rowSelectionChanged($event)\"\n            (ListViewItemActionInitiated)=\"listViewItemActionInitiated($event)\">\n            <pf-template-repeater id=\"example1-content\" [attr.content]=\"listData\">\n              <pf-template id=\"transcludeThis\">\n                <div class=\"list-view-pf-description\">\n                  <div class=\"list-group-item-heading\">\n                    &#36;&#123;name&#125;\n                  </div>\n                  <div class=\"list-group-item-text\">\n                    &#36;&#123;address&#125;\n                  </div>\n                </div>\n              </pf-template>\n            </pf-template-repeater>\n          </pf-list-view>\n        </div>\n\n        <hr><br>\n          <input type=\"checkbox\" checked (change)=\"showCheckboxes($event)\"> Show Checkboxes\n        <div>\n        <b>Events:</b><br>\n          <textarea ref-textarea [(ngModel)]=\"demoEvents\" rows=\"6\" style=\"width: 100%;\"></textarea>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map