import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() thepostinst: Post = {
    title: 'Piano', 
    thought: 'I love playing piano'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
