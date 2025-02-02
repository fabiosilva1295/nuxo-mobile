import { Component, OnInit } from "@angular/core";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonNavLink, IonToolbar } from '@ionic/angular/standalone';

@Component({
    selector: 'config-menu',
    imports: [IonContent, IonNavLink, IonBackButton, IonButtons, IonToolbar, IonHeader],
    styles: [`@use '../../../../assets/config/config.scss'`],
    template: `
        <ion-content [fullscreen]="true">
            <header>
                <div class="back-button">
                    <ion-nav-link class="back-button" router-direction="back">
                        <i class="fi fi-tr-angle-left"></i>
                    </ion-nav-link>
                    <span>Voltar</span>
                </div>
                
                <span>Temas e cores</span>
            </header>
            <main class="container">
                

            </main>
        </ion-content>
    `
})

export class ConfigTheme implements OnInit {


    constructor() {}

    ngOnInit(): void {
    }
}