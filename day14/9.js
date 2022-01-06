function main(p1, p2) {
    p1= p1|| 9;
    p2 = p2||17;
    console.log(p1, p2);
  }
  
  main();
  main(1);
  main(1, 2);
  main(1, 2, 4);