export default function (path, method, body) {
    return new Request("/api" + path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
}