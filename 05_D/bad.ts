class xmlHttpRequestService { }

// Low level
class xmlHttpService extends xmlHttpRequestService {
  request(url: string, type: string) { }
}

// High level module
class Http {

  constructor(private xmlHttpService: xmlHttpService) { }

  private get(url: string, options: any) {
    this.xmlHttpService.request(url, 'GET')
  }

  private post(url: string) {
    this.xmlHttpService.request(url, 'POST')
  }

}
