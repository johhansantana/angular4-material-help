import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from '@angular/material'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        enableTracing: false
      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
