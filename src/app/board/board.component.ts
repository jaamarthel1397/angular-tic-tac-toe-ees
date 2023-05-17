import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  constructor( public boardService: GameService ) {}

  ngOnInit() {
    
  }


  @HostListener('window:keypress', ['$event'])
  protected keyEvent(event: KeyboardEvent): void {
    switch(event.key){
      case '1':
        this.changePlayer(this.boardService.board[6])
        break
      case '2':
        this.changePlayer(this.boardService.board[7])
        break
      case '3':
        this.changePlayer(this.boardService.board[8])
        break
      case '4':
        this.changePlayer(this.boardService.board[3])
        break
      case '5':
        this.changePlayer(this.boardService.board[4])
        break
      case '6':
        this.changePlayer(this.boardService.board[5])
        break
      case '7':
        this.changePlayer(this.boardService.board[0])
        break
      case '8':
        this.changePlayer(this.boardService.board[1])
        break
      case '9':
        this.changePlayer(this.boardService.board[2])
        break
    }
  }

  changePlayer(square: any) {
    this.boardService.isGameRunning = true;

    if (this.boardService.isGameRunning && square.state === null) {
      square.state = this.boardService.activePlayer;
      this.boardService.changePlayerTurn(square);
    }
  }
}
