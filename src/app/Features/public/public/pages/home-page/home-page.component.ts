import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Core/Service/authenticate.service';
import { MovieService } from 'src/app/Core/Service/movie.service';
import { Movie } from 'src/app/Models/Movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  Movies!:any;
  RateNumber!:number;
  images!:any[];

  constructor(private movieService:MovieService,private authService:AuthenticateService,private router:Router){}

  ngOnInit(): void {



    this.movieService.getMovies().subscribe(data=>{
      this.Movies=data;

      console.log(this.RateNumber);

    })




  }

}
