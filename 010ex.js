const temperature = [
  {date: '1 Jan', minTemperature: 11, maxTemperature: 18},
  {date: '2 Jan', minTemperature: 10, maxTemperature: 17},
  {date: '3 Jan', minTemperature: 12, maxTemperature: 17},
  {date: '4 Jan', minTemperature: 14, maxTemperature: 19},
  {date: '5 Jan', minTemperature: 16, maxTemperature: 21},
  {date: '6 Jan', minTemperature: 17, maxTemperature: 21},
  {date: '7 Jan', minTemperature: 18, maxTemperature: 22},
];

// clone from question 2
const sortingTemperature = temperature.slice ();

/////////////////////////////////////////////////////////////////////////////////
//1. sort()

sortingTemperature.sort (function (date1, date2) {
  if (date1.minTemperature < date2.minTemperature) {
    return 1;
  } else if (date1.minTemperature > date2.minTemperature) {
    return -1;
  } else {
    return 0;
  }
});
console.log (sortingTemperature);

// second way second method to do this question!!!!  Why the one in lecture can't? it is because that is string , these are numbers

sortingTemperature.sort (function (date1, date2) {
  return date2.minTemperature - date1.minTemperature;
});
console.log (sortingTemperature);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. second question
console.log (
  temperature.map (function (temp) {
    return temp.date;
  })
);

// 3. third question
console.log (
  temperature
    .filter (function (temp) {
      return temp.maxTemperature > 20;
    })
    .map (
      //It is because the question only want the date
      function (temp) {
        return temp.date;
      }
    )
);

// 4. fourth question (1)
console.log (
  temperature.reduce (
    function (previous, current) {
      if (previous.minTemperature > current.minTemperature) {
        return current;
      } else {
        return previous;
      }
    },
    {date: 'No date', minTemperature: 9999}
  )
);

// 4. fourth question  (2)           ****************Dont know why it is wrong***************
console.log (
  temperature.reduce (function (previous, current) {
    if (previous > current.minTemperature) {
      return current;
    } else {
      return previous;
    }
  }, 9999)
);

// 4. fourth question (3)            ****************Dont know why it is wrong*************
console.log (
  temperature.reduce (
    function (previous, current) {
      if (previous.minTemperature > current.minTemperature) {
        return current.minTemperature;
      } else {
        return previous;
      }
    },
    {date: 'No date', minTemperature: 9999}
  )
);

// 4. fourth question (4)
console.log (
  temperature.reduce (
    function (previous, current) {
      if (previous.minTemperature > current.minTemperature) {
        return current;
      } else {
        return previous;
      }
    },
    {date: 'No date', minTemperature: 9999}
  ).date
);
