import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  public selectedText = '';

  constructor() { }

  ngOnInit() {}

  intercept(): void {
    chrome.tabs.executeScript( { code: 'window.getSelection().toString();' }, selectedText => this.selectedText = selectedText[0]);
  }

}
