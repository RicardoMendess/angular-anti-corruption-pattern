import { inject, Injectable } from "@angular/core";
import { PhotosService } from "./photos.service";
import { BehaviorSubject, switchMap, tap } from "rxjs";
import { PhotosView } from "../models/photos-view";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class PhotosFacade {
    private photosService = inject(PhotosService);

    private newDataPhotosForAlbum = new BehaviorSubject<PhotosView[]>([]);
    readonly newDataPhotosForAlbum$ = this.newDataPhotosForAlbum.pipe(
        tap(),
        switchMap(() => this.photosService.onPhotos())
    );
}