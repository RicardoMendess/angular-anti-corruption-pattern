import { inject, Injectable } from '@angular/core';
import { PhotosService } from './photos.service';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { PhotosView } from '../models/photos-view';
import { PhotosDto } from '../models/photos-dto';

@Injectable({
  providedIn: 'root',
})
export class PhotosFacade {
  private photosService = inject(PhotosService);

  private dataPhotosList = new BehaviorSubject<PhotosView[]>([]);
  readonly dataPhotosList$ = this.dataPhotosList.asObservable();

  private newDataPhotosForAlbum = new BehaviorSubject<PhotosDto[]>([]);
  readonly newDataPhotosForAlbum$ = this.newDataPhotosForAlbum.pipe(
    tap(),
    switchMap(() => this.photosService.onPhotos())
  );

  onGetDataPhotosView() {
    return this.newDataPhotosForAlbum$.subscribe((data) => {
      return this.dataPhotosList.next([
        {
          id: data.id,
          title: data.title,
        },
      ]);
    });
  }
}
