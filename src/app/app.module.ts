import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TentTableComponent } from './components/tent/tent-table/tent-table.component';
import { TentComponent } from './components/tent/tent.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedTentComponent } from './components/tent/selected-tent/selected-tent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        TentTableComponent,
        TentComponent,
        SelectedTentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
