import axios from 'axios';
import { ROOT_API_PATH, TOKEN_LOCATION } from '../constants';
import { getLocalStorage } from './index';

axios.defaults.baseURL = ROOT_API_PATH;

const token = getLocalStorage(TOKEN_LOCATION);
if (token) {
  axios.defaults.headers.common.Authorization = token;
}

/**
 * 设置请求的 token
 * @param {String} token 验证令牌
 */
export const setRequestToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

export default axios;
