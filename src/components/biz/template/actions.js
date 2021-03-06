import axios from '../../../utils/cz-axios';

/**
 * 同步 dispatch
 * @param {String} actionType action 类型
 * @param {Object} changes 改变的属性与值
 */
export const dispatchChanges = (actionType, changes) => {
  return dispatch => {
    dispatch({
      type: actionType,
      data: changes,
    });
  };
};

/**
 * 异步 dispatch
 * @param {String} actionType action 类型
 * @param {Object} data 请求数据
 * @param {Boolean} isThen promise 链的返回
 */
export const dispatchAsyncChanges = (actionType, data, isThen = false) => {
  return dispatch => {
    dispatch({
      type: actionType,
      data: {
        requestStatus: 'waiting',
      },
    });

    return axios({
      method: 'get',
      url: './template',
      params: data,
    })
      .then(res => {
        const { data } = res.data;

        dispatch({
          type: actionType,
          data: {
            ...data,
            requestStatus: 'success',
          },
        });

        return isThen ? Promise.resolve(data) : null;
      })
      .catch(err => {
        console.log(err);

        dispatch({
          type: actionType,
          data: {
            requestStatus: 'fail',
          },
        });

        return isThen ? Promise.reject(err) : null;
      });
  };
};
