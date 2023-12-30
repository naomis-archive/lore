import { Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";

export const routes: Routes = [
  { path: "", component: IndexComponent, pathMatch: "full" },
  { path: "naomi", component: IndexComponent },
  { path: "melody", component: IndexComponent },
  { path: "becca", component: IndexComponent },
  { path: "rosalia", component: IndexComponent }
];
