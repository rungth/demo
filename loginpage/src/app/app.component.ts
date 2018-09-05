import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username:string;
  pwd:string;
  constructor() {}
ngOnInit(){}
raj=true;
kumar=false;
baby=false;
validate()
{
var un="sri";
var pass="1234";
if (this.username==un && this.pwd==pass)
{
  this.raj=false;
  this.kumar=true;
  this.baby=false;
}
else
{
  this.raj=false;
  this.kumar=false;
  this.baby=true;
}
}
}
