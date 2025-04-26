export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', weekday: 'long' };
    return `${date.getDate()} ${date.toLocaleString('ru-RU', { month: 'long' })} 
    ${date.getFullYear()}, ${date.toLocaleString('ru-RU', { weekday: 'long' })}`;
}