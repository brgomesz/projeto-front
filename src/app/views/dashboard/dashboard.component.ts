import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  apiData = {
    studios: [
      { name: 'Columbia Pictures', winCount: 6 },
      { name: 'Paramount Pictures', winCount: 6 },
      { name: 'Warner Bros.', winCount: 5 }
    ],
    intervalProducers: {
      min: [
        {
          producer: 'Joel Silver',
          interval: 1,
          previousWin: 1990,
          followingWin: 1991
        }
      ],
      max: [
        {
          producer: 'Matthew Vaughn',
          interval: 123,
          previousWin: 2002,
          followingWin: 2015
        }
      ]
    },
    winnersByYear: [] as { id: number; year: number; title: string; studios: string[]; producers: string[]; winner: boolean }[]
  };

  searchYear: string | null = null;

  searchWinners() {
    if (this.searchYear) {
      this.apiData.winnersByYear = [
        {
          id: 1,
          year: parseInt(this.searchYear),
          title: 'Example Movie Title',
          studios: ['Studio Name'],
          producers: ['Producer Name'],
          winner: true
        }
      ];
    } else {
      this.apiData.winnersByYear = [];
    }
  }
}