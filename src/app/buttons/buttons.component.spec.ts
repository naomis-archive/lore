import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { ButtonsComponent } from "./buttons.component";

describe("ButtonsComponent", () => {
  let fixture: ComponentFixture<ButtonsComponent>;
  let router: Router;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonsComponent,
        RouterTestingModule.withRoutes([
          { path: "naomi", component: ButtonsComponent },
          { path: "melody", component: ButtonsComponent },
          { path: "becca", component: ButtonsComponent },
          { path: "rosalia", component: ButtonsComponent }
        ])
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(ButtonsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should render all buttons on `/`", () => {
    const buttons = compiled.querySelectorAll(".nes-btn");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(buttons.length).toBe(4);
    expect(buttons[0]?.textContent?.trim()).toBe("Naomi Carrigan");
    expect(buttons[1]?.textContent?.trim()).toBe("Melody Iuvo");
    expect(buttons[2]?.textContent?.trim()).toBe("Becca Lyria");
    expect(buttons[3]?.textContent?.trim()).toBe("Rosalia Nightsong");
  });

  it("should conditionally render buttons on `/naomi`", async () => {
    await router.navigate(["naomi"]);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.textContent?.trim()).toBe("Melody Iuvo");
    expect(buttons[1]?.textContent?.trim()).toBe("Becca Lyria");
    expect(buttons[2]?.textContent?.trim()).toBe("Rosalia Nightsong");
  });

  it("should conditionally render buttons on `/melody`", async () => {
    await router.navigate(["melody"]);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.textContent?.trim()).toBe("Naomi Carrigan");
    expect(buttons[1]?.textContent?.trim()).toBe("Becca Lyria");
    expect(buttons[2]?.textContent?.trim()).toBe("Rosalia Nightsong");
  });

  it("should conditionally render buttons on `/becca`", async () => {
    await router.navigate(["becca"]);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.textContent?.trim()).toBe("Naomi Carrigan");
    expect(buttons[1]?.textContent?.trim()).toBe("Melody Iuvo");
    expect(buttons[2]?.textContent?.trim()).toBe("Rosalia Nightsong");
  });

  it("should conditionally render buttons on `/rosalia`", async () => {
    await router.navigate(["rosalia"]);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.textContent?.trim()).toBe("Naomi Carrigan");
    expect(buttons[1]?.textContent?.trim()).toBe("Melody Iuvo");
    expect(buttons[2]?.textContent?.trim()).toBe("Becca Lyria");
  });
});
