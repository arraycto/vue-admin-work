export const baseModel = {
  actionModel: 'add' // 用于表格操作对话框的模式 eidt: 编辑模式  add: 添加模式，默认是添加模式
}

export function mergeObject(model) {
  if (model) {
    return { ...baseModel, ...model }
  }
  return {}
}
