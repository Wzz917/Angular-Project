import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {
  @Input() defaultColor:string;
  @Input() newColor:string;
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elementRef: ElementRef, private renderer:Renderer2) {

  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
    
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.newColor;
  }

}
