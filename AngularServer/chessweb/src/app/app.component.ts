import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'chessweb';
  
constructor(private webSocketService: WebSocketService){

}

  ngOnInit() {
    this.webSocketService.listen('testEvent').subscribe((data) => {
      console.log(data); 
    });
  }
}
