import { TypesService } from './../../services/types.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {
  typesFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private typesService: TypesService
  ){
    this.typesFormGroup = formBuilder.group({
     id:[''],
     name:['']
    })
  }

  save(){
    this.typesService.postType(this.typesFormGroup.value).subscribe({
    })
  }
}
