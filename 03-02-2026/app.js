    // var date = new Date();

    // var day = date.getDay();
    // console.log("GET DAY-->", day);
    // console.log(date.toString());

    // var weekDays = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ];

    // var weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // var weekDaysInUrdu = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];


    // console.log("Today is: " + weekDays[day]);
    // console.log("Today is (short): " + weekDaysShort[day]);
    // console.log("آج کا دن ہے: " + weekDaysInUrdu[day]);


    // console.log("Get Date-->", date.getDate());
    // console.log("Get Month-->", date.getMonth());
    // console.log("Get Full Year-->", date.getFullYear());

    // console.log(
    //    "Current time in milliseconds since 1970: " + date.getTime()
    // )

    // console.log(
    //    "Current hours: " + date.getHours()
    // )
    // console.log(
    //    "Current minutes: " + date.getMinutes()
    // )
    // console.log(
    //    "Current seconds: " + date.getSeconds()
    // )
    // console.log(
    //    "Current milliseconds: " + date.getMilliseconds()
    // )

    var today = new Date();
    // var doomsday = new Date("June 30, 2030 13:00:00");

    // var millisecondsToday = today.getTime();
    // var millisecondsDoomsday = doomsday.getTime();

    // var millisecondsDifference = millisecondsDoomsday - millisecondsToday;

    // var differenceInDays = millisecondsDifference / (1000 * 60 * 60 * 24);

    // console.log(
    //    "Days remaining until June 30, 2030: " + Math.floor(differenceInDays)
    // );

    console.log("Before modification: " + today.toString());

    today.setFullYear(2040);
    today.setMonth(5)
    today.setDate(15);
    today.setHours(10);
    today.setMinutes(30);
    today.setSeconds(0);


    console.log("Today is: " + today.toString());