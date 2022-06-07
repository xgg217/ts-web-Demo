type GetterName<T extends string> = `get${Capitalize<T>}`;

type Cases<T extends string> = `${Uppercase<T>} ${Lowercase<T>} ${Capitalize<T>} ${Uncapitalize<T>}`;

type T5 = GetterName<"foo">; // "getFoo"
type T6 = Cases<"bar">; // "BAR bar Bar bar"