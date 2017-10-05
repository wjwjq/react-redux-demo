export function getRandomId() {
    return Math.random().toString().replace(/\./, '') + '-' + Math.random().toString().replace(/\./, '');
}
