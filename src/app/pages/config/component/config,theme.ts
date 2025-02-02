import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IonContent, IonNavLink } from '@ionic/angular/standalone';
import { LayoutService } from "src/app/layout/service/layout.service";
import { FormItem } from '../../../types/menu-item.interface';

@Component({
    selector: 'config-menu',
    imports: [CommonModule,IonContent, IonNavLink],
    styleUrls: ['../../../../assets/config/_theme.scss'],
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
                <div *ngFor="let item of items; index as i" class="item-container">

                    <ng-container [ngSwitch]="item.type"] >

                    </ng-container>

                    <div class="label-icon">
                        <i [ngClass]="item.icon"></i>
                        <span class="label">
                            {{item.label}}
                        </span>
                    </div>
                    <div class="action-button">
                        <i class="fi fi-tr-angle-small-right text-xl"></i>
                    </div>
                </div>
            </main>
        </ion-content>
    `
})

export class ConfigTheme implements OnInit {

    public form!: FormGroup;
    
    public items: FormItem[] = [
        {
            label: 'Modo norturno',
            icon: 'fi fi-tr-moon-stars',
            type: 'switch',
            formControlName: 'darkMode',
            placeholder: 'Alterne entre modo claro e escuro',
            validators: []
        }
    ]

    constructor(
        private layoutService: LayoutService
    ) {}

    ngOnInit(): void {
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}