class AsyncBeforeEnter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // 注意：此处component和render不会同时使用，同Route中component和render，render方法优先级要高
      // 目标组件 同 <Route componet>
      Component: null,
      // 目标组件render 方法  同 <Route render>
      render: null,
      // 错误信息
      error: null,
      // 标记异步是否完成
      completed: false,
    };
  }
}
