function main(p1) {
    p1 = p1||"new delhi";
    console.log(p1);
  }
  
  main();
  
  main(1);
  main("mumbai");
  
  main("delhi", "mumbai");
  main("delhi", "mumbai", "calcutta");