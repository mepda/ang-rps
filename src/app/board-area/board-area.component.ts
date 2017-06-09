import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-area',
  templateUrl: './board-area.component.html',
  styleUrls: ['./board-area.component.css']
})
export class BoardAreaComponent implements OnInit {
  @Input() playerOneChoice: string = "rock";
  @Input() computerChoice: string = "scissors";
  constructor() { }

  ngOnInit() {
  }

}
