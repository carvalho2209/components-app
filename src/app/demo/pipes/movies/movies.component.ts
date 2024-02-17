import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  providers: [ImageFormaterPipe],
  host: {ngSkipHydration: 'true'},
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  mapped: Movie[];

constructor(private imageFormat: ImageFormaterPipe){}

  ngOnInit(): void {

    this.movies = [
      {
        name: 'Um Sonho de Liberdade',
        dateAt: new Date('12/07/1994'),
        amount: 150.00,
        image: 'sonhoLiberdade.jpg',
        size: '513326980'
      },
      {
        name: 'O Poderoso Chefão',
        dateAt: new Date('01/12/1972'),
        amount: 200.00,
        image: 'poderosoChefaoI.jpg',
        size: '1342177280'
      },
      {
        name: 'Batman: O Cavaleiro das Trevas ',
        dateAt: new Date('08/01/2008'),
        amount: 70.00,
        image: 'Batman2008.jpg',
        size: '719974720'
      },
      {
        name: 'o poderoso chefão 2',
        dateAt: new Date('01/12/1974'),
        amount: 120.00,
        image: 'poderosoChefaoII.jpg',
        size: '1254589899'
      },
      {
        name: 'Pulp Fiction: Tempo de Violência ',
        dateAt: new Date('01/08/1994'),
        amount: 190.00,
        image: 'PulpFiction.jpg',
        size: '773039680'
      }
    ];

    this.mapped = this.movies.map(mov => {
      return {
        name: mov.name,
        dateAt: mov.dateAt,
        amount: mov.amount,
        size: mov.size,
        image: this.imageFormat.transform(mov.image, 'default', true)
      }
    });
  }
}
