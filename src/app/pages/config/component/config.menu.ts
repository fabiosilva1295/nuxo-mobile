import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonNavLink } from '@ionic/angular/standalone';
import { MenuItemNav } from "src/app/types/menu-item.interface";
import { ConfigTheme } from "./config,theme";

@Component({
    selector: 'config-menu',
    imports: [CommonModule, IonNavLink],
    styleUrls: ['../../../../assets/config/_root.scss'],
    template: `
        <section class="menu-container">
              <div *ngFor="let item of items; index as i " class="section-container">
                <span>{{item.label}}</span>
                <div class="options-container">
                    <ion-nav-link mode="ios" *ngFor="let subItem of item.children; index as j" class="item-container" router-direction="forward" [component]="subItem.component">
                        <div class="label-icon">
                            <i [ngClass]="subItem.icon"></i>
                            <span class="label">
                                {{subItem.label}}
                            </span>
                        </div>
                        <div class="navigation-button">
                            <i class="fi fi-tr-angle-small-right text-xl"></i>
                        </div>
                    </ion-nav-link>
                </div>
              </div>
        </section>
    `
})

export class ConfigMenu implements OnInit {

    protected items: MenuItemNav[] = []

    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Aparência',
                children: [
                    {
                        label: 'Tema e cores',
                        icon: 'fi fi-tr-paint-roller',
                        routerLink: '/theme',
                        component: ConfigTheme
                    }
                ]
            }
        ]
    }
}