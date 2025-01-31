import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
        RouterModule,          
        IonTabs, 
        CommonModule, 
        StyleClassModule,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonContent,
        RouterModule
    ],
    template: `
        <nav class="nav-container">
            <ul class="nav-content">
                <li [routerLink]="item.routerLink" *ngFor="let item of items; index as i" class="nav-item">
                    <i class="{{item.icon}}"></i>
                </li>
            </ul>
        </nav>
    `,
})
export class AppNav implements OnInit {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Inicio',
                icon: 'fi fi-tr-home-heart',
                iconSelected: 'fi fi-sr-home-heart',
                routerLink: ['/home'],
            },
            {
                label: 'Sala Virtual',
                icon: 'fi fi-tr-calendar-heart',
                iconSelected: 'fi fi-sr-calendar-heart',
                routerLink: ['/meet'],
            },
            {
                label: 'Notificações',
                icon: 'fi fi-tr-bells',
                iconSelected: 'fi fi-sr-bell',
                routerLink: ['/meet'],
            },
            {
                label: 'Configurações',
                icon: 'fi fi-tr-user-crown',
                iconSelected: 'fi fi-sr-user-crown',
                routerLink: ['/config'],
            },
        ]
    }
}
