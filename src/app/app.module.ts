import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { SquareComponent } from './square/square.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { PlayerNameDialogComponent } from './player-name-dialog/player-name-dialog.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    WinnerDialogComponent,
    PlayerNameDialogComponent,
    RestartDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
