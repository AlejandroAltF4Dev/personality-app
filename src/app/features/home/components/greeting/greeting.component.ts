import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', [Validators.required]],
  });
  @Output() startClicked = new EventEmitter();
  constructor(private readonly fb: FormBuilder) {}
  get nameInput() {
    return this.userForm.get('name') as AbstractControl;
  }

  get status() {
    const isInvalid =
      this.nameInput?.hasError('required') && this.nameInput?.dirty;
    return isInvalid ? 'danger' : 'default';
  }
  ngOnInit(): void {}

  startSurvey() {
    if (this.userForm.invalid) {
      return;
    }
    const { name } = this.userForm.value;
    this.startClicked.emit({ name });
  }
}
