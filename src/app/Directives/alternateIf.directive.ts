import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[appAlternateIf]",
})
export class AlternateIfDirective implements OnInit {
    @Input() appAlternateIf;

    ngOnInit(){
        if(this.appAlternateIf){
            this.vdRef.createEmbeddedView(this.templateRef);
        }else{
            this.vdRef.clear();
        }
    }

    constructor(private templateRef : TemplateRef<any>,
        private vdRef: ViewContainerRef){

    }
  
}