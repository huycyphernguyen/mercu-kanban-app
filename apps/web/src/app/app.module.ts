import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiSvgModule,
  TuiFormatNumberPipeModule,
  TuiGroupModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiButtonModule,
  TuiDialogModule,
} from '@taiga-ui/core';
import { TuiTableModule, TuiReorderModule } from '@taiga-ui/addon-table';
import {
  TuiTilesModule,
  TuiItemsWithMoreModule,
  TuiCheckboxBlockModule,
  TuiBadgeModule,
  TuiIslandModule,
} from '@taiga-ui/kit';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxWelcomeComponent,
    RouterModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiTableModule,
    TuiReorderModule,
    TuiTilesModule,
    TuiSvgModule,
    TuiFormatNumberPipeModule,
    TuiItemsWithMoreModule,
    TuiGroupModule,
    TuiCheckboxBlockModule,
    TuiHostedDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TuiBadgeModule,
    TuiDataListModule,
    TuiIslandModule,
    HttpClientModule,
    TuiButtonModule,
    TuiDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
