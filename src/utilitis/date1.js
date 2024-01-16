function getTimeDifference(publishDate) {
    const currentDate = new Date();
    const publishDateObj = new Date(publishDate);
    const timeDifference = currentDate - publishDateObj;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        return "Today";
    } else if (daysDifference === 1) {
        return "Yesterday";
    } else {
        return `${publishDateObj.toLocaleString('default', { month: 'short' })} ${publishDateObj.getDate()} (${daysDifference} Days ago)`;
    }
}

//Example usage with the provided data
/*  const publishDate = "2022-03-14T12:00:00.000Z";
 const formattedDate = getTimeDifference(publishDate);
console.log(formattedDate); */


export { getTimeDifference }