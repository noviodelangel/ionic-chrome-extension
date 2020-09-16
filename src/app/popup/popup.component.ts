import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase';
import {RichTextInterceptorService} from '../services/rich-text-interceptor.service';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  public selectedText = '';
  currentUser: firebase.User | null = null;

  constructor(private richTextInterceptor: RichTextInterceptorService,
              private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user  => {
      this.currentUser = user;
    });
  }

  ngOnInit() {}

  intercept(): void {
    this.richTextInterceptor.intercept(selectedText => this.selectedText = selectedText[0]);
  }

  login() {
    auth().signInWithEmailAndPassword('user1@email.com', '1234567')
        .then((userCredential) => this.currentUser = userCredential.user)
        .catch((error) => alert(`Sign in error: ${error}`));
  }

  loginWihGoogle() {
    // @ts-ignore
    chrome.runtime.sendMessage({
      command: 'login'
    }, (response) => {
      console.log('Log  in response===', response);
    });
  }

  logout() {
    auth().signOut()
        .then(() => this.currentUser = null);
  }
}
