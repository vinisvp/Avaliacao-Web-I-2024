import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './features/contacts/contacts.component';
import { TypesComponent } from './features/types/types.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: ContactsComponent},
  {path: 'types', component: TypesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
