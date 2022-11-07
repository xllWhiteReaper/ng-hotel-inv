import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { EmployeeList } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  companyEmployees: EmployeeList[] = [];
  // fetchUrl: string = "https://reqres.in/api/users?page=2";
  fetchUrl!: string;
  jsonText!: any;
  jsonObject!: any;


  // @ViewChild('employeeList', {read: ViewContainerRef}) vcr!: ViewContainerRef;


  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private http: HttpClient) {
    this.setConfigs();
    this.fetchEmployees();
    // this.addDiv();
    console.log("IN CONSTRUCTOR");
  }

  private setConfigs(): void {
    // console.log("ngOnInit starting");
    this.fetchUrl = this.appConfig.apiEndpoint;
    // console.log("URL");
    // console.log(this.fetchUrl);
  }

  // We will get some employees 
  // from the API call 
  private async fetchEmployees() {
    console.log("TRYING TO FETCH DATA");
    await firstValueFrom(this.http.get(this.fetchUrl))
      .then(data => {
        // this.jsonText = data.toString();
        this.jsonText = data;
      });
    this.jsonObject = this.jsonText.data;


    console.log("this.jsonObject");
    console.log(this.jsonObject);
    for (let element of this.jsonObject) {
      this.companyEmployees.push({
        id: parseInt(`${element.id}`),
        email: `${element.email}`,
        f_name: `${element.first_name}`,
        l_name: `${element.last_name}`,
        avatar: `${element.avatar}`

      });
    }
    console.log("this.companyEmployees");
    console.log(this.companyEmployees);

    // console.log("FETCHING EMPLOYEES");
    // // this.companyEmployees = this.http.get<EmployeeList[]>(this.fetchUrl);
    // let jsonData: any = "start";
    // this.http.get(this.fetchUrl).subscribe(
    //   data => {
    //     jsonData = data;
    //     // console.log(0);
    //     // console.log(data);
    //   }
    // );
  }
  private addDIv(){

  }
  getEmployees() {
    // this.companyEmployees = [{
    //   id: 4,
    //   email: "pablito@gmail.com",
    //   f_name: "Pablo",
    //   l_name: "Caceres",
    //   avatar: "./img/avatar/4"

    // }];
    // return this.http.get<EmployeeList[]>(this.fetchUrl);
    // console.log(this.fetchUrl);
    return this.companyEmployees;
  }
}
