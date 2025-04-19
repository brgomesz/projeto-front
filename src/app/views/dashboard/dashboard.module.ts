import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DashboardModule {}