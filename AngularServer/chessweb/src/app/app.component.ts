import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
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
    init();
  }
}

const draggableElements = document.getElementsByClassName("draggable");
const droppableElements = document.getElementsByClassName("droppable");

function init() {
  for (let index = 0; index < droppableElements.length; index++) {
    const element = droppableElements[index];
    element.addEventListener("dragover", dragOver)
  }
}

function dragOver(event : any) {
  var e = event as DragEvent;
  console.log("event fired")
  e.preventDefault();
}