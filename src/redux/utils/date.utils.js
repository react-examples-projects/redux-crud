class DateTime {
    fromInputHTML(date) {
        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
    }
}

export default new DateTime();
