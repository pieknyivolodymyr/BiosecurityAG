import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    standalone: true,
    imports: [RouterOutlet],
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
