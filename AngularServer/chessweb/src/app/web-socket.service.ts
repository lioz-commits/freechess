import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  readonly uri: string = "ws://localhost:3000";

  constructor() { 
    this.socket = io.io(this.uri);
  }
  
  listen(e: String){
    return new Observable((Subscriber) => {
      this.socket.on(e,(data : any) => {
        Subscriber.next(data);
      })
    })
  } 

  emit(e: String, data:any){
    this.socket.emit(e, data)
  }

}
