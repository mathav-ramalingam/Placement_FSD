
  //promise
  console.log("------------------------------------promise-------------------------------")

  loc = () =>{
    m =8
    return new Promise((resolve,reject) =>
    {
        if(m==8)
        {
            resolve("train Arrived")
        }
        else{
            reject("Train not arravied")
        }

    })
  }


  console.log(loc())



  console.log("-----------------------------------------------------------------------------------------")

  // Location Finder Example

function isTimeConsumption(t) {
  time = 999;
  return time <= t;
}

function isValidLocation(loc) {
  location = "Sivakasi";
  return loc == location;
}

function locationFinder() {
  loc = "karur";
  timed = 1000;
  return new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (isValidLocation(loc) && isTimeConsumption(timed)) {
        locFound("Location Found");
      } else {
        locNotFound("Location not Found");
      }
    }, timed);
  });
}

locationFinder()
.then((resolveMsg) => {
    console.log(resolveMsg);
  })
  .catch((error) => {
    console.log(error);
  });


