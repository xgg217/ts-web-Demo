const PENDING = 'pending'; // 初始状态
const FULFILLED = 'fulfilled'; // 成功状态
const REJECTED = 'rejected'; // 失败状态

// 成功
interface IResolve {
  (val: unknown): void
}

// 失败
interface IReject {
  (reason?: any): void
}

// 执行器
interface IExecutor {
  (resolve: IResolve, reject: IReject): void
}

class MyPromise<T> {
  private state: string;
  private value: any;
  private reason: any;
  private onFulfilledCallbacks: any[];
  onRejectedCallbacks: any[];
  constructor(executor: IExecutor) {
    this.state = PENDING;
    this.value = undefined; // 成功结果
    this.reason = undefined; // 失败原因

    this.onFulfilledCallbacks = [] // 成功回调队列
    this.onRejectedCallbacks = []  // 失败回调队列

    // resolve 函数-- 调用此方法就是成功
    const resolve: IResolve = value => {
      // setTimeout 模拟异步
      // 注意 即便是判断状态是否为 pending 也应该要在主线程空闲时执行
      setTimeout(() => {
        // 保证状态只能改变一次
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = value;

          // 依次将对应的函数执行
          // 若是使用 forEach 回调函数有可能不按顺序执行
          this.onFulfilledCallbacks.map(cb => cb(this.value));
        }
      }, 16);
    }

    // reject 函数 -- 调用此方法就是失败
    const reject: IReject = reason => {
      // setTimeout 模拟异步
      // 注意 即便是判断状态是否为 pending 也应该要在主线程空闲时执行
      setTimeout(() => {
        // 保证状态只能改变一次
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.reason = reason;

          // 依次将对应的函数执行
          // 若是使用 forEach 回调函数有可能不按顺序执行
          this.onRejectedCallbacks.map(cb => cb(this.value))
        }
      }, 16);
    }

    // executor 可能会出现异常，需要捕获并调用reject函数表示执行失败
    try {

      console.log(executor);
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  /**
   * 
   * @param onFulfilled 可选 如果不是函数则忽略
   * @param onRejected 可选 如果不是函数则忽略
   * @returns 
   */
  then(onFulfilled?: ((val: any) => void) | undefined | null, onRejected?: ((reason: any) => void) | undefined | null) {

    if (this.state === FULFILLED) {
      onFulfilled?.(this.value)
    }

    if (this.state === REJECTED) {
      onRejected?.(this.reason)
    }

    if (this.state === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onFulfilledCallbacks.push(() => {
        onFulfilled?.(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(() => {
        onRejected?.(this.reason);
      })
    }

  }
}

export default MyPromise;

