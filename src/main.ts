import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { DashboardModule } from './app/views/dashboard/dashboard.module';
import { MovieListModule } from './app/views/movie-list/movie-list.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule, DashboardModule,MovieListModule) 
  ]
}).catch(err => console.error(err));