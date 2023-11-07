import { http, HttpResponse } from 'msw'
import rocketsResponse from './mockRocketsResponse'
import missionsResponse from './mockMissionsResponse'
import dragonsResponse from './mockDragonsResponse'

export const handlers = [
    http.get('https://api.spacexdata.com/v4/rockets', () => {
        return HttpResponse.json(rocketsResponse)
      })
    ,
    http.get('https://api.spacexdata.com/v4/launchpads', () => {
      return HttpResponse.json(missionsResponse)
    })
    ,
    http.get('https://api.spacexdata.com/v4/dragons', () => {
      return HttpResponse.json(dragonsResponse)
    })

]