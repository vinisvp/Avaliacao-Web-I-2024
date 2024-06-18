import { TypesService } from './../../services/types.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Type } from './type';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent implements OnInit {
  typesFormGroup: FormGroup;
  types: Type[] = [];

  constructor(private formBuilder: FormBuilder,
              private typesService: TypesService
  ){
    this.typesFormGroup = formBuilder.group({
     id:[''],
     name:['']
    })
  }

  loadTypes(){
    this.typesService.getType().subscribe({
      next: data => this.types = data
    })
  }

  ngOnInit(): void {
    this.loadTypes();
  }

  save(){
    this.typesService.postType(this.typesFormGroup.value).subscribe({
      next: () => this.loadTypes()
    })
  }
}
