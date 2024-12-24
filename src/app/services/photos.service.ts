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
    const url = `${environment.apiPhotos}/photos/1`;

    return this.http.get<PhotosDto>(url).pipe(
      first(),
      take(1),
    );
  }

}
