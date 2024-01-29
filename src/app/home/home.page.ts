import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSegment,
  IonSegmentButton
,IonCard ,IonImg ,IonCardContent ,IonCardTitle ,IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonCardTitle, IonCardContent, IonImg, IonCard, 
    IonSegmentButton,
    IonSegment,
    IonFabButton,
    IonFab,
    IonIcon,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  news: any[] = [];

  constructor() {}

  ngOnInit() {
    this.news = [
      {
        imageUrl: 'assets/imgs/vr_ar.png',
        title: 'Advancements in Virtual and Augmented Reality',
        date: '2024-02-05',
        author: 'Michael Johnson',
      },
      {
        imageUrl: 'assets/imgs/quantum.jpg',
        title: 'New Breakthrough in Quantum Computing',
        date: '2024-01-27',
        author: 'Alice Johnson',
      },
      {
        imageUrl: 'assets/imgs/spacex.jpg',
        title: "SpaceX's Recent Achievements in Space Technology",
        date: '2024-01-30',
        author: 'Diana Williams',
      },
      {
        imageUrl: 'assets/imgs/ai.jpg',
        title: 'Latest Innovations in Artificial Intelligence',
        date: '2024-01-28',
        author: 'Bob Smith',
      },
      {
        imageUrl: 'assets/imgs/gadgets.jpg',
        title: 'Upcoming Tech Gadgets and Trends',
        date: '2024-01-29',
        author: 'Charlie Brown',
      },
    ];
  }
}
