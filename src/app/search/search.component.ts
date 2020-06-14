import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Album } from './model/album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput:string;
  albums:Album[];
  feedback:boolean = false;
  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  onSearch() {
    // console.log(this.searchInput);
    this.searchService.getAlbums(this.searchInput).subscribe(result => {
      console.log(result["resultCount"]);
      if (result["resultCount"] === 0) {
        this.feedback = true;
      }
      else {
        this.feedback = false;
      }
      this.albums = result["results"];
    });
  }

  onSearch2() {
    this.searchService.getAlbums(this.searchInput).subscribe(result => {
      console.log(result["resultCount"]);
      if (result["resultCount"] === 0) {
        this.feedback = true;
      }
      else {
        this.feedback = false;
      }
      this.albums = result["results"];
    });
  }

}
