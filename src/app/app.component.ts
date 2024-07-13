import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-structural-directive';
  value : boolean = false;
  buttonClick(){
    this.value = true;
  }
  buttonClickX(){
    this.value = false;
  }
}
