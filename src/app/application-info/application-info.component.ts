import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})


export class ApplicationInfoComponent implements OnInit {
  hoveredBG: boolean;
  hoveredIcon: boolean;
  bgIsShow: boolean;
  iconIsShow: boolean;
  iconResult: string;
  bgResult: string;
  constructor() {
    this.bgIsShow = true;
    this.iconIsShow = true;
  }

  ngOnInit() {
  }

  upLoadBackground(readerEvt, iconOrBg) {
    let file = readerEvt.target.files[0];
    let reader = new FileReader();
    let that = this;
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log('base64 do arquivo',reader.result);
      that.setPicture(reader.result, iconOrBg);
    };
    reader.onerror = function (error) {
      console.log('Erro ao ler a imagem : ', error);
    };
  }

  setPicture(result, iconOrBg) {
    if(iconOrBg == 'icon') {
      this.iconIsShow = false;
      this.iconResult = result;
    } else {
      this.bgIsShow = false;
      this.bgResult = result;
    }

  }

  lightBackground(hovered) {
    this.hoveredBG = hovered;
  }

  lightIcon(hovered) {
    this.hoveredIcon = hovered;
  }
}
