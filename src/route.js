const apiKey = " API key from food2fork";

export const apiRoute = {
    apiBase: "https://www.food2fork.com/api",
    search: `/search?key=${apiKey}`,
    recipe: `/get?key=${apiKey}&rId=`,
    suggestion: `/search?key=${apiKey}&q=`,
};
export const localRoute = {
    home: "/",
    food: "/food",
};