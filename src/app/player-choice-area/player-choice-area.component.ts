import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-choice-area',
  templateUrl: './player-choice-area.component.html',
  styleUrls: ['./player-choice-area.component.css']
})
export class PlayerChoiceAreaComponent implements OnInit {
  playersChoice: string = "";
  @Output() playerChose = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChoice(playersChoice: string){
    this.playersChoice = playersChoice;
    this.playerChose.emit(this.playersChoice);
  }

}
