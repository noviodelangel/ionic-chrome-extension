import { Component, OnInit } from '@angular/core';
import {RichTextInterceptorService} from '../services/rich-text-interceptor.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {

  constructor(private richTextInterceptor: RichTextInterceptorService) {
    chrome.contextMenus.onClicked.addListener(info => {
      console.log(`Clicked context menu with id=${info.menuItemId}`);
      if (info.menuItemId === 'addTask') {
        richTextInterceptor.intercept(selectedText => alert(`Task content from context menu: ${selectedText[0]}`));
      }
    });
  }

  ngOnInit() {}

}
