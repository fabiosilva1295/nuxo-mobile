import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IonContent, IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { filter } from 'rxjs';
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
                <li routerLinkActive="active" [routerLink]="item.routerLink" *ngFor="let item of items; index as i" class="nav-item">
                    <i [ngClass]="item.expanded ? getIcon(true, item.icon) : getIcon(false, item.icon)"></i>
                </li>
            </ul>
        </nav>
    `,
})
export class AppNav implements OnInit {
    items!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        private router: Router
    ) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
            this.updatedRouter(params.url)
        });
    }

    ngOnInit(): void {

        
        this.items = [
            {
                label: 'Inicio',
                icon: 'home-heart',
                routerLink: ['/home'],
                expanded: false
            },
            {
                label: 'Sala Virtual',
                icon: 'calendar-heart',
                routerLink: ['/meet'],
                expanded: false
            },
            {
                label: 'Notificações',
                icon: 'bells',
                routerLink: ['/notifications'],
                expanded: false
            },
            {
                label: 'Configurações',
                icon: 'user-crown',
                routerLink: ['/config'],
                expanded: false
            },
        ]
        this.updatedRouter(this.router.url);
    }

    protected updatedRouter(url: string): void {
        this.items.forEach(item => item.expanded = item.routerLink.includes(url));
    }

    protected getIcon(isExpanded: boolean, icon?: string): string {
        return isExpanded ? `fi-sr-${icon}` : `fi-tr-${icon}`
    }
}
