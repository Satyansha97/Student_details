import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentNamesComponent } from './student-names/student-names.component';
import { StdMathsComponent } from './std-maths/std-maths.component';
import { StdEnglishComponent } from './std-english/std-english.component';
import { StdHindiComponent } from './std-hindi/std-hindi.component';
import { StdScienceComponent } from './std-science/std-science.component';
import { StdComputerComponent } from './std-computer/std-computer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentNamesComponent,
    StdMathsComponent,
    StdEnglishComponent,
    StdHindiComponent,
    StdScienceComponent,
    StdComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
