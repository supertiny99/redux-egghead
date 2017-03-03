# React 计数器 例子
1. 创建 reducer: counter,
2. 创建 store: createStore(reducer),
3. 创建组件 Counter,
4. 渲染组件 render（将 store 中的初始状态【state = 0】给 props.value，同时将两个分发动作的函数分别给 props.onIncrement, props.onDecrement。）
5. render 订阅 store，每当 store 被 dispatch（分发），执行一次 render 渲染组件。
