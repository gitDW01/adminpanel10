import { Component, OnInit } from '@angular/core';
import {WorkWithImages} from "../../shared/classes/work-with-images";

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.css']
})
export class NewsModalComponent implements OnInit {
  bgResult: string;
  constructor() { }

  ngOnInit() {
  }

  upLoadBackground(readerEvt, iconOrBg) {
    WorkWithImages.upLoadBackground((result, iconOrBg) => this.setPicture(result, iconOrBg), readerEvt, iconOrBg);
  }

  setPicture(result, iconOrBg) {
    this[iconOrBg] = result;
  }

}
