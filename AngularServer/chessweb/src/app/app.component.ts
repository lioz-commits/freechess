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
    });
    init();
  }
}

const draggableElements = document.getElementsByClassName("draggable");
const droppableElements = document.getElementsByClassName("droppable");

function init() {
  for (let index = 0; index < droppableElements.length; index++) {
    const element = droppableElements[index];
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", dragDrop);

  }
  for (let index = 0; index < draggableElements.length; index++) {
    const element = draggableElements[index];
    element.addEventListener("dragstart", dragStart);
  }
}

function dragStart(event : any){
  var e = event as DragEvent;
  const target = e.target as HTMLElement;
  e.dataTransfer?.setData("text", target.id);
}

function dragOver(event : any) {
  var e = event as DragEvent;
  e.preventDefault();
}

function dragDrop(event : any){
  console.log("event fired")
  var e = event as DragEvent;
  const target =  e.target as HTMLElement;
  
  var data : string = e.dataTransfer?.getData("text") as string;
  if(target.id == data){
    return;
  }
  if(target.tagName == "IMG"){
    target.parentNode?.appendChild(document.getElementById(data) as Node);
    target.parentNode?.removeChild(target.parentNode?.firstChild as Node)
  
  } else if(target.firstChild != null){
    target.firstChild?.remove();
    target.appendChild(document.getElementById(data) as Node);
  } else {
    target.appendChild(document.getElementById(data) as Node);
  }
  e.preventDefault();
}