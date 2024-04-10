import { Routes } from '@angular/router';
import {ClientComponent} from "./client.component";
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const client_routes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
        ]
    }
]
