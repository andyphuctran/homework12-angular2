import { Directive, HostBinding,HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  private color:string[];
  private index:number;
  constructor(private e:ElementRef, private r:Renderer) {
    this.color=['red','blue','yellow','brown']
    this.index=0;
   }

   @HostListener('click')
   changeColor(){
     if(this.index==this.color.length) this.index=0;
     this.e.nativeElement.style.color=this.color[this.index];
     this.index++;
   }

}
