import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'material-text-box',
  templateUrl: './hamta-material-text-box.component.html',
  styleUrls: ['./hamta-material-text-box.component.css']
})
export class HamtaMaterialTextBoxComponent implements OnChanges {
  constructor(
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.model && this.propName) {
      this.value = this.model[this.propName];
    }
  }
  public onValueChanged(){
    if (this.model != undefined && this.propName != undefined) {
      this.model[this.propName] = this.value;
    }
  }
 
  @Input() public value!: string;
  @Input() public placeholder!: string;
  @Input() public label!: string;
  @Input() public appearance: MatFormFieldAppearance = 'fill';
  @Input() public model: any = {};
  private _propName: string = '';

  @Input() set propName(p: string) {
    this._propName = p;
    if (this.model) {
      this.value = this.model[p];
    }
  }
  get propName(): string {
    return this._propName;
  }

}
