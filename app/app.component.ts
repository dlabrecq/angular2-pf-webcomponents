import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
         <div class="container">

          <h2>pf-utilization-bar-chart</h2>
          <pf-utilization-bar-chart (thresholdSet)="updateThresholdText($event)" [attr.chart-title]="titleVal" [attr.used]="usedVal" total="100" units="MB" threshold-warning="60" threshold-error="85"></pf-utilization-bar-chart>
          <span class="doc-bottom-label">Listening for Threshold Change Events: <span class="{{thresholdChangedTextClass}}" id="thresholdChangedText">{{thresholdChangedMsg}}</span></span>

          <h2>pf-list-view</h2>
          <pf-list-view id="example1" [attr.show-checkboxes]="checkboxesVisible" [attr.action-buttons]="actionButtons"
            (RowSelectionChanged)="rowSelectionChanged($event)"
            (ListViewItemActionInitiated)="listViewItemActionInitiated($event)">
            <pf-template-repeater id="example1-content" [attr.content]="listData">
              <pf-template id="transcludeThis">
                <div class="list-view-pf-description">
                  <div class="list-group-item-heading">
                    &#36;&#123;name&#125;
                  </div>
                  <div class="list-group-item-text">
                    &#36;&#123;address&#125;
                  </div>
                </div>
              </pf-template>
            </pf-template-repeater>
          </pf-list-view>
        </div>

        <hr><br>
          <input type="checkbox" checked (change)="showCheckboxes($event)"> Show Checkboxes
        <div>
        <b>Events:</b><br>
          <textarea ref-textarea [(ngModel)]="demoEvents" rows="6" style="width: 100%;"></textarea>
        </div>
        `
})
export class AppComponent {
    titleVal;
    usedVal: number;
    thresholdChangedTextClass;
    thresholdChangedMsg;
    listData;
    checkboxesVisible;
    actionButtons;
    demoEvents;

    showCheckboxes(e) {
        this.checkboxesVisible = !this.checkboxesVisible;
    }

    rowSelectionChanged(e) {
        this.demoEvents = e.detail.value + "\n" + this.demoEvents;
    }

    listViewItemActionInitiated(e) {
        this.demoEvents = "Action '" + e.detail.actionType + "' initiated for item: '" + e.detail.itemId + "'\n" + this.demoEvents;
    }

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
        this.listData = JSON.stringify([
            {"name": "Fred Flintstone", "address": "20 Dinosaur Way"},
            {"name": "John Smith", "address": "415 East Main Street"},
            {"name": "Frank Livingston", "address": "234 Elm Street"},
            {"name": "Linda McGovern", "address": "22 Oak Street"}
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
