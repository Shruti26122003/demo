import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isDiv1Visiable:boolean = true;
  div2Visible: string = "No";
  dayName: string = "";
  cityList: string[] = ['pune','surat','noida','mumbai'];
  studentList: any[] = [
    { name: 'Aarav', mobile: '9876543210', city: 'Delhi', isActive: true },
    { name: 'Meera', mobile: '8765432109', city: 'Bangalore', isActive: false },
    { name: 'Rohan', mobile: '7654321098', city: 'Chennai', isActive: true },
    { name: 'Ishita', mobile: '6543210987', city: 'Kolkata', isActive: false },
    { name: 'Kabir', mobile: '5432109876', city: 'Hyderabad', isActive: true }
  ];

  showHideDiv1(isShow : boolean){
    this.isDiv1Visiable = isShow;
  }

}
