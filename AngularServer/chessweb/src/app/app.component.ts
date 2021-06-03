import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chessweb';

  constructor(private webSocketService: WebSocketService) {

  }
  ngOnInit() {
    this.webSocketService.listen('testEvent').subscribe((data) => {
      console.log("moin");
    });
    var board = new Board([[
      "assets/Chessfigures/bR.svg",
      "assets/Chessfigures/bN.svg",
      "assets/Chessfigures/bR.svg",
      "assets/Chessfigures/bQ.svg",
      "assets/Chessfigures/bK.svg",
      "assets/Chessfigures/bB.svg",
      "assets/Chessfigures/bN.svg",
      "assets/Chessfigures/bR.svg"
    ],
    [
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg",
      "assets/Chessfigures/bP.svg"
    ], [], [], []
      , [], [
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg",
      "assets/Chessfigures/wP.svg"
    ], [
      "assets/Chessfigures/wR.svg",
      "assets/Chessfigures/wN.svg",
      "assets/Chessfigures/wB.svg",
      "assets/Chessfigures/wQ.svg",
      "assets/Chessfigures/wK.svg",
      "assets/Chessfigures/wB.svg",
      "assets/Chessfigures/wN.svg",
      "assets/Chessfigures/wR.svg"
    ]
    ])
  }
}