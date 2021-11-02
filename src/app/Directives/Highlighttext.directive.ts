import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : "[appHighlightText]"
})

export class HighlighttextDirective implements OnInit{
    constructor(private element: ElementRef){

    }
    ngOnInit(){
        (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
    }
}