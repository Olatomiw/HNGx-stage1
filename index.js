document.addEventListener('DOMContentLoaded', function() {
    // Get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const userName = "theLazyCoder"
    const imgSrc="./IMG_3079.jpeg"

    // Get current UTC time in milliseconds
    const currentUTCTime = Date.now();

    // Update the content of the specified elements
    document.querySelector('[data-testid="slackDisplayImage"]').src=imgSrc
    document.querySelector('[data-testid="slackUserName"]').textContent=userName
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${currentUTCTime}`;
});
