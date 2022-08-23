let obj = {
  routes: [
    {
      overnightRoute: 0,
      routeId: '2',
      routeName_c: '大澳 > 梅窩碼頭',
      routeName_e: 'Tai O > Mui Wo Ferry Pier',
      routeName_s: '大澳 > 梅窝码头',
      routeNo: '1',
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: '1',
      routeName_c: '梅窩碼頭 > 大澳',
      routeName_e: 'Mui Wo Ferry Pier > Tai O',
      routeName_s: '梅窝码头 > 大澳',
      routeNo: '1',
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: '3',
      routeName_c: '紅磡 (紅鸞道) > 昂坪',
      routeName_e: 'Hung Hom (Hung Luen Road) > Ngong Ping',
      routeName_s: '红磡 (红鸾道) > 昂坪',
      routeNo: '1R',
      specialRoute: 0,
    },
  ],
};

// Q4. 1
console.log (
  obj['routes'].map (function (route) {
    // route represent every element of an array ***
    return route['routeNo'];
  })
);

// Q4. 2
let routeName = obj['routes'].map (function (route) {
  return route['routeName_c'];
});
const chineseTerminal = [];
for (let x = 0; x < routeName.length; x++) {
  let routeName1 = routeName[x].split (' > ');
  chineseTerminal.push (routeName1);
}
const arr1 = chineseTerminal.flat ();
console.log (arr1);
const checkDuplicate = {};
const arr2 = [];
for (let x = 0; x < arr1.length; x++) {
  if (checkDuplicate[arr1[x]] !== true) {
    checkDuplicate[arr1[x]] = true;
    arr2.push (arr1[x]);
  }
}
console.log (arr2);
