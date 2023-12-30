import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { Avatars } from "../config/Avatars";
import { Banners } from "../config/Banners";
import { Lore } from "../config/Lore";

import { IndexComponent } from "./index.component";

describe("IndexComponent", () => {
  let fixture: ComponentFixture<IndexComponent>;
  let router: Router;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IndexComponent,
        RouterTestingModule.withRoutes([
          { path: "naomi", component: IndexComponent },
          { path: "melody", component: IndexComponent },
          { path: "becca", component: IndexComponent },
          { path: "rosalia", component: IndexComponent }
        ])
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should render the default text on `/`", () => {
    const title = compiled.querySelector(".title");
    expect(title?.textContent?.trim()).toBe("Lore");
    const avatar = compiled.querySelector(".avatar");
    expect(avatar?.getAttribute("src")).toBe(
      "https://cdn.nhcarrigan.com/profile.png"
    );
    const text = Array.from(compiled.querySelectorAll("p")).map(
      (node) => node.innerText?.trim()
    );
    expect(text).toEqual([
      "This page holds lore for Naomi, her wife, and her three characters.",
      "Use the buttons below to browse!"
    ]);
  });

  for (const path of ["naomi", "melody", "becca", "rosalia"]) {
    it(`should render the appropriate text on \`${path}\``, async () => {
      await router.navigate([path]);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      const title = compiled.querySelector(".title");
      expect(title?.textContent?.trim()).toBe(
        path[0].toUpperCase() + path.slice(1).toLowerCase()
      );
      const avatar = compiled.querySelector(".avatar");
      expect(avatar?.getAttribute("src")).toBe(Avatars[path]);
      const text = Array.from(compiled.querySelectorAll("p")).map(
        (node) => node.innerText?.trim()
      );
      expect(text).toEqual(Lore[path].split(/\n+/).map((text) => text.trim()));
      const body = document.querySelector("body");
      expect(body?.style.backgroundImage).toBe(`url("${Banners[path]}")`);
    });
  }
});
