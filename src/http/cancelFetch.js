import React from 'react';

/**
 * 用于组件卸载时自动cancel所有注册的promise
 */
export default class EnhanceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.abortSignalControllers = [];
  }

  componentWillUnmount() {
    this.abortSignalControl(); // 页面卸载后自动中止所有请求
  }

  /**
   * 注册control
   */
  bindSignalControl = () => {
    let registerSignal = '';
    if ('AbortController' in window) {
      const controller = new AbortController();
      const { signal } = controller;
      registerSignal = signal;
      this.abortSignalControllers.push(controller);
    }
    return registerSignal;
  };

  /**
   * 取消signal对应的Promise的请求
   * @param {*} signal
   */
  abortSignalControl(signal) {
    if (signal !== undefined) {
      const idx = this._findSignalControl(signal);
      if (idx !== -1) {
        const control = this.abortSignalControllers[idx];
        control.abort();
        this.abortSignalControllers.splice(idx, 1);
      }
    } else {
      this.abortSignalControllers.forEach(control => {
        control.abort();
      });
      this.abortSignalControllers = [];
    }
  }

  _findSignalControl(signal) {
    const idx = this.abortSignalControllers.findIndex(controller => controller.signal === signal);
    return idx;
  }
}