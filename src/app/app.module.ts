import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http'; 
import { Temperature } from './Components/Temperature/temperature.component';
import {AppComponent} from './app.component';
import {DomoticzService} from './domoticz.service';
import { SolarpanelComponent } from './Components/Solarpanel/solarpanel.component';
import { PowerusageComponent } from './Components/powerusage/powerusage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatGridListModule} from '@angular/material';
import { GarbageComponent } from './Components/garbage/garbage.component';
import { SolarpanelService } from './Components/Solarpanel/solarpanel.service';
import { GarbageService } from './Components/garbage/garbage.service';
import {DataService} from './data.service';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    Temperature,
    SolarpanelComponent,
    PowerusageComponent,
    GarbageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,MatButtonModule, MatGridListModule,
    MomentModule,
    FlexLayoutModule
  ],
  providers: [DomoticzService, SolarpanelService, GarbageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
