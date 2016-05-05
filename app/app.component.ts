import {Component} from '@angular/core';
import {DashboardComponent} from './dashboard_layout/dashboard.component'

@Component({
    selector: 'my-app',
    template: '<dashboard-layout></dashboard-layout>',
    directives: [DashboardComponent]
})
export class AppComponent { }
