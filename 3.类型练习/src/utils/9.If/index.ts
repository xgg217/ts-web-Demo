
{
  type If<C, T, F> = C extends boolean ? T : F;

  type A = If<true, 'a', 'b'>  // 'a'
  type B = If<false, 'a', 'b'> // 'b'
}