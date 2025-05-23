import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import { ReminderComponent } from './components/reminder/reminder.component';

const routes: Routes = [
  { path: 'signup', component: RegistrationComponent },
  { path: '', component: SignInComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [{ path: 'notes', component: GetAllNoteComponent },
       {path: '', redirectTo: '/notes', pathMatch: 'full' },
       {path :'archive',component:ArchiveNoteComponent},
       {path :'bin',component:TrashNoteComponent},
       {path: 'reminder', component:ReminderComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
