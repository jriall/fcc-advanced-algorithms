// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// SOLUTION

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(a => {
    return {
      name: a.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.pow(Math.pow(earthRadius + a.avgAlt, 3) / GM, 0.5)
      )
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
