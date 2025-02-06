import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonFooter, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from 'src/app/services/theme.service';
import { AppNav } from './app.nav';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, IonContent, IonRouterOutlet, IonFooter,  AppNav, RouterModule],
    template: `
        <ion-content [fullscreen]="true">
            <ion-router-outlet mode="ios"></ion-router-outlet>  
        </ion-content>

        <ion-footer class="ion-no-border">
            <app-nav></app-nav>
        </ion-footer>    
    `
})
export class AppLayout implements OnInit{

    menuOutsideClickListener: any;

    constructor(
        private themeService: ThemeService,
        public renderer: Renderer2,
        public router: Router
    ) {
        
    }

    ngOnInit(): void {
        this.themeService.initialize()
    }

    ngOnDestroy() {
    }
}
