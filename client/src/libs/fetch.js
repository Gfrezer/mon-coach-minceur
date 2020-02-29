export default function (request) {
    return fetch(request)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(`Erreur : ${response.status} ${response.statusText}`);
                return response;
            }
        })
        .catch(e => {
            console.log(e);
        })
}