import { OnDestroy } from '@angular/core';

export class Utility {
   static checkLoadStatus(array: Array<object>) {
     let loadDoneStatuses = array.filter(item => item["processingStatus"] === "loadDone");
     return (array.length === loadDoneStatuses.length) ? true : false;
   }
   static checkApiStatus(array: Array<object>) {
     let apiStatuses = array.filter(item => item["apiResponse"]["status"] !== "200" && item["apiResponse"]["status"] !== "201")
     return (apiStatuses.length === 0) ? true : false;
   }

   static createState(status, data) {
     let returnState: ReturnState = {
       status: status,
       data: data
     }
     return returnState;
   }
}

export interface ReturnState {
  status: string;
  data: any;
}


export interface AllinService extends OnDestroy{ }