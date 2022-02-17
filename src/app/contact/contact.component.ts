import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { last, Observable } from 'rxjs';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactList = [] as any;
  firstName = '';
  lastName = '';
  phoneNumber = '';
  message = '';

  constructor() { }
  
  onSubmit(f: NgForm) {
    this.contactList.push(f.value)
    f.resetForm();
  }

  ngOnInit(): void {
  }

}
