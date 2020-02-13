import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { SectionClassComponent } from './section-class/section-class.component';
import { SectionForComponent } from './section-for/section-for.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { SectionIfComponent } from './section-if/section-if.component';


const routes: Routes = [
  { path: 'section', component: SectionComponent },
  { path: '', redirectTo: '/section', pathMatch: 'full' },
  { path: 'sectionClass', component: SectionClassComponent },
  { path: 'sectionFor', component: SectionForComponent },
  { path: 'sectionIf', component: SectionIfComponent },
  { path: 'sectionForm', component: SectionFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
