import type { PageLoad } from "./$types";
import data from "$lib/data/data.json"

export const load: PageLoad = async (b) => {
    const query = b.url.searchParams.get("q") || ""
    const results = data
    return {
        query,
        results
    }
};