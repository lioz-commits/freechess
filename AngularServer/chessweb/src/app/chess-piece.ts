import { Board } from "./board";

export class ChessPiece {
    private image: HTMLElement;
    private position: HTMLElement;
    private possiblePositions: HTMLElement[] = [];
    private board : Board;

    constructor(imagePath: string, defaultPosition: HTMLElement, board : Board) {
        this.image = GetImage(imagePath);
        this.registerDraggbleElement(this.image);
        this.position = defaultPosition;
        this.board = board;
    }

    private calculatePossibleMoves(){
        this.possiblePositions = [];
        this.possiblePositions.push(this.board.field[0][0]);
        this.possiblePositions.push(this.board.field[0][1]);
       this.possiblePositions.push(this.board.field[0][2]);
       console.log("test");
    }

    private registerDraggbleElement(Element: HTMLElement) {
        Element.addEventListener("dragstart", this.dragStart);
    }

    private dragStart(event: any) {

        console.log(this);
        for (let index = 0; index < event.possiblePositions.length; index++) {
            const element = event.possiblePositions[index];
            element.classList.add('possible');
        }
        var e = event as DragEvent;
        const target = e.target as HTMLElement;
        target.classList.add('dragging');
        e.dataTransfer?.setData("text", target.id);
    }

    public get GetImage(): HTMLElement {
        return this.image
    }
}

function GetImage(path : string) {
    var img = document.getElementById("samples-img") as HTMLImageElement
    if(img != null){
      var newImg = img.cloneNode() as HTMLImageElement;
      newImg.src = path;
      newImg.id = GetId();
      return newImg;
    } 
    console.log("img wurde nicht gefunden")
    return img;
  }


  var num = 12345;

  function GetId() {
    num++;
    return num.toString();
  }