/*

Internationalizing Dates - Intl
Its a API that provides a standard way to format and parse dates, times, and numbers in JavaScript.

Syntax -
new Intl.DateTimeFormat(locales, options).format(date)

1. locales - The locale matching algorithm to use. The following locales are supported: en, en-US, es, fr, fr-CA, it, ja, ko, pt, and zh. If no locale is specified, the default locale of the JavaScript runtime is used.

2. options - An object with some or all of the following properties -
weekday - The representation of the weekday. Possible values are: "narrow", "short", or "long".
month - The representation of the month. Possible values are: "narrow", "short", or "long".
day - The representation of the day. Possible values are: "narrow", "short", or "long".
year - The representation of the year. Possible values are: "numeric" or "2-digit".
hour - The representation of the hour. Possible values are: "numeric" or "2-digit".
minute - The representation of the minute. Possible values are: "numeric" or "2-digit".
second - The representation of the second. Possible values are: "numeric" or "2-digit".

3. date - The date value to format.

*/

const currentDate = document.getElementById("currentDate");

const now = new Date();
const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
}

// NOTE - Its better to get the locale from the browser
const locale = navigator.language
console.log(locale);

currentDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);