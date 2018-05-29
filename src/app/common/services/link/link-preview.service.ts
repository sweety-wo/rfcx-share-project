import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LinkPreviewService {

  constructor(private _http: HttpClient) {
  }

  getLivePreview(key, link) {
    const url = 'http://api.linkpreview.net/?key=' + key + '&q=' + link;

    return new Promise((resolve, reject) => {
      this._http
        .get(url)
        .subscribe((response: any) => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }
}
