
{
  type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];

  type Result = Concat<[1], [2]> // [1, 2]
}