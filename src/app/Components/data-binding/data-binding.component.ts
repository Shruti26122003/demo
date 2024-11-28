import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string = "Angular course";
  courseDuration : number = 2;
  myInputType: string = 'date';

  showMessage(){
    alert("welcome to learning angular")
  }
  onStateChange(event:any){
    debugger;
    const name = event.target?.['value']
    alert("State Change" +name)
  }

  onMouseEnter(){
    console.log("Mouse Entered")
  }
}
