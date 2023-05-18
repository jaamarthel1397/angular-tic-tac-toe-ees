import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GameService } from '../game.service';

@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.scss']
})
export class RestartDialogComponent {
  constructor (private dialogRef: MatDialogRef<RestartDialogComponent>, private gameService: GameService){

  }
  resetGame(){
    this.gameService.newGame();
    this.dialogRef.close();
  }
}
