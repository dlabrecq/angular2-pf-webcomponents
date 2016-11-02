import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <pf-utilization-bar-chart (thresholdSet)="updateThresholdText($event)" [attr.chart-title]="titleVal" [attr.used]="usedVal" total="100" units="MB" threshold-warning="60" threshold-error="85"></pf-utilization-bar-chart>
        <span class="doc-bottom-label">Listening for Threshold Change Events: <span class="{{thresholdChangedTextClass}}" id="thresholdChangedText">{{thresholdChangedMsg}}</span></span>
    `
})
export class AppComponent {
    titleVal;
    usedVal: number;
    thresholdChangedTextClass;
    thresholdChangedMsg;

    updateThresholdText(e) {
        var threshold = e.detail.threshold;
        var msg = threshold.substr(threshold.lastIndexOf('-') + 1);
        if (msg === 'warning') {
            this.thresholdChangedMsg = "Warning! You should look at this.";
            this.thresholdChangedTextClass = 'warning-text';
        } else if (msg === 'danger') {
            this.thresholdChangedMsg = "Danger!!  Seriously, something's wrong!";
            this.thresholdChangedTextClass = 'danger-text';
        } else if (msg === 'success') {
            this.thresholdChangedMsg = "Whew...Everythings normal :-)";
            this.thresholdChangedTextClass = 'ok-text';
        }
    }

    ngOnInit() {
        this.titleVal = "RAM Usage";
        this.usedVal = 10;
        this.thresholdChangedTextClass = 'ok-text';
        this.thresholdChangedMsg = "Whew...Everythings normal :-)";
    }

    ngAfterViewInit() {
        // ()=> passes outside scope to inside setInterval
        setInterval( ()=> {
            if(this.usedVal > 100) {
                this.usedVal = 10;
            } else {
                this.usedVal += 10;
            }
        }, 1000);
    }
}
