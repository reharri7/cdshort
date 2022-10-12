import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
// TODO: make this an object with the title of the website we are going to
  public arrayOfWebsiteLinks: string[] = [
    'challenge',
    'ig',
    'site',
    'li',
    'fb',
    'sds',
    'slack',
    'yt',
    'gh',
    'merch',
  ];
  private readonly urlCode: string;
  private urlCollection: AngularFirestoreCollection<any>;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private db: AngularFirestore) {
    this.urlCollection = db.collection('urls');
    this.urlCode = this.activatedRoute.snapshot.paramMap.get('shortUrl');
  }

  async ngOnInit() {
    if(this.urlCode == null) {
      return;
    }

    // TODO: Outsource this to a service
    const urlRef = this.urlCollection.ref;
    const urlsByUrlCodeQuery = urlRef.where('code', '==', this.urlCode);
    const result = await urlsByUrlCodeQuery.get();

    if(result != null) {
      let url = result.docs[0].get('url');
      if(url !== '') {
        url = 'https://' + url;
        window.open(url, '_self');
      }
    }
  }
  public async handleIonItemClick(code: string): Promise<void> {
    const urlRef = this.urlCollection.ref;
    const urlsByUrlCodeQuery = urlRef.where('code', '==', code);
    const result = await urlsByUrlCodeQuery.get();

    if(result != null) {
      let url = result.docs[0].get('url');
      if(url !== '') {
        url = 'https://' + url;
        window.open(url, '_self');
      }
    }
  }

}
