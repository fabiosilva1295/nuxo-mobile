import { Routes } from "@angular/router";
import { ConfigPage } from "./config.page";

export const configRoutes: Routes = [
    {
        path: '',
        component: ConfigPage,
        children: [
            
        ]
    }
]