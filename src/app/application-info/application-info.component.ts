import {Component, OnInit} from '@angular/core';
import {WorkWithImages} from "../shared/classes/work-with-images";
declare var $: any;

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})


export class ApplicationInfoComponent implements OnInit {
  hoveredBG: boolean;
  hoveredIcon: boolean;
  iconResult: string;
  bgResult: string;

  ngOnInit() {
  }

  upLoadBackground(readerEvt, iconOrBg) {
    WorkWithImages.upLoadBackground((result, iconOrBg) => this.setPicture(result, iconOrBg), readerEvt, iconOrBg);
  }

  setPicture(result, iconOrBg) {
    this[iconOrBg] = result;
  }

  hovered(hovered, iconOrBg) {
    this[iconOrBg] = hovered;
  }
}
