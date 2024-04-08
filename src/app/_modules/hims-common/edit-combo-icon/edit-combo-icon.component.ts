import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'edit-combo-icon',
  templateUrl: './edit-combo-icon.component.html',
  styleUrls: ['./edit-combo-icon.component.css']
})
export class EditComboIconComponent {
  @ViewChild('input') input!: ElementRef;

  myControl = new FormControl('');
  options: string[] = ['menu', 'home', 'person'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  @Input() public caption!: string

}
