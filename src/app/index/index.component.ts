import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventType, Router } from '@angular/router';
import { Lore } from '../config/Lore';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  public title = 'lore';
  public text = [
    'This page holds lore for Naomi, her wife, and her three characters.',
    'Use the buttons below to browse!',
  ];

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e.type === EventType.NavigationEnd) {
        this.title = e.url.split('/')?.slice(-1)?.join('') || 'lore';
        console.log(`Title is: '${this.title}'`);
        const lore = Lore[this.title]?.split(/\n+/g);
        this.text = lore.length
          ? lore
          : [
              'This page holds lore for Naomi, her wife, and her three characters.',
              'Use the buttons below to browse!',
            ];
      }
    });
  }
}
