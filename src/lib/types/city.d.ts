import type { ResponseEvents } from "./event"

export interface CityResponse {
  city: string
  events: ResponseEvents[]
}