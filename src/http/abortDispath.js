
export const abortDispatch = (payload, dispatch) => {
    if (payload && payload.signal) {
      const error = 'success! request is aborted';
      if (payload.signal.aborted) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(error); // 通过reject达到中止请求目的
      }
      const cancellation = new Promise((_, reject) => {
        payload.signal.addEventListener('abort', () => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(error);
        });
      });
      return Promise.race([cancellation, dispatch(payload)]); //Promise.race比较中止和接口请求快慢，谁快返回谁
    }
    return dispatch(payload);
  };
