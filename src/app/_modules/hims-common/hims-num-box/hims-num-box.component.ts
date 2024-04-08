import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'hims-num-box',
  templateUrl: './hims-num-box.component.html',
  styleUrls: ['./hims-num-box.component.css']
})
export class HimsNumBoxComponent {
  @ViewChild('lbCaption', { static: true }) lbCaption: any;
    @ViewChild('tbValue') tbValue!: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: any) {
        if (changes && this.model && this.propName) {
            this.value = this.model[this.propName];
        }

    }

    public isHidden(): boolean {
        return (this.value == null || this.value == '') && this.modeView && !this.isShowZero;
    }

    public onValueChanged(): void {
        if (isNaN(+this.value)) {
            this.value = '0';
        }
        // this.value = TextUtility.convertToEnglishNum(this.value);
        this.valueChangedEvent.emit(this.value);
        if (this.model != undefined && this.propName != undefined) {
            this.model[this.propName] = this.value;
        }
        this.valueChangedCompletedEvent.emit(this.value);
    }

    onBlur() {
        this.blurEvent.emit();
    }

    public checkValid(): boolean {
        let result: boolean = true;
        if (this.value) {
            // this.value = TextUtility.convertToEnglishNum(this.value.toString());
        }

        if (this.isMandatory && (this.value == undefined || this.value == null || this.value == "")) {
            result = false;
        }
        if ((this.minLength ?? 0) > 0) {
            if (this.value == null || this.value == undefined || this.value.length < (this.minLength ?? 0)) {
                result = false;
            }
        }

        if (this.value && isNaN(+this.value)) {
            result = false;
        }

        if (result) {
            if (+this.value > +this.max) {
                result = false;
            }
            else if (+this.value < +this.min) {
                result = false;
            }
        }
        return result;
    }

    public onFocus() {
        this.focusEvent.emit();
        if (this.selectOnFocus) {
            this.focus();
        }
    }

    public focus() {
        this.tbValue.nativeElement.focus();
        this.tbValue.nativeElement.select();
    }

    public onKeydown(event: any) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.keydownEnter.emit(+this.value);
        }
        if (event.key === 'ArrowUp') {
            this.value = ((+this.value) + 1).toString();
            this.onValueChanged();
        }
        if (event.key === 'ArrowDown') {
            this.value = ((+this.value) - 1).toString();
            this.onValueChanged();
        }
        this.keydown.emit(event);
    }

    public getStyle(): Object {
        let styles = {
            'fontSize.px': this.fontSize,
            'color': this.labelColor
        }
        return styles;
    }

    @Input() public caption: string = '';
    @Input() public value: string = '';
    @Input() public modeView: boolean = false;
    @Input() public isMandatory: boolean = false;
    @Input() public minLength?: number;
    @Input() public width?: number;
    @Input() public isSmall: boolean = false;
    @Input() public isReadOnly: boolean = false;

    @Output() public get isValid(): boolean {
        return this.checkValid();
    }

    @Input() public fontSize?: number;
    @Input() public captionFontSize?: number;

    _labelColor: any;
    get labelColor(): any {
        return this._labelColor;
    }

    @Input('labelColor')
    set labelColor(value: any) {
        this._labelColor = value;
        if (value && this.lbCaption) {
            this.lbCaption.nativeElement.style.color = value;
        }
    }

    @Input() public model: any = {};
    private _propName: string = '';

    @Input() set propName(p: string) {
        this._propName = p;
        if (this.model) {
            this.value = this.model[p];
            // this.value = TextUtility.convertToEnglishNum(this.value);
        }
    }
    get propName(): string {
        return this._propName;
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: any) {
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
            (e.keyCode >= 35 && e.keyCode <= 39) || e.key == '-') {

            if (e.key == '.' && this.value) {
                if (this.value.toString().indexOf('.') >= 0) {
                    e.preventDefault();
                }
                else {
                    return;
                }
            }
            else if (e.key == '-' && this.value) {
                if (this.value.toString().indexOf('-') >= 0) {
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

    @Input() public typeInput: string = 'text';
    @Input() public min: string = '0';
    @Input() public max: string = '10000000000';
    @Input() public isReadOnlyBorder: boolean = false;
    @Input() public isHideCaption: boolean = false;
    @Input() public allowFloat: boolean = false;
    @Input() public isCaptionHoriz: boolean = false;
    @Input() public captionWidth?: number;
    @Input() public materialIcon: string = '';
    @Input() public iconHint: string = '';
    @Input() public isShowZero: boolean = false;
    @Input() public isFullWidth: boolean = false;
    @Input() public isCaptionLeft: boolean = false;
    @Input() public placeholder: string = '';
    @Input() public selectOnFocus: boolean = false;

    @Output() public keydown = new EventEmitter<any>();
    @Output() public keydownEnter = new EventEmitter<number>();
    @Output() public focusEvent = new EventEmitter();
    @Output() public blurEvent = new EventEmitter();
    @Output() public valueChangedEvent = new EventEmitter<string>();
    @Output() public valueChangedCompletedEvent = new EventEmitter<string>();
}
