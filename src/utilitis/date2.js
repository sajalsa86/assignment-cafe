//option -2 daynamic
// Function to fetch current time from UTC API
async function getCurrentTime() {
    try {
        const response = await fetch('http://worldclockapi.com/api/json/utc/now');
        const data = await response.json();
        return new Date(data.currentDateTime);
    } catch (error) {
        console.error('Error fetching current time:', error);
        return null;
    }
}

// Updated function to get time difference using current UTC time
async function getTimeDifference() {
    const currentDate = await getCurrentTime();

    if (!currentDate) {
        return "Unable to fetch current time";
        // return "Just now";
    }

    const publishDate = "2024-01-05T12:00:00.000Z";
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

// Example usage with the updated function
// const formattedDate = await getTimeDifference();
// console.log(formattedDate);

export { getTimeDifference }

//use target components
/* const [formattedDate, setFormattedDate] = useState(null);
useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await getTimeDifference();
            setFormattedDate(result);
        } catch (error) {
            console.error('Error:', error);
            // Handle the error as needed
        }
    };

    fetchData();
}, []); */

//use target element
// {formattedDate !== null ? (<p>{formattedDate}</p>) : (<p>Loading...</p>)}