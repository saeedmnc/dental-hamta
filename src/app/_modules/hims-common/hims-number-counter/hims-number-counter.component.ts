import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'hims-number-counter',
  templateUrl: './hims-number-counter.component.html',
  styleUrls: ['./hims-number-counter.component.css']
})
export class HimsNumberCounterComponent {

  @Input() duration!: number;
  @Input() digit!: number;
  @Input() steps!: number;
  @ViewChild("animatedDigit") animatedDigit!: ElementRef;
  
  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === "number") {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
  }
  ngOnInit(): void {
    
  }

  counterFunc(endValue:any, durationMs:any, element:any) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;
      if(element){
        element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
      }

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this.digit) {
      this.animateCount();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
  }

}
