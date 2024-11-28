import { Component } from '@angular/core';

@Component({   //decorator
  selector: 'app-user', //unique name (just like we love our unique name)
  standalone: true, //independent
  imports: [], //modules
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
