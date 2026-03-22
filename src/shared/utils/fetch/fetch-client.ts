import { RequestOptions, TypeSearchParams } from "./fetch-types"

export class FetchClient {
  private baseUrl: string
  public headers?: Record<string, string>
  public params?: TypeSearchParams
  public options?: RequestOptions

  public constructor(init: {
    baseUrl: string
    headers?: Record<string, string>
    params?: TypeSearchParams
    options?: RequestOptions
  }) {
    this.baseUrl = init.baseUrl
    this.headers = init.headers
    this.options = init.options
    this.params = init.params
  }

  private createSearchParams(params: TypeSearchParams) {
    const searchParams = new URLSearchParams()

    for(const key in {...this.params, ...params}) {
      if(Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key]

        if(Array.isArray(value)) {
          value.forEach(currentValue => {
            if(currentValue) {
              searchParams.append(key, currentValue.toLocaleString())
            }
          })
        } else if(value) {
          searchParams.set(key, value.toString())
      }
      }
    }
    return `?${searchParams.toString()}`
  }

  private async request<T>(
    endpoint: string,
    method: RequestInit['method'],
    options: RequestOptions = {}
  ) {
    let url = `${this.baseUrl}/${endpoint}`

    if(options.params) {
      url += this.createSearchParams(options.params)
    }

    const config:RequestInit = {
      ...options,
      ...
    }
  }
}