import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {RedirectService} from '../redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // TODO: make this an object with the title of the website we are redirecting to
  // TODO: Make an interface for this object
  public arrayOfWebsiteLinks: any[] = [
    {
      link:'sds',
      title: 'Register on SunDevilSync',
    },
    {
      link:'slack',
      title: 'CodeDevils Slack Workspace',
    },
    {
      link:'li',
      title: 'Connect with us on LinkedIn',
    },
    {
      link:'challenge',
      title: 'CodeDevils Coding Challenge',
    },
    {
      link:'fb',
      title: 'Find us on Facebook',
    },
    {
      link:'ig',
      title: 'Follow us on YouTube Instagram',
    },
    {
      link:'yt',
      title: 'Watch us on YouTube',
    },
    {
      link:'site',
      title: 'CodeDevils Website',
    },
    {
      link:'gh',
      title: 'CodeDevils GitHub',
    },
  ];
  private readonly urlCode: string;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private db: AngularFirestore,
              private redirectService: RedirectService) {
    this.urlCode = this.activatedRoute.snapshot.paramMap.get('shortUrl');
  }
  ngOnInit() {
    if(this.urlCode) {
      this.redirectService.redirectToUrl(this.urlCode).then();
    }
  }
  public async handleIonItemClick(code: string) {
    await this.redirectService.redirectToUrl(code);
  }

}
