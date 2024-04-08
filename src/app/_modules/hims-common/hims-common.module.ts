import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { EditComboIconComponent } from './edit-combo-icon/edit-combo-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { HimsTextBoxComponent } from './hims-text-box/hims-text-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HimsNumBoxComponent } from './hims-num-box/hims-num-box.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HimsTextAreaComponent } from './hims-text-area/hims-text-area.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { HimsLoadingProgressComponent } from './hims-loading-progress/hims-loading-progress.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HimsComboBoxComponent } from './hims-combo-box/hims-combo-box.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditRankDropBoxComponent } from './edit-rank-drop-box/edit-rank-drop-box.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HimsLoadingComponent } from './hims-loading/hims-loading.component';
import { HimsDataEmptyComponent } from './hims-data-empty/hims-data-empty.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatIconModule } from '@angular/material/icon';
import { TextMaskModule } from 'angular2-text-mask';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { HimsNumberCounterComponent } from './hims-number-counter/hims-number-counter.component';
import { HamtaMaterialTextBoxComponent } from './hamta-material-text-box/hamta-material-text-box.component';
import { HamtaComboAutocompleteComponent } from './hamta-combo-autocomplete/hamta-combo-autocomplete.component';
import { HamtaPersianCalenderComponent } from './hamta-persian-calender/hamta-persian-calender.component';
import { MatCardModule } from '@angular/material/card';
import { BaseDateData } from '../base-data/base-date-data';

@NgModule({
  declarations: [
    LoadingButtonComponent,
    EditComboIconComponent,
    HimsTextBoxComponent,
    HimsNumBoxComponent,
    HimsTextAreaComponent,
    HimsLoadingProgressComponent,
    HimsComboBoxComponent,
    EditRankDropBoxComponent,
    HimsLoadingComponent,
    HimsDataEmptyComponent,
    MessageBoxComponent,
    DatePickerComponent,
    DateSelectorComponent,
    HimsNumberCounterComponent,
    HamtaMaterialTextBoxComponent,
    HamtaComboAutocompleteComponent,
    HamtaPersianCalenderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatProgressBarModule,
    NgSelectModule,
    DragDropModule,
    CdkAccordionModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule

    
  ],
  exports: [
    LoadingButtonComponent,
    EditComboIconComponent,
    HimsTextBoxComponent,
    HimsNumBoxComponent,
    HimsTextAreaComponent,
    HimsLoadingProgressComponent,
    HimsComboBoxComponent,
    EditRankDropBoxComponent,
    HimsLoadingComponent,
    HimsDataEmptyComponent,
    DatePickerComponent,
    DateSelectorComponent,
    HimsNumberCounterComponent,
    HamtaMaterialTextBoxComponent,
    HamtaComboAutocompleteComponent,
    HamtaPersianCalenderComponent,
  ],
  providers: [
    BaseDateData
  ]
})
export class HimsCommonModule { }
