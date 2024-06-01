import type { PageLoad } from "./$types";

export const load: PageLoad = async (b) => {
    const query = b.url.searchParams.get("q") || ""
    return {
        query
    }
};