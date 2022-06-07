// ts 实现
{
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  // todo.title = "Hello" // Error: 无法分配到 "title" ，因为它是只读属性
  // todo.description = "barFoo" // Error: 无法分配到 "title" ，因为它是只读属性
}

// js 实现
{
  // const readonly = function readonly(obj:object) {
  //   const newObj = {};
  //   for (const key in obj) {
  //     newObj['readonly' + key] = obj[key];
  //   }

  //   return newObj;
  // }
}