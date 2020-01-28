export default function (path, method, body) {
    return new Request(path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
}