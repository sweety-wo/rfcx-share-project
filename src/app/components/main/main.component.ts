import {Component, OnInit} from '@angular/core';
import {LinkPreviewService} from '../../common/services/link/link-preview.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public linkData: any;
  public url: string;
  public isLink: boolean;


  constructor(private _linkPreview: LinkPreviewService,
              private _activatedRoute: ActivatedRoute) {
    this.isLink = false;
  }

   fnGetLinkPreview(url) {
     const key = '5b0bfd2a3135bd7d741735f9cf9b5fa4cf6c182eb174b';
     this._linkPreview.getLivePreview(key, url)
       .then((response: any) => {
         this.linkData = response;
         console.log('this.linkData ', this.linkData);
       }, (error: any) => {
         console.log('error', error);
       });
   }

  fnCreateSocialBtn() {
    const shareButtons = document.querySelectorAll('.st-custom-button[data-network]');
    for (let i = 0; i < shareButtons.length; i++) {
      const shareButton = shareButtons[i];

      shareButton.addEventListener('click', function (e) {
        const elm: any = e.target;
        const network = elm.dataset.network;
      });
    }
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params: any) => {
      if (params && params.link) {
        this.isLink = true;
        this.url = params.link;
        this.fnCreateSocialBtn();
        this.fnGetLinkPreview(this.url);
      }
    });

  }

}
