import { TypesService } from './../../services/types.service';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from './contact';
import { Type } from '../types/type';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  contactsFormGroup: FormGroup;
  contacts: Contact[] = [];
  types: Type[] = [];
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private contactsService: ContactsService,
              private typesService: TypesService
  ){
    this.contactsFormGroup = formBuilder.group({
      id:[''],
      name:[''],
      telephone:[''],
      email:[''],
      favorite:[false],
      typeId:['']
    })
  }

  loadContacts(){
    this.contactsService.getContact().subscribe({
      next: data => this.contacts = data
    })
  }

  loadTypes(){
    this.typesService.getType().subscribe({
      next: data => this.types = data
    })
  }

  ngOnInit(): void {
    this.loadContacts();
    this.loadTypes();
  }

  getType(contact: Contact): Type | undefined{
    return this.types.find(t => t.id == contact.typeId);
  }

  save(){
    if (!this.isEditing)
    {
      this.contactsService.postContact(this.contactsFormGroup.value).subscribe({
        next: () => {
          this.loadContacts();
          this.contactsFormGroup.reset();
        }
      })
    }
    else
    {
      this.contactsService.putContact(this.contactsFormGroup.value).subscribe({
        next: () => {
          this.loadContacts();
          this.contactsFormGroup.reset();
          this.isEditing = false;
        }
      })
    }
  }

  edit(contact: Contact){
    this.contactsFormGroup.setValue(contact);
    this.isEditing = true;
  }

  remove(contact: Contact){
    this.contactsService.deleteContact(contact).subscribe({
      next: () => this.loadContacts()
    })
  }
}
