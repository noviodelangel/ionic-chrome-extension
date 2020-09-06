import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase';
import {RichTextInterceptorService} from '../services/rich-text-interceptor.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  public selectedText = '';

  constructor(private richTextInterceptor: RichTextInterceptorService) { }

  ngOnInit() {}

  intercept(): void {
    this.richTextInterceptor.intercept(selectedText => this.selectedText = selectedText[0]);
  }

  login() {
    auth().signInWithEmailAndPassword('user1@email.com', '1234567')
        .then((userCredential) => alert(`Logged in: ${userCredential.user?.uid}`))
        .catch((error) => alert(`Sign in error: ${error}`));
  }

  loginWihGoogle() {
    auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => alert(`Logged in`))
        .catch((error) => alert(`Sign in error: ${error}`));
  }
}
