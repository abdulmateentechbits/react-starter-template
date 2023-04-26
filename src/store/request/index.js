/* eslint-disable import/no-cycle */
import axios from 'axios';
import { TENANT_API, CENTRAL_API } from '../constants';
import store from '../store';

function get(url, payload) {
  const state = store.getState();
  return axios.get(`${TENANT_API}${url}`, {
    headers: { Authorization: `Bearer ${state.auth.user.token}` },
    validateStatus: false,
    params: payload
  });
}

function post(url, payload) {
  const state = store.getState();
  return axios.post(`${TENANT_API}${url}`, payload, {
    headers: { Authorization: `Bearer ${state.auth.user.token}` },
    validateStatus: false
  });
}

function put(url, payload) {
  const state = store.getState();
  return axios.put(`${TENANT_API}${url}`, payload, {
    headers: { Authorization: `Bearer ${state.auth.user.token}` },
    validateStatus: false
  });
}

function remove(url) {
  const state = store.getState();
  return axios.delete(`${TENANT_API}${url}`,{
    headers: { Authorization: `Bearer ${state.auth.user.token}` },
    validateStatus: false
  });
}

function getCentral(url) {
  return axios.get(`${CENTRAL_API}${url}`);
}

const requests = {
  get,
  post,
  put,
  remove,
  getCentral
};

export default requests;
