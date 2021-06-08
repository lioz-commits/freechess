import { Component, Input, OnInit } from '@angular/core';
import { BoardPieceComponent } from './board-piece/board-piece.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() Board : BoardPieceComponent[][] = [[]];

  constructor(){} 

  ngOnInit(): void {

  }
}
