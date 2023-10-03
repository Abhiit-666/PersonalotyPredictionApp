import { Component, OnInit } from '@angular/core';
import { PPService } from '../ppservice.service';

@Component({
  selector: 'app-ppcomp',
  templateUrl: './ppcomp.component.html',
  styleUrls: ['./ppcomp.component.css']
})
export class PpcompComponent implements OnInit {
  paragraph: string='';
  constructor (private ppService: PPService)
  {}
  ngOnInit(){}
  
  Predict(){
    //call the scdfervice
  }


}
