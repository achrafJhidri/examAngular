import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ElementModule } from './element-container/element.module';
import { ShareModule } from './shared/modules/shared.module';

import { ElementService } from './shared/service/element.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    ElementModule,
    ShareModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
