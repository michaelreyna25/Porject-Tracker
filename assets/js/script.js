var intervalNum = 0;

function updateDisplayCurrentTime(){
    $('#current-time').text(dayjs().format('MMM D, YYYY[ at ]h:m:s a'));
}

intervalNum = setInterval(updateDisplayCurrentTime, 1000);