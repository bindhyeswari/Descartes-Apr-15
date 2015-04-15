function createMonthArray() {
    // create the month array according to the dates
    var month = [];
    // get the current date
    var curr_date = new Date();
    // get the first day of this month
    var first_day = (new Date(curr_date.getFullYear(), curr_date.getMonth(), 1)).getDay();

    // get the last date
    var curr_last_date = new Date(curr_date.getFullYear(), curr_date.getMonth() + 1, 0);
    // get the last day
    var curr_last_day = curr_last_date.getDay();

    print('curr_date', 'first_day', 'curr_last_date', 'curr_last_day');

    // get the remaining dates of the last month
    var prev_last_date = (new Date(curr_date.getFullYear(), curr_date.getMonth(), 0)).getDate();
    for (var i = 0, len = 6 - first_day; i < len; i++) {
        month.unshift(prev_last_date - i);
    }
    console.log(month);

    // add dates for the current month
    for (i = 1, len = curr_last_date.getDate(); i <= len; i++) {
        month.push(i);
    }
    console.log(month);

    // get the remaining dates of the next month
    for (i = 0, len = 6 - curr_last_day; i < len; i++) {
        month.push(i + 1);
    }
    console.log(month);

    // return the month


    function print() {
        Array.prototype.slice.call(arguments).forEach(function (arg) {
            console.log(arg + ':' + eval(arg));
        });
    }

}


createMonthArray();

