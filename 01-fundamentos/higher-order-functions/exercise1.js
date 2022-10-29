const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (arrays) => arrays.reduce((acc, cur) => acc.concat(cur))
  console.log(flatten(arrays));

  // const flatten = (arrays) => arrays.flat()
  // console.log(flatten(arrays))