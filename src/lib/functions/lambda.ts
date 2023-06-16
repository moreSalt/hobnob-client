import type { ArtistResponse } from "../types/artist";
import type { CityResponse } from "../types/city";
import type { ArtistsResponse } from "../types/artists";
import type { CitiesResponse } from "$lib/types/cities";
import { env } from'$env/dynamic/private'
// import dotenv from 'dotenv' 
// dotenv.config()

export async function Lambda(
    method: string,
    q: string,
    page: number,
    source: string
): Promise<ArtistResponse | CityResponse | CitiesResponse[] | ArtistsResponse | null> {
    try {
        const reqBody = {
            method: method,
            query: q,
            page: page || 0,
            source: source || "default"
        };
        
        // await console.log(reqBody)
        const options = {
            method: "POST",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",

                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        };

        const url = `${env.API_URL}`
        const res = await fetch(
            url,
            options
        );


        if (res.status != 200) {
            console.log(res.status, await res.json())
            return null;
        }
        if (method == "artist") {
            const body: ArtistResponse = await res.json();
            return body;
        } else if (method == "artists") {
            const body: ArtistsResponse = await res.json();
            return body;
        } else if (method == "city") {
            const body: CityResponse = await res.json();
            // await console.log(body, page)
            return body;
        } else if (method == "cities") {
            const body: CitiesResponse[] = await res.json();
            return body;
        } else {
            await console.log("WHAT IS THIS BS");

            return null;
        }
    } catch (error) {
        await console.log(error);
        return null;
    }
}
