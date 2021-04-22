import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class GlobalFlashMessagesService {

  iconeSuccess : string = `<i class="fas fa-check-circle mx-2"></i>`;
  iconeError : string = `<i class="fas fa-times-circle mx-2"></i>`;

  constructor(private flashMessage : FlashMessagesService) {}

  flashMessageGeneral = (icone , message , time , classname) => {
    this.flashMessage.show(`${icone} ${message}` , { cssClass : classname , timeout : time});
  }

  flashMessageSuccess = (message , time) => {
    return this.flashMessageGeneral(this.iconeSuccess , message , time , "alert-success");
  }

  flashMessageError = (message , time) => {
    return this.flashMessageGeneral(this.iconeError , message , time , "alert-danger");
  }

}
