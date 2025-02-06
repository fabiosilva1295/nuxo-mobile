import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IonContent, IonNavLink } from '@ionic/angular/standalone';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeService } from "src/app/services/theme.service";
import { FormItem } from '../../../types/menu-item.interface';

@Component({
    selector: 'config-menu',
    imports: [CommonModule, ReactiveFormsModule, ToggleSwitchModule , IonContent, IonNavLink],
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
            <main [formGroup]="form" class="container">
                <div *ngFor="let group of items" class="group-container">
                    <div class="item-container" *ngFor="let item of group; index as i">
                        <div class="label-icon">
                            <i [ngClass]="item.icon"></i>
                            <span class="label">
                                {{item.label}}
                            </span>
                        </div>

                        <ng-container [ngSwitch]="item.type"] >
                            <p-toggleSwitch (onChange)="item?.callback()" [formControlName]="item.formControlName" *ngSwitchCase="'switch'"></p-toggleSwitch>
                        </ng-container>
                    </div>
                </div>
            </main>
        </ion-content>
    `
})

export class ConfigTheme implements OnInit {

    public form: FormGroup = new FormGroup({});
    
    public items: FormItem[][] = [
        [
            {
                label: 'Modo norturno',
                icon: 'fi fi-tr-moon-stars',
                type: 'switch',
                formControlName: 'darkTheme',
                placeholder: 'Alterne entre modo claro e escuro',
                typeValue: 'bool',
                callback: () => this.toggleDarkMode(),
                validators: []
            }
        ],

        [
            {
                label: 'Modo norturno',
                icon: 'fi fi-tr-moon-stars',
                type: 'switch',
                formControlName: 'darkTheme',
                placeholder: 'Alterne entre modo claro e escuro',
                typeValue: 'bool',
                callback: () => this.toggleDarkMode(),
                validators: []
            }
        ],
    ]

    constructor(
        private themeService: ThemeService
    ) {}

    ngOnInit(): void {
        this.items.forEach(group =>  {
            group.forEach(item => {
                const defaultValue  = item.typeValue === 'bool' ? false : '';
                this.form.addControl(item.formControlName, new FormControl(defaultValue, item.validators || [] ))
            })
        })

        this.form.patchValue(this.themeService.layoutConfig())
    }

    toggleDarkMode() {
        this.themeService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}