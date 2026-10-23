// export import

function add(a, b) {
    return a + b
}

export function sub(a, b) { // named export
    if (a > b) {
        return a - b;
    } else {
        return b - a
    }
}

export const pi = 3.14159 // named export

export default add;// default export
