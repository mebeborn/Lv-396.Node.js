import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OptionPair } from '../../../common/models/option-pair';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit {
  profileForm: FormGroup;
  pairList: OptionPair[];
  contacts: string[];


  constructor(private readonly fb: FormBuilder) {
    this.profileForm = fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      skype: ['', Validators.required],
      telegram: ['', Validators.required],
      contacts: this.fb.group({
      })
    });
  }

  ngOnInit() {
    this.contacts = [];
    this.pairList = [{_id: 1, name: 'telegram'}, {_id: 2, name: 'skype'}];
  }

  addContact() {
    const item = `contact-${this.contacts.length}`;
    this.getContacts.addControl(item, new FormControl('', [Validators.required]));
    this.contacts = [...this.contacts, item];
  }

  removeContact(control: string) {
    this.getContacts.removeControl(control) ;
    this.contacts.pop();
  }

  get getContacts() {
    return this.profileForm.get('contacts') as FormGroup;
  }
}