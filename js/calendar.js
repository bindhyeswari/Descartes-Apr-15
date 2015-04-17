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

    // print('curr_date', 'first_day', 'curr_last_date', 'curr_last_day');

    // get the remaining dates of the last month
    var prev_last_date = (new Date(curr_date.getFullYear(), curr_date.getMonth(), 0)).getDate();
    for (var i = 0, len = first_day; i < len; i++) {
        month.unshift(new CustomDate(prev_last_date - i, 0));
    }
    //console.log(month);

    // add dates for the current month
    for (i = 1, len = curr_last_date.getDate(); i <= len; i++) {
        month.push(new CustomDate(i, 1));
    }
    //console.log(month);

    // get the remaining dates of the next month
    for (i = 0, len = 6 - curr_last_day; i < len; i++) {
        month.push(new CustomDate(i + 1, 2));
    }
    //console.log(month);

    // return the month
    return month;

    /*function myconsoleprint() {
        Array.prototype.slice.call(arguments).forEach(function (arg) {
            console.log(arg + ':' + eval(arg));
        });
    }*/

}

function populateDatesContainer(container) {
    // populate the container with dates ...
    var month = createMonthArray();

    container.innerHTML = '';
    month.forEach(function (day) {
        var className;
        switch (day.month_type) {
            case 0: className = 'date prev-month';
                break;
            case 1: className = 'date';
                break;
            case 2: className = 'date next-month';
                break;
        }

        createElement('div', container, className, day.date);
    });
}

function createElement(elementType, parent, className, innerHTML, custom) {
    var element = document.createElement(elementType);
    if (parent) parent.appendChild(element);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;

    if (typeof custom !== 'undefined') {
        for (var prop in custom) {
            element.setAttribute(prop, custom[prop]);
        }
    }

    return element;
}

function CustomDate(date, monthType) {
    this.date = date;
    this.month_type = monthType; // 0 --> prev, 1--> curr, 2 --> next
}

