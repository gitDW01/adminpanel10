import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlCarousel} from "ngx-owl-carousel";
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
    let file = readerEvt.target.files[0];
    let reader = new FileReader();
    let that = this;
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log('КОнвертированный BASE64: ',reader.result);
      that.setPicture(reader.result, iconOrBg);
    };
    reader.onerror = function (error) {
      console.log('Error : ', error);
    };
  }

  setPicture(result, iconOrBg) {
    this[iconOrBg] = result;
  }

  hovered(hovered, iconOrBg) {
    this[iconOrBg] = hovered;
  }
}
