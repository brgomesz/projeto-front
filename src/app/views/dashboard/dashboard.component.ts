import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  yearsWithMultipleWinners = [
    { year: 1986, count: 2 },
    { year: 1990, count: 2 },
    { year: 2015, count: 2 }
  ];

  topStudios = [
    { studio: 'Columbia Pictures', wins: 6 },
    { studio: 'Paramount Pictures', wins: 6 },
    { studio: 'Warner Bros.', wins: 5 }
  ];

  producerIntervals = {
    largest: { producer: 'Matthew Vaughn', interval: 123, previousYear: 2002, nextYear: 2015 },
    smallest: { producer: 'Joel Silver', interval: 1, previousYear: 1990, nextYear: 1991 }
  };

  winnersByYear: { movie: string }[] = [];
  searchYear: string | null = null;

  searchWinners() {
    if (this.searchYear) {
      this.winnersByYear = [
        { movie: 'Example Movie 1' },
        { movie: 'Example Movie 2' }
      ];
    } else {
      this.winnersByYear = [];
    }
  }
  getYearsWithMultipleWinners(): string {
    return this.yearsWithMultipleWinners
      .map((year) => `<tr><td>${year.year}</td><td>${year.count}</td></tr>`)
      .join('');
  }
}