import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TilesComponent } from './components/tiles/tiles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ChildTemplateComponent } from './component/child-template/child-template.component';
import { ClockComponent } from './component/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    LandingComponent,
    TilesComponent,
    FormsComponent,
    ParentFormComponent,
    TemplatesComponent,
    ChildTemplateComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
