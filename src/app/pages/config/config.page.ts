import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonNav, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfigRoot } from './component/config.root';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  standalone: true,
  imports: [IonNav, IonContent, AvatarModule, ButtonModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfigPage implements OnInit {

  protected root = ConfigRoot

  constructor() { }

  ngOnInit() {
  }

}
