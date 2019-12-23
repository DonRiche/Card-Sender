$(document).ready(function () {

    //Setting value of current Month,Date,Year,Hour,Minutes,Seconds
    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(now);

    //Capturing the event of the XMAS button
    let xMasButton = $("#xmasButton")
    console.log(xMasButton);

    //Value of the reciever
    let textReceiver = 8162779412
    console.log(textReceiver);

    //Setting value of the specific instance you want to send the text
    let fixedDate = "December 23rd 2019, 1:57:00 pm"

    //Function that sends the text
    function sendText(now) {
        if (now == fixedDate) {

            console.log("sending text at " + now);
        } else {
            console.log("error");

        }

    }

    sendText(now);






})

