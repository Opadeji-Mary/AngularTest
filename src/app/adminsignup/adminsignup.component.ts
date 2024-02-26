import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

interface adminsignup{
  AdminFName:string,
  AdminLName:string,
  AdminEmail:string,
  AdminAge:string,
  AdminPassword:string,
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
  public AdminFName:string=""
  public AdminLName:string=""
  public AdminEmail:string=""
  public AdminAge:string=""
  public AdminPassword:string=""
  public Error : string =""
  // public comfirm: any =""
  public studentarray:adminsignup[]=[]
  
  signup(){
      let studentObject: adminsignup={
        AdminFName:this.AdminFName,
        AdminLName:this.AdminLName,
        AdminEmail:this.AdminEmail,
        AdminAge:this.AdminAge,
        AdminPassword:this.AdminPassword
      }
      // localStorage.setItem("AdminDetails",JSON.stringify(this.studentarray));
      // let Res = this.studentarray.push(studentObject);
      // if(!Res){
      //   this.comfirm = true;
      //   this.Error = "Register failed"
      //   setTimeout(()=>{
      //     this.Error = ""
      //     this.comfirm = false;
      //   }, 3000);
      // }
      // else{
        // localStorage.setItem("AdminDetails",JSON.stringify(this.studentarray));
        // this.navigate(['/adminsignin']);
      // }
  // }
  }
}
