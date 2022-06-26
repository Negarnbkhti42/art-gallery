import http from "./http";

export function getAllArts() {
    return http.get("/artworks")
        .then(res => res.data)
        .catch(err => err);
};