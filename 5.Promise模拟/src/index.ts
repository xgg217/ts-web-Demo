(() => {
  const pro1 = new Promise<number>((res, rej) => {
    console.log('学习');
    // res(1);
    // rej();
    setTimeout(() => {
      res(1);
    }, 1000);

  });

  const pro2 = pro1.then((res) => {
    console.log(res);
    return res + 1;
  });

  const pro3 = pro2.then((res) => {
    console.log(res);
  });

  console.log(pro1, pro2, pro3); // pinding pinding pinding


  setTimeout(() => {
    console.log(pro1, pro2, pro3); // res res res
  }, 3000);


})();

// (() => {
//   const pro1 = new Promise<number>((res, rej) => {
//     console.log('学习');
//     // res(1);
//     rej();
//   });

//   const pro2 = pro1.then((res) => {
//     console.log('考试1');
//     // console.log(res);
//   });
//   // const pro2 = pro1.catch(() => {
//   //   console.log('考试2');
//   // });

//   // const pro3 = pro1.then(() => {
//   //   console.log('考试');
//   // });
//   setTimeout(() => {
//     console.log(pro2);
//   }, 16)

//   // console.log(pro2, pro3);

// })();
(() => {
  // const pro1 = new Promise<number>((res, rej) => {
  //   console.log('学习');
  //   // res(1);
  //   // rej();

  //   res(1);

  // });

  // const pro2 = pro1.then((res) => {
  //   return new Promise<number>((res, rej) => {
  //     console.log('学习');
  //     res(1);
  //   });

  // });

  // setTimeout(() => {
  //   console.log(pro2);
  // }, 16)

  // console.log(pro2, pro3);

})();