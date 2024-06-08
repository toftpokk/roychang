export const load  = ({url}) => {
    const query = url.searchParams.get("q") || ""
    return {
        query
    }
};