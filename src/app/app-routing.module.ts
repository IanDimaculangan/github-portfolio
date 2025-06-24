import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { BodycontentComponent } from '../bodycontent/bodycontent.component';


const routes: Routes = [
  {path: '', component: BodycontentComponent }, // Default route
  
  
  
  {path: '**', component: ErrorComponent},


  
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { }