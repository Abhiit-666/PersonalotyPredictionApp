import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PPService {

  constructor() { }

  Predict(paragraph:string){
    console.log(paragraph);

  }
}
