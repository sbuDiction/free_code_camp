module.exports = () => {

    const timeStamp = (dateInput) => {
        const date = new Date(dateInput);
        let time = { unix: "", utc: "" };
        if (dateInput) {
            if (date.toString() === "Invalid Date") {
                const strToNumber = Number(dateInput);
                time = {
                    unix: new Date(strToNumber).getTime(),
                    utc: new Date(strToNumber).toUTCString()
                };
            } else {
                time = {
                    unix: new Date(dateInput).getTime(),
                    utc: new Date(dateInput).toUTCString()
                };
            }
        } else if (!dateInput) {
            time = {
                unix: new Date().getTime(),
                utc: new Date().toUTCString()
            };
        }
        return time;
    }

    return {
        timeStamp
    }
}