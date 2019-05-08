import { Component, OnInit } from '@angular/core';
import sample from './sample.json';
import sample2 from './sample2.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    // console.log(sample)
    // console.log(sample2)

    for (const i in Object.keys(sample)) {
      // console.log( Object.keys(sample)[i] + ' ----- ' + Object.keys(sample2)[i]) //keys
      // console.log(this.checkValue(Object.keys(sample)[i], Object.keys(sample2)[i])); // key check


      // console.log(typeof sample[Object.keys(sample)[i]] + ' ----- '  + typeof sample2[Object.keys(sample2)[i]]); //type
      console.log(this.checkType(typeof sample[Object.keys(sample)[i]] , typeof sample2[Object.keys(sample2)[i]])); //type check

    }

  }

  checkType(type1, type2): boolean {
    return type1 === type2;
  }

  checkValue(val1: string, val2: string): boolean {
    return val1 === val2;
  }

}
