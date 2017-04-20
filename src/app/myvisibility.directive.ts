import { SimpleChanges, Directive, HostBinding, HostListener, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]',
})
export class MyvisibilityDirective implements OnInit {
  @HostBinding("style.visibility") hostVisibility = 'visible';
  
  @Input('visibility')
  set visibility(value: boolean) {
    this.hostVisibility = value ? 'visible' : 'hidden'; 
  }

  ngOnInit() {
    // this.visibility = this.defaultVisibility;
  }

  // ngOnChanges(inputChanges) {
  //   if (inputChanges.switch) {
  //     this.visibility = inputChanges.switch.currentValue ? 'visible' : 'hidden'; 
  //   }
  // }
}
