import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor!: string;
  @Input() favColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnterTrigger() {
    // console.log('Mouse entered');
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeaveTrigger() {
    // console.log('Mouse left');
    this.bgColor = 'transparent';
  }

  ngOnInit(): void {
    this.bgColor = this.favColor;
  }

  // constructor(private elRef: ElementRef, private renderer2: Renderer2) {}

  // ngOnInit(): void {
  //   // this.elRef.nativeElement.style.backgroundColor = 'aqua';
  //   this.renderer2.setStyle(
  //     this.elRef.nativeElement,
  //     'backgroundColor',
  //     'orange'
  //   );
  // }
}

// Host Element
// <div appBeterHighlight> </div>
