import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { TilesComponent } from './components/tiles/tiles.component';
const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full'},
  { path: 'home', component: LandingComponent },
  { path: 'list', component: ListProductComponent},
  { path: 'tiles', component: TilesComponent},
  { path: 'forms', component: ParentFormComponent},
  { path: 'templates', component: TemplatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }