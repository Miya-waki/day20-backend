function weatherReport(p1) {
    /*if (p1 == undefined) {
      p1 = "mumbai";
    }*/
    p1 = p1  || "assam";
  
    console.log("Function Parameter Demo", p1);
  }
  
  weatherReport();
  weatherReport("mumbai");
  weatherReport("delhi");
  weatherReport();