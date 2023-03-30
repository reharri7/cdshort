import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {RedirectService} from '../redirect.service';

interface Website {
  title: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public websites: Website[] = [
    {title: 'Register on SunDevilSync', link:'sds'},
    {title: 'CodeDevils Slack Workspace ', link:'slack'},
    {title: 'Connect with us on LinkedIn', link:'li'},
    {title: 'CodeDevils Coding Challenge', link:'challenge'},
    {title: 'Find us on Facebook', link:'fb'},
    {title: 'Follow us on Instagram', link:'ig'},
    {title: 'Watch us on YouTube', link:'yt'},
    {title: 'CodeDevils Website', link:'site'},
    {title: 'CodeDevils GitHub', link:'gh'}
  ];
  public isLoading = false;
  private readonly urlCode: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private db: AngularFirestore,
              private redirectService: RedirectService) {
    this.urlCode = this.activatedRoute.snapshot.paramMap.get('shortUrl');
  }

  ionViewDidEnter() {
    this.isLoading = true;
    if(this.urlCode) {
      this.redirectService.redirectToUrl(this.urlCode).then();
    }
    this.isLoading = false;
  }

  public async handleIonItemClick(code: string) {
    this.isLoading = true;
    await this.redirectService.redirectToUrl(code);
  }

}
