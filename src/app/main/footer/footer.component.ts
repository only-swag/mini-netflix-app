import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  search: string;
  result: any;
  showModal;
  constructor(private movie: MoviesService) { }

  ngOnInit() {
  }

  searchMovie() {
    if (!this.search) {
      return false;
    }
    this.movie.search(this.search).subscribe(data => {
      this.result = data;
    });
    this.showModal = true;
    this.search = '';
  }

  cancel($event) {
      this.showModal = false;
      console.log($event);
  }

}
