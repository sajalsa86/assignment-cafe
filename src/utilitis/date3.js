// Function to fetch current time from API or system
async function getCurrentTime() {
    try {
        const response = await fetch('http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback');
        const data = await response.json();
        return new Date(data.currentTime);
    } catch (error) {
        console.error('Error fetching current time:', error);
        return null;
    }
}

// Function to fetch publish date from API
async function getPublishDate() {
    try {
        const response = await fetch('http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback');
        const data = await response.json();
        return new Date(data.publishDate);
    } catch (error) {
        console.error('Error fetching publish date:', error);
        return null;
    }
}

// Updated function to get time difference using current UTC time and dynamic publish date
async function getTimeDifference() {
    const currentDate = await getCurrentTime();

    if (!currentDate) {
        return "Unable to fetch current time";
    }

    const publishDateObj = await getPublishDate();

    if (!publishDateObj) {
        return "Unable to fetch publish date";
    }

    const timeDifference = currentDate.getTime() - publishDateObj.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        return "Today";
    } else if (daysDifference === 1) {
        return "Yesterday";
    } else {
        return `${publishDateObj.toLocaleString('default', { month: 'short' })} ${publishDateObj.getDate()} (${daysDifference} Days ago)`;
    }
}

// Example usage with the updated function
//const formattedDate = await getTimeDifference();
//console.log(formattedDate);

export { getTimeDifference };
