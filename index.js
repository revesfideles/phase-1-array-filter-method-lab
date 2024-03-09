const drivers = [
     {
        firstName: "Bobby",
        homeTown: "Pittsburgh"
    },
     { 
        firstName: "Sammy",
        homeTown: "New York"
    },
     {  
        firstName: "Sally",
        homeTown: "Cleveland"
    },
     { 
        firstName: "Annette",
        homeTown: "Los Angeles"
    },
     { 
        firstName: "Sarah",
        homeTown: ""
    },
     {   
        firstName: "bobby",
        homeTown: "TampaBay"
    }

];

function findMatching(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    const matchingDriverNames = drivers
      .filter(driver => driver.toLowerCase() === lowercaseQuery);
    return matchingDriverNames;
  }

function fuzzyMatch(drivers, query) {
   const lowercaseQuery = query.toLowerCase();
   const matchingDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseQuery));
   return matchingDrivers;
}

function matchName(drivers, query) {
    const matchingDrivers = drivers.filter(driver => driver.name === query);
    return matchingDrivers;
  }