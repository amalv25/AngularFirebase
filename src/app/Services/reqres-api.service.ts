import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';  
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ListViewDataResult } from '@progress/kendo-angular-listview';

@Injectable({
  providedIn: 'root'
})
export class ReqresAPIService {
  // public data: any = [];  

  constructor(private http:HttpClient) {    
}
    
       
  ngOnInit(){
        
  }

   getUsers(options: { skip?: number, take?: number } = {}):
   Observable<ListViewDataResult>{
    const skip = options.skip || 0;
    const take = options.take || 6;
     //*******Using Subscription
     var subscribtion = new Observable<any> (observer=>{
      this.http.get("https://reqres.in/api/users?page=2")
      .subscribe((res)=>{
        let Jdata = JSON.stringify(res);
        let data = JSON.parse(Jdata).data.slice(skip, skip + take).map((item: any) => ({ ...item }));
        let length = JSON.parse(Jdata).data.length;
        observer.next({data:data,total:length});
      })
     })
    return subscribtion;
    //******Using Promise
    //  var promise = new Promise<any> ((resolve,reject)=>{
    //   this.http.get("https://reqres.in/api/users?page=2").subscribe((res)=>{
    //     let Jdata = JSON.stringify(res);
    //     let data = JSON.parse(Jdata).data;
    //     resolve(data);
    //   })
    //  })
    // return  promise;
    
    }
    getScrollList():
   Observable<ListViewDataResult>{
     //*******Using Subscription
     var subscribtion = new Observable<any> (observer=>{
      this.http.get("https://reqres.in/api/users?page=2")
      .subscribe((res)=>{
        let Jdata = JSON.stringify(res);
        let data = JSON.parse(Jdata).data
        // let length = JSON.parse(Jdata).data.length;
        observer.next(data);
      })
     })
    return subscribtion;    
    }
  addUser(profileForm:FormGroup){
    const httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json; charset=utf-8'  
      })  
    };  
    // console.log('data got at service',profileForm.value)
    // var promise = new Promise<any> ((resolve,reject)=>{
    // this.http.post("https://reqres.in/api/users ",profileForm.value, httpOptions)
    // .subscribe((res)=>{
    //   resolve(res);
    // })
    // })
    // return promise;
    var subscribtion = new Observable<any> (observer=>{
      this.http.post("https://reqres.in/api/users ",profileForm.value, httpOptions)
      .subscribe((res)=>{
        observer.next(res);
      })
     })
    return subscribtion;

  }

  updateUser(profileForm:FormGroup){
    const httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json; charset=utf-8'  
      })  
    };  
    var promise = new Promise<any> ((resolve,reject)=>{
      this.http.put("https://reqres.in/api/users/2", profileForm.value, httpOptions)  
      .subscribe((res) => {  
        resolve(res);
      }); 
    });
    return promise;
  }
  deleteUser(user:any){
    const httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json; charset=utf-8'  
      })  
    };  
    var promise = new Promise<any> ((resolve,reject)=>{
    this.http.delete("https://reqres.in/api/users/2", user)  
        .subscribe((res) => { 
          console.log(res);
          resolve(res);
        });  
      });
    return promise;
  }
}
 