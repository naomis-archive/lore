import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { EventType, Router, RouterLink } from "@angular/router";

/**
 *
 */
@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./buttons.component.html",
  styleUrl: "./buttons.component.css"
})
export class ButtonsComponent {
  public path = "";
  /**
   *
   * @param {Router} router The Angular Router instance.
   */
  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e.type === EventType.NavigationEnd) {
        this.path = e.url.split("/").slice(-1).join("");
      }
    });
  }
}
