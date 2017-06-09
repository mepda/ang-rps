import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choice= "rock";
  computersChoice = "scissors";
  possibleChoices = ["rock", "paper", "scissors"];
  p1score = 0;
  compScore = 0;

  showChoice(playersChoice){
    console.log(playersChoice);
    this.choice = playersChoice;
    this.computerChooses();
    this.whoWon(this.choice, this.computersChoice);
  }

  computerChooses(){
    this.computersChoice = this.possibleChoices[Math.floor(Math.random()*3)];
    console.log(this.computersChoice);
  }
//pp is player choice cc computer choice
  whoWon(pc, cc){
    if
    (pc === 'rock' && cc === 'scissors' ||
     pc === 'scissors' && cc === 'paper'||
     pc === 'paper' && cc === 'rock'){
       this.p1score++;
       console.log('player won');
     } else if
       (cc === 'rock' && pc === 'scissors' ||
        cc === 'scissors' && pc === 'paper'||
        cc === 'paper' && pc === 'rock'){
          this.compScore++;
          console.log('computer won');
    }
  }
}
