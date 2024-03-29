import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProfileComponent } from './profile/profile.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo:"profile", pathMatch:'full'},
      { path: 'profile', component: ProfileComponent },
      { path: 'whatsapp', component: WhatsappComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}
