import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IconComponent } from './components/icon/icon.component';
import {MatMenuModule} from '@angular/material/menu';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReminderComponent } from './components/reminder/reminder.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateNoteComponent,
    IconComponent,
    DisplayNoteComponent,
    RegistrationComponent,
    SignInComponent,
    GetAllNoteComponent,
    ArchiveNoteComponent,
    TrashNoteComponent,
    UpdateNoteComponent,
    ReminderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }