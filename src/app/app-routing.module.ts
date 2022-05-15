import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdComputerComponent } from './std-computer/std-computer.component';
import { StdEnglishComponent } from './std-english/std-english.component';
import { StdHindiComponent } from './std-hindi/std-hindi.component';
import { StdMathsComponent } from './std-maths/std-maths.component';
import { StdScienceComponent } from './std-science/std-science.component';
import { StudentNamesComponent } from './student-names/student-names.component';

const routes: Routes = [
  {
    path: 'std-names', redirectTo: '/std-names',  pathMatch: 'full'
  },
  // {path:'std-names', component:StudentNamesComponent},
  {path:'std-names/:selectedOption/std-maths', component:StdMathsComponent},
  {path:'std-names/:selectedOption/english', component:StdEnglishComponent},
  {path:'std-names/:selectedOption/hindi', component:StdHindiComponent},
  {path:'std-names/:selectedOption/science', component:StdScienceComponent},
  {path:'std-names/:selectedOption/computer', component:StdComputerComponent},
  // { path: '**', redirectTo: '/std-names'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
