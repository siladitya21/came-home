import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-traffic-analyzer',
  templateUrl: './traffic-analyzer.component.html',
  styleUrls: ['./traffic-analyzer.component.css']
})
export class TrafficAnalyzerComponent implements OnInit {

  public currentUrl: string = "";

  constructor() { }

  ngOnInit(): void {


  }

}
