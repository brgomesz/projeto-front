import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, FormsModule],
  exports: [MovieListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MovieListModule {}