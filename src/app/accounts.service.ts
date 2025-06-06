import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httClient:HttpClient) { }
getAccounts():Observable<any>{
  return this._httClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
}
//filtering
getFilteredAccounts(term:any):Observable<any>{
  return this._httClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
}
//sorting
getSortedAccounts(column:any,order:any):Observable<any>{
  return this._httClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
}
deleteAccounts(id:any):Observable<any>{
  return this._httClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
}
getPaginatedAccounts(limit:any,page:any):Observable<any>{
  return this._httClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
}

}
