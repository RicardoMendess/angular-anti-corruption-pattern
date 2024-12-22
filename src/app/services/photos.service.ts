import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PhotosDto } from '../models/photos-dto';
import { first, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private http = inject(HttpClient);

  onPhotos() {
    return this.http.get<PhotosDto>(environment.apiPhotos + '/photos').pipe(
      first(),
      take(1),
    );
  }

}
