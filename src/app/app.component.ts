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
      console.log(typeof Object.keys(sample)[i] + ' ----- ' + typeof Object.keys(sample2)[i])
      // console.log(this.checkValue(Object.keys(sample)[i], Object.keys(sample2)[i]));
    }

  }

  checkValue(val1: string, val2: string): boolean {
    return val1 === val2;
  }

}
