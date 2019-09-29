import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data/data.service';
import { PageControlComponent } from './features/pagination/page-control.component';

import { IconsModule } from './icons/icons-module';
import { AppComponent } from './app.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailHeaderComponent } from './mail-header/mail-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
    AppComponent,
    MailItemComponent,
    MailHeaderComponent,
    SidebarComponent,
    PageControlComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    DataService
  ]
})
export class AppModule { }
