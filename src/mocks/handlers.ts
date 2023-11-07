import { http, HttpResponse } from 'msw'
import rocketsResponse from './mockRocketsReponse'

export const handlers = [
    http.get('https://api.spacexdata.com/v4/rockets', () => {
        // Response resolver allows you to react to captured requests,
        // respond with mock responses or passthrough requests entirely.
        // For now, let's just print a message to the console.
        //console.log('Captured a "GET /posts" request')
        return HttpResponse.json(rocketsResponse)
      })
]