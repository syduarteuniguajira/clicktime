import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { MemberTeamComponent } from './components/member-team/member-team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContactComponent,
    MemberTeamComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
