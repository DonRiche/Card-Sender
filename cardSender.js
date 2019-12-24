$(document).ready(function () {

    //Setting value of current Month,Date,Year,Hour,Minutes,Seconds
    let now = moment().format('MMMM Do YYYY, h:mm a');
    // console.log(now);

    //Capturing the event of the XMAS button
    let $xMasButton = $("#xmasButton")
    // console.log($xMasButton);

    //Event listener
    $xMasButton.on("click", function () {
        console.log("Listener is firing");
        sendText(now);
    });

    //Value of the reciever
    let sender = '8162779412'
    // console.log(sender);

    //Setting value of the specific instance you want to send the text
    let fixedDate = "December 23rd 2019, 9:26 pm"

    //person object
    let textee = {
        sender: "Ricardo Perdomo",
        reciever: "",
        text: "Merry Christmas and a Happy New Year!!!"
    }

    //Function that sends the text
    function sendText(now) {
        if (now == fixedDate) {
            // Setting form
            let from = textee.sender;
            let to = '18162779412';
            const text = textee.text;



            $("#sent_text").text("Text was sent successfully!!!")

        } else {
            console.log("Current time " + now);
            console.log("Fixed time   " + fixedDate);
            $("#sent_text").text("sendText Function error --- fixedDate is not equal to " + now)

        }

    }
});














