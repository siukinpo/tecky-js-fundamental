// Q3.
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

console.log (
  obj['routes'].map (
    // only want the first bus route
    function (route) {
      // route represent every element of an array ***
      return route['routeName_c'];
    }
  )
);
console.log (obj['routes'][1]['routeName_c']);

console.log (
  obj['routes'].map (function (route) {
    // route represent every element of an array ***
    return route['routeId'];
  }).length
);

// Q5. 1
function routeNo (data) {
  console.log (
    data['routes'].map (function (route) {
      // route represent every element of an array ***
      return route['routeNo'];
    })
  );
}
routeNo ({
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
});

// Q5. 2
function terminal (data) {}
