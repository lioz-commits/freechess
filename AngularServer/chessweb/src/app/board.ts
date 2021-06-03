import { ChessPiece } from "./chess-piece";

export class Board {
    readonly droppableElements = document.getElementsByClassName("droppable");

    field: HTMLElement[][];

    constructor(string: string[][]) {
        this.field = new Array(string.length)
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            this.field[i] = new Array(element.length);
            for (let j = 0; j < element.length; j++) {
                const ChessPieceAsString = element[j];
                var boardfield = document.getElementById(i + "-" + j);
                this.field[i][j] = boardfield as HTMLElement;
                var Piece = new ChessPiece(ChessPieceAsString, boardfield as HTMLElement, this);
                boardfield?.appendChild(Piece.GetImage);
            }
        }
        this.init();
    }

    private registerDroppableElement(Element: HTMLElement) {
        Element.addEventListener("dragover", this.dragOver);
        Element.addEventListener("drop", this.dragDrop);
        Element.addEventListener("dragend", this.dragEnd);
    }

    init() {
        for (let index = 0; index < this.droppableElements.length; index++) {
            const element = this.droppableElements[index];
            this.registerDroppableElement(element as HTMLElement);
        }
    }

    dragEnd(event: any) {
        var e = event as DragEvent;
        const target = e.target as HTMLElement;
        target.classList.remove('dragging');
    }
    dragOver(event: any) {
        var e = event as DragEvent;
        e.preventDefault();
    }

    dragDrop(event: any) {
        var e = event as DragEvent;
        const target = e.target as HTMLElement;
        var data: string = e.dataTransfer?.getData("text") as string;
        const dropPiece = document.getElementById(data);

        if (target.id == data) {
            return;
        }
        if (target.tagName == "IMG") {
            target.parentNode?.appendChild(document.getElementById(data) as Node);
            target.parentNode?.removeChild(target.parentNode?.firstChild as Node)

        } else if (target.firstChild != null) {
            target.firstChild?.remove();
            target.appendChild(document.getElementById(data) as Node);
        } else {
            target.appendChild(document.getElementById(data) as Node);
        }
        e.preventDefault();
    }
}

