import { Component, OnInit } from "@angular/core";
import { IonContent } from '@ionic/angular/standalone';
import { ButtonModule } from "primeng/button";
import { ConfigPage } from "../config.page";
import { ConfigMenu } from "./config.menu";

@Component({
    selector: 'config-navigator',
    imports: [IonContent, ButtonModule, ConfigMenu],
    styles: [`@use '../../../../assets/config/config.scss'`],
    template: `<ion-content [fullscreen]="true">
    <main class="main-content">
        <section class="profile-detail">
          <img src="https://i.redd.it/fbmk981sxr091.jpg" alt="Imagem de perfil">
          <div class="detail-container">
            <span class="font-bold text-2xl title">Walter White</span>
            <span class="email">walteremail.com</span>
          </div>
          <p-button label="Editar perfil" severity="secondary" [outlined]="true"></p-button>
        </section>
  
        <config-menu></config-menu>
    </main>
  </ion-content>
  `
})

export class ConfigRoot implements OnInit {

    root = ConfigPage;

    constructor() {}

    ngOnInit(): void {
        
    }
}