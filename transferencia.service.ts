import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listTransferencia : any[];
private url = "http://localhost:3000/transferencias";
constructor(private httpCliente : HttpClient) {
  this.listTransferencia = [];
}
get transferencias(){
  return this.listTransferencia;
}
todas(): Observable<Transferencia[]>{
  return this.httpCliente.get<Transferencia[]>(this.url);
}
adicionar(transferencia:any){
 this.hidratar(transferencia)
   this.transferencias?.push(transferencia);
}
private hidratar(transferencia:any){
  transferencia.data = new Date();
}
}
