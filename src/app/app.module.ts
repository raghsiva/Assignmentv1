import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DonorComponent } from './donor/donor.component';
import { HttpClientModule} from '@angular/common/http'
import { DonorService} from './donor/donor.service'
import {FormsModule} from '@angular/forms'
import {Ng2CompleterModule} from 'ng2-completer'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent, 
    DonorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    Ng2SearchPipeModule
  ],
  providers: [DonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
