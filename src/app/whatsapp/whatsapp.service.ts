import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

export interface WhatsAppResponse{
  status,
  message,
}

enum WhatsappEnum{
  status = 0
}

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  
  whatsAppWs: WebSocketSubject<object> = webSocket(environment.API_WEBSOCKET_WHATSAPP);

  constructor() {
  }

  verifyConnection() {
    this.whatsAppWs.next({cmd:WhatsappEnum.status})
  }

}
