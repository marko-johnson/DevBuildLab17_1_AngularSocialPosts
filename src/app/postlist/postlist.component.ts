import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  postinstances: Post[] = [
    { title: 'TikTok', thought: 'TikTok has very funny videos'},
    { title: 'Instagram', thought: 'Posting family photos on IG is fun'},
    { title: 'Grand Circus', thought: 'Grand Circus is a great coding boot-camp'}
  ]

  thetitle: string ='';
  thethought: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.postinstances.push({title:this.thetitle, thought:this.thethought})
  }

}
