// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { BodycontentComponent } from '../bodycontent/bodycontent.component';
import { ErrorComponent } from '../error/error.component';


export const routes: Routes = [
  { path: '', component: BodycontentComponent },
  { path: '**', component: ErrorComponent }




];
