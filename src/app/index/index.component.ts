import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { EventType, Router } from "@angular/router";

import { Avatars } from "../config/Avatars";
import { Banners } from "../config/Banners";
import { Lore } from "../config/Lore";

/**
 *
 */
@Component({
  selector: "app-index",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.css"
})
export class IndexComponent {
  public title = "lore";
  public text = [
    "This page holds lore for Naomi, her wife, and her three characters.",
    "Use the buttons below to browse!"
  ];
  public avatar = "https://cdn.nhcarrigan.com/profile.png";

  /**
   *
   * @param {Router} router The Angular router instance.
   * @param {Document} document The rendered document.
   */
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    router.events.subscribe((e) => {
      if (e.type === EventType.NavigationEnd) {
        this.title = e.url.split("/")?.slice(-1)?.join("") || "lore";
        const lore = Lore[this.title]?.split(/\n+/g);
        this.text = lore.length
          ? lore
          : [
              "This page holds lore for Naomi, her wife, and her three characters.",
              "Use the buttons below to browse!"
            ];
        this.avatar = Avatars[this.title] ?? "";
        document.body.style.backgroundImage = `url(${
          Banners[this.title] || "https://cdn.nhcarrigan.com/banner.png"
        })`;
      }
    });
  }
}
