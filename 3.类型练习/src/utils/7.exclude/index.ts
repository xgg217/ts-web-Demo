
{
  // ts 实现
  type MyExclude<T, U> = T extends U ? never : T;
  type a = MyExclude<'a' | 'b' | 'c', 'a'>; // type a = "b" | "c"

  // 内置
  type b = Exclude<'a' | 'b' | 'c', 'a'>; // type a = "b" | "c"
}

{
  // js实现
  /**
   * js实现
   * @param T [a, b,c]
   * @param U  [a]
   */
  function MyExclude(T: string[], U: string[]) {
    return T.filter(item => {
      return !U.includes(item);
    })
  }
  const newArr = MyExclude(['a', 'b', 'c'], ['a'])
  console.log(newArr);

}