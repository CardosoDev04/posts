export function formatDate(date: Date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export function getTime(date: Date) {
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    if(minutes.length === 1) minutes = "0" + minutes;
    if(hours.length === 1) hours = "0" + hours;

    return `${hours}:${minutes}`;
}