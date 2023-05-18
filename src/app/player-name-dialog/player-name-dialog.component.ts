import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-player-name-dialog',
  templateUrl: './player-name-dialog.component.html',
  styleUrls: ['./player-name-dialog.component.scss']
})
export class PlayerNameDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<PlayerNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;
  }
}
