const apiKey = "97cd88197965a020b551014b7b54f438";
// 1da600d95f6d7ff74c0676f8f855398e
// 8108125d7f09e70632112f2d673aa64f
// 97cd88197965a020b551014b7b54f438
export const apiRoute = {
    apiBase: "https://www.food2fork.com/api",
    search: `/search?key=${apiKey}`,
    recipe: `/get?key=${apiKey}&rId=`
};
export const localRoute = {
    home: "/",
    food: "/food",
};