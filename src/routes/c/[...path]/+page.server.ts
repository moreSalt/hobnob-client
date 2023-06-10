
// export const prerender = true;
import  { Lambda } from "../../../lib/functions/lambda";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {

        const cityID = url.pathname.replace("/c/", "")
        const params = url.searchParams
        const page = params.get("page")
        const source = params.get("s") || "default"
        const res = await Lambda("city", cityID, page ? parseInt(page) : 0, source || "default")
        if (res == null) {
            await console.log("Bad res city")
            return null
        }
        return res
   
    } catch (error) {
        console.log("artist", error);
        return;
    }
};