import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-area',
  templateUrl: './score-area.component.html',
  styleUrls: ['./score-area.component.css']
})
export class ScoreAreaComponent implements OnInit {
  @Input() playerOneScore = 0;
  @Input() computerScore = 0;
  constructor() { }

  ngOnInit() {
  }

}
