import { Component, OnInit } from '@angular/core';
import {RichTextInterceptorService} from '../services/rich-text-interceptor.service';

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

}
