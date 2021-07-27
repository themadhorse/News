import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input('src') src: SafeResourceUrl;
  @Output() shouldClose= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
