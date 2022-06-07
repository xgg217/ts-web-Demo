// js 实现 Pick
{

  function myPick(todo: object, keys: []) {
    const obj = {};
    keys.forEach(key => {
      // 如果不存在
      if (key in todo) {

        obj[key] = todo[key];
      }
    });

    return obj;
  }
}

// ts 实现 Pick

  /**
   * K 是联合类型，可以用 in 来进行遍历
   * k --> 可以理解成 ['title', 'completed']
   * T --> 可以理解成 ['title', 'description', 'completed']
   * 用 k 来遍历 T 的内容，如果通过就会通过检查
   */
  type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
  }

  // 使用
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }


  type TodoPreview1 = MyPick<Todo, "title">

  // 等同于 TodoPreview = { title:string }
  const todo: TodoPreview1 = {
    title: 'Clean room'
  }

  /**
   * 相当于
   * type TodoPreview2 = {
   *  title: string;
   *  completed: boolean;
   * }
   */
  type TodoPreview2 = MyPick<Todo, "title" | "completed">


