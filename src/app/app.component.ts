import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message: string = '';
  title = 'AngularPokedex';
  addToKeywords() {
    this.message = document.getElementById('message')!.innerText;
  }
  ngOnInit() {}
}
