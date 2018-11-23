import get from 'lodash/get';

/** TODO: 优化
 * 获取服务端返回的错误信息
 * @param {Object} error 错误信息
 * @param {String} message 错误消息
 */
export const getErrorMessage = (
  error = {},
  message = '未知错误，请稍后重试'
) => {
  const result = get(error, 'response.data.message');

  if (typeof result === 'string') {
    return result;
  } else {
    console.log(get(error, 'response.data'));
    return message;
  }
};

/**
 * 安全的获取 localStorage 上存储的数据
 * @param {String} key 键
 */
export const getLocalStorage = key => {
  let result = null;

  try {
    result = window.localStorage.getItem(key);
  } catch (err) {
    console.log(err);
  }

  return result;
};

/**
 * 安全的在 localStorage 存储数据
 * @param {String} key 键
 * @param {String} value 值
 */
export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

/**
 * 安全的在 localStorage 移除数据
 * @param {String} key 键
 */
export const removeLocalStorage = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
