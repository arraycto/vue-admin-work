import { isArray } from '@/utils/utils'
import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const currentRoles = store.state.user.roles
    if (value && isArray(value)) {
      const checkResult = value.some(role => {
        return !!currentRoles.find(it => it.roleCode === role)
      })
      if (!checkResult) {
        el.parentElement && el.parentElement.removeChild(el)
      }
    } else {
      throw new Error('please set value')
    }
  }
}
