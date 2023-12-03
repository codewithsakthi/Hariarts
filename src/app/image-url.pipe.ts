import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  private imageUrlCache: { [imageId: string]: string } = {};

  transform(imageId: string): string {
    if (this.imageUrlCache[imageId]) {
      return this.imageUrlCache[imageId];
    }
    const imageUrl = `https://drive.google.com/uc?id=${imageId}`;
    this.imageUrlCache[imageId] = imageUrl;
    return imageUrl;
  }
}
