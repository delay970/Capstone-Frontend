import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSutrasComponent } from './components/all-sutras/all-sutras.component';
import { FormulasComponent } from './components/formulas/formulas.component';
import { GroupMainComponent } from './components/group-main/group-main.component';
import { SutraComponent } from './components/sutra/sutra.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  {path: '', component: GroupMainComponent},
  {path: 'formulas', component: FormulasComponent},
  {path: 'sutras', component: AllSutrasComponent},
  {path: 'sutras/:sutra', component: SutraComponent},
  {path: 'upload', component: UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
