const apiKey = "2448925185d7afb1373225b71fe28489";

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