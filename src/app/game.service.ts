import { Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { PlayerNameDialogComponent } from './player-name-dialog/player-name-dialog.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

@Injectable()
export class GameService {
  public board: any[] = [];
  boardSize: number = 9;
  activePlayer: string = 'X';
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;
  playerOne: string = ' ';
  playerTwo: string = ' ';

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.openNameDialog();
    this.activePlayer = 'X';
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.winner = false;
    this.board = this.createBoard();
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ id: i, state: null });
    }
    return board;
  }

  get getBoard() {
    return this.board;
  }

  set setBoard(board: any) {
    this.board = [...board];
  }

  changePlayerTurn(squareClicked: any) {
    this.updateBoard(squareClicked);
    if (!this.isGameOver)
      this.activePlayer = this.activePlayer === 'X' ? '0' : 'X';
    this.turnCount++;
    this.isGameOver = this.isGameOver ? true : false;
    if (this.winner) {
      this.openWinnerDialog();
    }
    if (this.gameOver && !this.winner){
      this.openTieDialog();
    }
  }

  updateBoard(squareClicked: { id: number; state: any; }) {
    this.board[squareClicked.id].state = squareClicked.state;
    if (this.isWinner) {
      this.winner = true;
      this.isGameRunning = false;
      this.isGameOver = true;
    }
    
  }

  get gameOver(): boolean {
    return this.turnCount > 8 || this.winner ? true : false;
  }

  get isWinner(): boolean {
    return this.checkDiag() ||
      this.checkRows(this.board, 'row') ||
      this.checkRows(this.board, 'col')
      ? true
      : false;
  }

  checkRows(board: any[], mode: string): boolean {
    const ROW = mode === 'row' ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {
      let firstSquare = board[i].state,
        secondSquare = board[i + DIST].state,
        thirdSquare = board[i + DIST * 2].state;

      if (firstSquare && secondSquare && thirdSquare) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare)
          return true;
      }
    }
    return false;
  }

  checkDiag() {
    const timesRun = 2,
      midSquare = this.board[4].state;

    for (let i = 0; i <= timesRun; i += 2) {
      let upperCorner = this.board[i].state,
        lowerCorner = this.board[8 - i].state;

      if (midSquare && upperCorner && lowerCorner) {
        if (midSquare === upperCorner && upperCorner === lowerCorner)
          return true;
      }
    }

    return false;
  }

  openNameDialog() {
    const dialogRef = this.dialog.open(PlayerNameDialogComponent, {
      panelClass: "custom-popup",
      data: {
        playerOne: this.playerOne,
        playerTwo: this.playerTwo
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.playerOne = result.playerOne,
      this.playerTwo = result.playerTwo
    })
  }

  openWinnerDialog() {
    const dialogRef = this.dialog.open(WinnerDialogComponent, {
      panelClass: "custom-popup",
      data: {
        winner: this.activePlayer == 'X' ? this.playerOne : this.playerTwo,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.playerOne = '',
      this.playerTwo = ''
    })
  }

  openTieDialog() {
    const dialogRef = this.dialog.open(RestartDialogComponent, {
      panelClass: 'custom-popup'
    })
  }
}
