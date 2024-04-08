import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'hims-text-box',
  templateUrl: './hims-text-box.component.html',
  styleUrls: ['./hims-text-box.component.css']
})
export class HimsTextBoxComponent implements OnInit {

  @ViewChild('tbValue') tbValue: ElementRef | undefined;

  constructor(
  ) { }

  ngOnInit() {
    if (this.width == 0) {
      this.width = undefined;
    }
  }

  ngOnChanges(changes: any) {
    if (changes && this.model && this.propName) {
      this.value = this.model[this.propName];
    }
  }

  public isHidden(): boolean {
    return (this.value == null || this.value == "") && this.modeView;
  }

  public onValueChanged(): void {
    this.valueChangedEvent.emit(this.value);
    if (this.model != undefined && this.propName != undefined) {
      this.model[this.propName] = this.value;
    }
    this.valueChangedCompletedEvent.emit(this.value);
  }

  public onKeydown(event: any) {
    if (event.key === 'Enter') {
      this.keydownEnter.emit(this.value);
    }
    this.keydown.emit(event);
  }

  onBlur() {
    this.blurEvent.emit();
  }

  public selectRange() {
  }

  public checkValid(): boolean {
    let result: boolean = true;

    if (this.isMandatory && (this.value == undefined || this.value == null || this.value == '')) {
      result = false;
    }

    if (this.isMandatory || this.value?.length > 0) {
      if (this.minLength > 0) {
        if (this.value == null || this.value == undefined || this.value.length < this.minLength) {
          result = false;
        }
      }

      if (this.maxlength > 0) {
        if (this.value == null || this.value == undefined || this.value.length > this.maxlength) {
          result = false;
        }
      }
    }

    // if (this.isNationalCode) {
    //     if (result) {
    //         result = NationalCodeValidator.checkValid(this.value, this.isMandatory, this.isForeign);
    //     }
    // }

    return result;
  }

  public getErrorMessage() {
    return this.caption;
  }

  public focus() {
    this.tbValue?.nativeElement.select();
    this.tbValue?.nativeElement.focus();

  }

  public onFocus() {
    this.focusEvent.emit();

    if (this.isLabPaperCode3 && this.value && this.value.length > 4) {
      this.tbValue?.nativeElement.setSelectionRange(this.value.length - 5, this.value.length);
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    if (this.isNumberOnly) {
      let e = <KeyboardEvent>event;
      // if (this.OnlyNumber) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {

        if (e.key == '.' && this.value) {
          if (this.value.toString().indexOf('.') >= 0) {
            e.preventDefault();
          }
          else {
            return;
          }
        }
        else {
          // let it happen, don't do anything
          return;
        }
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      } else {
      }
    }
  }

  @Input() public value: string = '';
  @Input() public modeView: boolean = false;
  @Input() public isMandatory: boolean = false;
  @Input() public isForeign: boolean = false;
  @Input() public minLength: number = 0;
  @Input() public maxlength: number = 0;
  @Input() public width?: number = 0;
  @Input() public isReadOnlyBorder: boolean = false;
  @Input() public isLabPaperCode3: boolean = false;

  @Output() public focusEvent = new EventEmitter();
  @Output() public blurEvent = new EventEmitter();
  @Output() public valueChangedEvent = new EventEmitter<string>();
  @Output() public valueChangedCompletedEvent = new EventEmitter<string>();
  @Output() public get isValid(): boolean {
    return this.checkValid();
  }

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

  @Output() public get backcolorStyle(): string {
    if (this.backColor) {
      return `background-color:` + this.backColor;
    }
    return '';
  }

  @Input() public fontSize?: number;
  @Input() public captionFontSize?: number;
  @Input() public isNumberOnly: boolean = false;
  @Input() public labelColor: any;
  @Input() public backColor: string = '';
  @Input() public isSmall: boolean = false;
  @Input() public isLtr: boolean = false;
  @Input() public isValueLtr: boolean = false;
  @Input() public isDigitOnly: boolean = false;
  @Input() public isPassword: boolean = false;
  @Input() public isNationalCode: boolean = false;
  @Input() public isReadOnly: boolean = false;
  @Input() public isHideCaption: boolean = false;
  @Input() public caption: string = '';
  @Input() public captionWidth?: number;
  @Input() public isCaptionHoriz: boolean = false;
  @Input() public placeholder: string = '';
  @Input() public isMic: boolean = false;
  @Input() public micLang: string = 'fa-IR';
  public isUserSpeaking: boolean = false;

  @Output() public keydown = new EventEmitter<any>();
  @Output() public keydownEnter = new EventEmitter<string>();
  
}
