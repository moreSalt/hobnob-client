import { Lambda } from "$lib/functions/lambda";
import type { CitiesResponse } from "$lib/types/cities.d";
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {
        const q = url.searchParams.get("q");
        if (!q) {
            return;
        }
        const source = url.searchParams.get("s")

        const res = await Lambda("cities", q, 0, source ? source : "default");
        if (res == null) {
            await console.log("Bad res");
            return;
        }


        // Change to one "page" showing both ra and default sources, need to figure out better ui and also a best match algo
        // const res1 = await Lambda("cities", q, 0, "ra");
        // if (res == null) {
        //     await console.log("Bad res");
        //     return;
        // }

        // const events: CitiesResponse[] = []
        // // @ts-ignore
        // const biggerLength = res.length > res1.length ? res.length : res1.length
        // for (let i = 0; i < biggerLength; i++) {
        //     // @ts-ignore
        //     if (i < res.length) {
        //                        // @ts-ignore
        //                        events.push(res[i])
        //     }

        //     // @ts-ignore
        //     if (i < res1.length) {
        //         // @ts-ignore
        //         events.push(res1[i])
        //     }

        // }

        return {
            // @ts-ignore
            cities: res,
            q: q,
        };
    } catch (error) {
        console.log("search", error);
        return {
            cities: [],
            q: "",
        };
    }
};
