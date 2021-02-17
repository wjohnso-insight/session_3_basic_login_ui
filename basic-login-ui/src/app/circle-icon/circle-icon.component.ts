import { Component, OnInit } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.css']
})
export class CircleIconComponent implements OnInit {

  constructor() { }

  faUser: IconDefinition = faUser;

  ngOnInit(): void {
  }

}
