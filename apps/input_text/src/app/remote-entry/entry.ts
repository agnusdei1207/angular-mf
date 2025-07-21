import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  forwardRef,
  input,
  model,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-remote-entry',
  templateUrl: './remote-entry.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RemoteEntry),
      multi: true,
    },
  ],
})
export class RemoteEntry implements ControlValueAccessor {
  inputElement = viewChild<ElementRef>('input');

  formControlName = input<string>('');
  class = input<string>('');
  maxLength = input<number>(50);
  placeholder = input<string>('');
  readonly = input<boolean>(false);
  inputMode = input<string>('text');
  disabled = input<boolean>(false);

  value = model<string>('');

  writeValue(obj: any): void {
    this.value.set(obj);
  }
  onChange: (value: string) => void = () => {};
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  constructor() {
    afterNextRender(() => {
      if (this.inputElement())
        this.inputElement()!.nativeElement.value = this.value();
    });
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(inputElement.value);
    this.onChange(inputElement.value);
  }
}
