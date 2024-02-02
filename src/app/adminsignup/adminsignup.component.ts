import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

interface adminsignup{
FirstName:string,
 LastName:string,
 Email:string,
 Age:string,
 Password:string,
}
@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {
// constructor (public navigate:Routes){}
  public FirstName:string=""
  public LastName:string=""
  public Email:string=""
  public Age:string=""
  public Password:string=""
  public Error : string =""
  public studentarray:adminsignup[]=[]
  
  signup(){
      let studentObject: adminsignup={
        FirstName:this.FirstName,
        LastName:this.LastName,
        Email:this.Email,
        Age:this.Age,
        Password:this.Password
      }
      let Res = this.studentarray.push(studentObject);
  //     if(!Res){
  //       this.comfirm = true;
  //       this.Error = "Register failed"
  //       setTimeout(()=>{
  //         this.Error = ""
  //         this.comfirm = false;
  //       }, 3000);
  //     }
  //     else{
  //       localStorage.setItem("AdminDetails",JSON.stringify(this.studentarray));
  //       this.navigate.navigate(['/adminsignin']);
  //     }
  // }
  }
}
