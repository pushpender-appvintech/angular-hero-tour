import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css'],
})
export class NewHeroComponent implements OnInit {
  constructor() {}

  newHero = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  newName: string = '';

  updateHero() {
    this.newHero.patchValue({
      name: this.newName,
      desc: 'a brave and loyal nun',
    });
  }

  onSubmit() {
    console.log(this.newHero.value);
  }
  ngOnInit(): void {}
}
