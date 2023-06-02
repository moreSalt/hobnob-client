export interface CitiesReturn {
    cities: CitiesResponse[]
    q: string
}

export interface CitiesResponse {
    name: string
    code: string
    source: string
}

