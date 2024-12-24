import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotosFacade } from './services/photos.facade';
import { PhotosView } from './models/photos-view';

@Component({
  imports: [
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    PhotosFacade,
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-anti-corruption-pattern';
  private photosFacade = inject(PhotosFacade);
  
  private dataList = new Array<PhotosView>();

  get DataList() {
    return this.dataList;
  }


  ngOnInit(): void {
    this.photosFacade.dataPhotosList$.subscribe(
      (data) => {
        if(data != null || data != undefined) {
          this.dataList = data;
        }
      }
    );
  }
}
