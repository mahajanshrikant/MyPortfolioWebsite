import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { IssuelistdisplayComponent } from './issuelistdisplay/issuelistdisplay.component';
import { BigdisplayComponent } from './bigdisplay/bigdisplay.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'add-user',
    component:DashbaordComponent
  },
  {
    path:'view:/userId',
    component:IssuelistdisplayComponent
  },
  {
path:'delete:/userId',
component:BigdisplayComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
