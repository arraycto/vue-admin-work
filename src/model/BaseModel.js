/**
 * 检测参数的合法性，如果校验成功则方法返回true
 * @param {*} param0
 * @returns true
 */
function checkParams({ url = '', method = 'GET' }) {
  if (!url) {
    throw new Error('url must be not null')
  }
  if (method.toUpperCase() !== 'GET' && method.toUpperCase() !== 'POST') {
    throw new Error('Illegal request method, Methods can only be "GET" or "POST"')
  }
  return true
}

export function getData({ url = '', method = 'GET', data, beforeRequest, afterRequest }) {
  if (!this.actionModel) {
    throw new Error('this actionModel must be not null')
  }
  if (checkParams({ url, method })) {
    return this['$' + method]({ url, data, beforeRequest, afterRequest })
  }
  throw new Error('params check failed')
}

export function likeSearch() { }

export function addItem() { }

export function deleteItems(items) { }

export function updateItem(item) { }

export default {
  getData,
  addItem,
  deleteItems,
  updateItem
}
