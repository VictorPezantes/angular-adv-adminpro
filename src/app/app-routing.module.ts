import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';




const routes : Routes =[
  //path : '/dashboard' PagesRouting'
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
  {path: '**', component:NopageFoundComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
