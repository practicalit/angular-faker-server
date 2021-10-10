import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ConsumerComponent } from './components/subject/consumer/consumer.component';
import { HolderComponentComponent } from './components/subject/holder-component/holder-component.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { TilesComponent } from './components/tiles/tiles.component';
//https://www.geekstrick.com/fragment-url-in-angular-8/
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full'},
  { path: 'home', component: LandingComponent },
  { path: 'list', component: ListProductComponent},
  { path: 'tiles', component: TilesComponent},
  { path: 'forms', component: ParentFormComponent},
  { path: 'templates', component: TemplatesComponent},
  { path: 'behaviour', component: HolderComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }