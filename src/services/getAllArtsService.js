import http from "./http";

export function getAllArts() {
    return http.get("/artworks?page=1&limit=30")
        .then(res => res.data)
        .catch(err => err);
};