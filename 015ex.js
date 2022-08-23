const json = `{"waitTime":[{"hospName":"Alice Ho Miu Ling Nethersole Hospital","topWait":"Over 2 hours"},{"hospName":"Caritas Medical Centre","topWait":"Over 1 hour"},{"hospName":"Kwong Wah Hospital","topWait":"Over 3 hours"},{"hospName":"North District Hospital","topWait":"Around 1 hour"},{"hospName":"North Lantau Hospital","topWait":"Around 1 hour"},{"hospName":"Princess Margaret Hospital","topWait":"Over 1 hour"},{"hospName":"Pok Oi Hospital","topWait":"Over 2 hours"},{"hospName":"Prince of Wales Hospital","topWait":"Over 1 hour"},{"hospName":"Pamela Youde Nethersole Eastern Hospital","topWait":"Over 1 hour"},{"hospName":"Queen Elizabeth Hospital","topWait":"Over 2 hours"},{"hospName":"Queen Mary Hospital","topWait":"Over 2 hours"},{"hospName":"Ruttonjee Hospital","topWait":"Over 3 hours"},{"hospName":"St John Hospital","topWait":"Around 1 hour"},{"hospName":"Tseung Kwan O Hospital","topWait":"Over 2 hours"},{"hospName":"Tuen Mun Hospital","topWait":"Over 3 hours"},{"hospName":"Tin Shui Wai Hospital","topWait":"Around 1 hour"},{"hospName":"United Christian Hospital","topWait":"Over 5 hours"},{"hospName":"Yan Chai Hospital","topWait":"Over 2 hours"}],"updateTime":"9/3/2020 6:30pm"}`;
console.log (json);
console.log (JSON.parse (json));
console.log (JSON.parse (json).waitTime);
console.log (
  JSON.parse (json).waitTime.map (function (wait) {
    return wait.topWait;
  })
);
console.log (
  JSON.parse (json)
    .waitTime.map (function (wait) {
      return wait.topWait;
    })
    .reduce (function (previous, current, index, arr) {
      // regular expression 將所有唔係數字嘅嘢拔出黎 變成無嘢
      return previous + parseInt (current.replace (/\D/g, '')) / arr.length;
      //本身就咁current就會係NaN
      //https://www.google.com/search?q=javascript+move+string+to+get+number&oq=javascript+move+string+to+get+number&aqs=chrome..69i57j33i160l4.10454j0j15&sourceid=chrome&ie=UTF-8
      //https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
    }, 0)
);
