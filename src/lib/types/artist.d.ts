import type { ResponseEvents } from "./event"

export interface ArtistResponse {
    name: string
    image: string
    events: ResponseEvents[]
}
