import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../shared/header/header.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HomeComponent} from "./home/home.component";

@Component({
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
