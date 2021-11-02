import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererhighlight]'
})
export class RendererhighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') color : string;

  @Input() defaultColor : string = 'red';
  @Input() highlightColor : string = 'green';
  @Input() leaveColor : string = 'yellow';

  constructor(private element: ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');

  }

  @HostListener('mouseenter') onMouseHover(event : Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.color = this.defaultColor;
  }
  @HostListener('mouseleave') onMouseleave(event : Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
    this.color = this.highlightColor;
  }
  @HostListener ('click') onClick(event : Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.color = this.leaveColor;
  }
}
