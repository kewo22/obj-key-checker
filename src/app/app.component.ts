import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  sample: any = {};
  sample2: any = {};

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {

setTimeout(() => {
      this.http.get("assets/sample.json").subscribe(data => {
        this.sample = data;
      });

      this.http.get("assets/sample2.json").subscribe(data => {
        this.sample2 = data;
      });

      console.log(this.sample);

    }, 1000)


    // this.getJson();

    // for (const i in Object.keys(sample)) {
    // console.log( Object.keys(sample)[i] + ' ----- ' + Object.keys(sample2)[i]) //keys
    // console.log(this.checkValue(Object.keys(sample)[i], Object.keys(sample2)[i])); // key check


    // console.log(typeof sample[Object.keys(sample)[i]] + ' ----- '  + typeof sample2[Object.keys(sample2)[i]]); //type
    // console.log(this.checkType(typeof sample[Object.keys(sample)[i]], typeof sample2[Object.keys(sample2)[i]])); //type check

    // }

    // console.log(this.getLength());
  }

  checkType(type1, type2): boolean {
    return type1 === type2;
  }

  checkValue(val1: string, val2: string): boolean {
    return val1 === val2;
  }

  getLength(): number {
    return (Object.keys(this.sample).length > Object.keys(this.sample2).length) ? Object.keys(this.sample).length : Object.keys(this.sample2).length;
  }

}
