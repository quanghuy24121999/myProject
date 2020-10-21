import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { ListComponent } from './list/list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SummaryComponent, ListComponent, PromoCodeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
