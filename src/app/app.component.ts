import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp, 
    IonRouterOutlet,
    ButtonModule
  ],
})
export class AppComponent {
  constructor() {}
}
