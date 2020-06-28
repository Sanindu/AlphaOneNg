import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiComponent } from './si/si.component';
import { EnComponent } from './en/en.component';
import { TaComponent } from './ta/ta.component';
import { ParaComponent } from './para/para.component';


const routes: Routes = [
{path : 'home', component : HomeComponent },
{path : 'si', component : SiComponent },
{path : 'en', component : EnComponent },
{path : 'ta', component : TaComponent },
{path : 'para', component : ParaComponent },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
