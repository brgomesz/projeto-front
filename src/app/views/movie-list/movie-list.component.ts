import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies = [
    { id: 1, year: 1980, title: "Can't Stop the Music", winner: "Yes" },
    { id: 2, year: 1980, title: "Cruising", winner: "No" },
    { id: 3, year: 1980, title: "The Formula", winner: "No" },
    { id: 4, year: 1980, title: "Friday the 13th", winner: "No" },
    { id: 5, year: 1980, title: "The Nude Bomb", winner: "No" },
    { id: 6, year: 1980, title: "The Jazz Singer", winner: "No" },
    { id: 7, year: 1980, title: "Raise the Titanic", winner: "No" },
    { id: 8, year: 1980, title: "Saturn 3", winner: "No" },
    { id: 9, year: 1980, title: "Windows", winner: "No" },
    { id: 10, year: 1980, title: "Xanadu", winner: "No" },
    { id: 11, year: 1981, title: "Mommie Dearest", winner: "Yes" },
    { id: 12, year: 1981, title: "Endless Love", winner: "No" },
    { id: 13, year: 1981, title: "Heaven's Gate", winner: "No" },
    { id: 14, year: 1981, title: "The Legend of the Lone Ranger", winner: "No" },
    { id: 15, year: 1981, title: "Taran, the Ape Man", winner: "No" }
  ];

  yearFilter: string = '';
  winnerFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  get filteredMovies() {
    let filtered = this.movies;

    if (this.yearFilter) {
      filtered = filtered.filter((movie) =>
        movie.year.toString().includes(this.yearFilter)
      );
    }

    if (this.winnerFilter) {
      filtered = filtered.filter((movie) => movie.winner === this.winnerFilter);
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return filtered.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMoviesWithoutPagination().length / this.itemsPerPage);
  }

  private filteredMoviesWithoutPagination() {
    let filtered = this.movies;

    if (this.yearFilter) {
      filtered = filtered.filter((movie) =>
        movie.year.toString().includes(this.yearFilter)
      );
    }

    if (this.winnerFilter) {
      filtered = filtered.filter((movie) => movie.winner === this.winnerFilter);
    }

    return filtered;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}