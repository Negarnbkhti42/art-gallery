import http from './http';

export function getImage(id, width = 200) {
    http.get(`https://www.artic.edu/iiif/2/${id}/full/${width},/0/default.jpg`)
        .then(res => res)
}