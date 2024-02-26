import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface studentarray{
  firstname:string
  lastname:string
  email:string
  password:string
}

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
  
  public firstName=''
  public lastName=''
  public email=''
  public passWord=''
  public studentArray:studentarray[]=[]

  ngOnInit(){
    if(localStorage['students']){
      this.studentArray=JSON.parse(localStorage['students'])
      console.log(this.studentArray);
    }
  }


  addContact(){
    let studentobj = {
    firstname:this.firstName,
    lastname:this.lastName,
    email:this.email,
    password:this.passWord,
    }

  this.studentArray.push(studentobj)
  console.log(studentobj);
  console.log(this.studentArray);
  localStorage.setItem('students',JSON.stringify(this.studentArray))
  }
}
