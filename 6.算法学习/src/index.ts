(() => {
  const list = [1, 2, 3];

  const square = (num: number) => {
    return new Promise(res => {
      setTimeout(() => {
        res(num * num)
      }, 1000)
    })
  }

  function test() {
    list.forEach(async x => {
      const res = await square(x);
      console.log(res);



    })
  }
  test();
})();
