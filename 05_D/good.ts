interface Connection {
  request(url: string, options: any): any;
}

class xmlHttpRequestService {
  open() { }
  send() { }
}

class xmlHttpService implements Connection {
  xhr = new xmlHttpRequestService();

  request(url: string, type: string) {
    this.xhr.open();
    this.xhr.send();
  }
}
