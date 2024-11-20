import { Component, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.css'],
})
export class HeroDialogComponent implements OnInit {
  constructor(private matRef: MatDialogRef<any>) {}

  ngOnInit(): void {}
  onClose(): void {
    this.matRef.close();
  }
}
