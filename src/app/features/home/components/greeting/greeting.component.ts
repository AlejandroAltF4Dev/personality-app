import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../../../../state/store.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private storeService: StoreService
  ) {}
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
    this.storeService.updateName(name as string);
    this.router.navigate(['/survey']);
  }
}
