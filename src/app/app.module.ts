import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutsViewComponent } from './donuts-view/donuts-view.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutsViewComponent,
    FamousPeopleComponent,
    DonutDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
