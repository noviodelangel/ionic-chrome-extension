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
    chrome.tabs.executeScript( { code: `var fragment = window.getSelection().getRangeAt(0).cloneContents(); var div = document.createElement('div'); div.appendChild(fragment.cloneNode(true)); div.innerHTML` }, selectedText => {
      this.selectedText = selectedText[0];
    });
  }

}
