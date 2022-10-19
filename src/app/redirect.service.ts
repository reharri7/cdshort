import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  private urlCollection: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore
  ) {
    this.urlCollection = db.collection('urls');
  }
  public async redirectToUrl(code: string): Promise<void> {
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
