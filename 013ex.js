const readlineSync = require ('readline-sync');
const add = require ('date-fns/add');
const parseISO = require ('date-fns/parseISO');
const format = require ('date-fns/format');

while (true) {
  const dateString = readlineSync.question ('Enter the key date: ');
  const date = parseISO (dateString);
  console.log (
    '100-day celebration: ' + format (add (date, {days: 100}), 'yyyy-MM-dd')
  );
  console.log (
    '100-month celebration: ' + format (add (date, {months: 100}), 'yyyy-MM-dd')
  );
  console.log (
    '10000000-second celebration: ' +
      format (add (date, {seconds: 10000000}), 'yyyy-MM-dd')
  );
}
