import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface studentarray{
  firstName:string
  laststName:string
  email:string
  passWord:string
}

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {

  public firstName:string=''
  public laststName:string=''
  public email:string=''
  public passWord:string=''
  
}
