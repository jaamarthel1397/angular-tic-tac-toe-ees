import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameService } from '../game.service';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private gameService: GameService, private dialogRef: MatDialogRef<WinnerDialogComponent>) {
    this.dialogRef.disableClose = true;
  }

  resetGame(){
    this.gameService.newGame();
    this.dialogRef.close();
  }

}
