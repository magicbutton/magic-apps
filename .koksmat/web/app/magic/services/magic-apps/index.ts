

    
export interface EndPoint {
    name: string;

}

export interface Service {
    name: string;

    endpoints: EndPoint[]
}

export interface AppMap {
    name: string;

    services: Service[]
}
export const pagemap : AppMap = {
  "name": "apps",
  "services": [
    {
      "name": "person",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "application",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    }
  ]
}

