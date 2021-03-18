import { loadData, likeSearch, deleteItems, updateItem, addItem } from '@/model/BaseModel'
import { isFunction, isOjbect } from '@/utils/utils'

function handleResult(model, res) {
  model.onResult && model.onResult(res)
  model.afterAction && model.afterAction()
}

function handleError(model, error) {
  model.onError && model.onError(error)
  model.afterAction && model.afterAction()
}

export const GetDataMixin = {
  data() {
    return {
      getDataModel: {
        init: false
      }
    }
  },
  methods: {
    initGetData({ url, method, params, beforeAction, onResult, onError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.getDataModel.url = url
      this.getDataModel.method = method
      this.getDataModel.onResult = onResult
      this.getDataModel.onError = onError
      this.getDataModel.params = params || {}
      this.getDataModel.beforeAction = beforeAction
      this.getDataModel.afterAction = afterAction
      this.getDataModel.init = true
      return Promise.resolve(this.getDataModel.init)
    },
    getData() {
      this.getDataModel.beforeAction && this.getDataModel.beforeAction()
      loadData.call(this, {
        url: this.getDataModel.url,
        method: this.getDataModel.method || 'post',
        data: this.getDataModel.params
      }).then((res) => {
        handleResult.call(this, this.getDataModel, res)
      }).catch((error) => {
        handleError.call(this, this.getDataModel, error)
      })
    }
  }
}

export const LikeSearchMixin = {
  data() {
    return {
      likeSearchModel: {
        init: false,
        conditionItems: []
      }
    }
  },
  methods: {
    initLikeSearch({ url, method, conditionItems, extraParams, beforeAction, onResult, onError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      if (!onResult) {
        throw new Error('please init onSearchResult function')
      }
      if (!(onResult instanceof Function)) {
        throw new Error('onSearchResult must be Function type')
      }
      this.likeSearchModel.url = url
      this.likeSearchModel.method = method
      this.likeSearchModel.conditionItems = conditionItems
      this.likeSearchModel.extraParams = extraParams
      this.likeSearchModel.onResult = onResult
      this.likeSearchModel.onError = onError
      this.likeSearchModel.beforeAction = beforeAction
      this.likeSearchModel.afterAction = afterAction
      this.likeSearchModel.init = true
    },
    doSearch() {
      if (!this.likeSearchModel.init) {
        throw new Error('please init likeSearchModel first')
      }
      let searchParams = this.generatorSearchParams()
      if (this.likeSearchModel.extraParams) {
        const params = this.likeSearchModel.extraParams()
        searchParams = { ...searchParams, ...params }
      }
      likeSearch.call(this, {
        url: this.likeSearchModel.url,
        method: this.likeSearchModel.method || 'post',
        data: searchParams
      }).then((res) => {
        handleResult.call(this, this.likeSearchModel, res)
      }).catch((error) => {
        handleError.call(this, this.likeSearchModel, error)
      })
    },
    resetSearch() {
      this.likeSearchModel.conditionItems && this.likeSearchModel.conditionItems.forEach(it => { it.value = '' })
    },
    generatorSearchParams() {
      if (this.likeSearchModel.conditionItems && this.likeSearchModel.conditionItems.length !== 0) {
        return this.likeSearchModel.conditionItems.reduce((pre, cur) => {
          pre[cur.name] = cur.value
          return pre
        }, {})
      }
      return {}
    }
  }
}

export const DeleteItemsMixin = {
  data() {
    return {
      deleteItemsModel: {
        init: false
      }
    }
  },
  methods: {
    initDeleteItems({ url, method, deleteKey = 'id', beforeAction, onResult, onError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.deleteItemsModel.url = url
      this.deleteItemsModel.method = method
      this.deleteItemsModel.onResult = onResult
      this.deleteItemsModel.onError = onError
      this.deleteItemsModel.beforeAction = beforeAction
      this.deleteItemsModel.afterAction = afterAction
      this.deleteItemsModel.deleteKey = deleteKey
      this.deleteItemsModel.init = true
    },
    doDeleteItems(items) {
      if (!this.deleteItemsModel.init) {
        throw new Error('please init deleteItemsModel first')
      }
      if (!items) {
        throw new Error('please select the option to delete')
      }
      deleteItems.call(this, {
        url: this.deleteItemsModel.url,
        method: this.deleteItemsModel.method || 'post',
        data: {
          [this.initDeleteItemsModel.deleteKey]: items[this.initDeleteItemsModel.deleteKey]
        }
      }).then((res) => {
        handleResult.call(this, this.initDeleteItemsModel, res)
      }).catch((error) => {
        handleError.call(this, this.initDeleteItemsModel, error)
      })
    }
  }
}

export const UpdateItemMixin = {
  data() {
    return {
      updateItemModel: {
        init: false
      }
    }
  },
  methods: {
    initUpdateItem({ url, method, params, beforeAction, onResult, onError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.updateItemModel.url = url
      this.updateItemModel.method = method
      this.updateItemModel.params = params
      this.updateItemModel.onResult = onResult
      this.updateItemModel.onError = onError
      this.updateItemModel.beforeAction = beforeAction
      this.updateItemModel.afterAction = afterAction
      this.updateItemModel.init = true
    },
    doUpdateItem() {
      if (!this.updateItemModel.init) {
        throw new Error('please init updateItemModel first')
      }
      let data = null
      if (isFunction(this.updateItemModel.params) === '[object Function]') {
        data = this.updateItemModel.updateData()
      } else if (isOjbect(this.updateItemModel.params) === '[object Object]') {
        data = this.updateItemModel.params
      } else {
        throw new Error('please set update param')
      }
      updateItem.call(this, {
        url: this.updateItemModel.url,
        method: this.updateItemModel.method || 'post',
        data
      }).then((res) => {
        handleResult.call(this, this.updateItemModel, res)
      }).catch((error) => {
        handleError.call(this, this.updateItemModel, error)
      })
    }
  }
}

export const AddItemMixin = {
  data() {
    return {
      addItemModel: {
        init: false
      }
    }
  },
  methods: {
    initAddItem({ url, method, params, onAddItem, beforeAction, onResult, onError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.addItemModel.url = url
      this.addItemModel.method = method
      this.addItemModel.params = params
      this.addItemModel.onResult = onResult
      this.addItemModel.onError = onError
      this.addItemModel.beforeAction = beforeAction
      this.addItemModel.afterAction = afterAction
      this.addItemModel.onAddItem = onAddItem
      this.addItemModel.init = true
    },
    onAddItem() {
      if (!this.addItemModel.onAddItem) {
        throw new Error('please init onAddItem')
      }
      if (!(this.addItemModel.onAddItem instanceof Function)) {
        throw new Error('onAddItem must be Function')
      }
      this.addItemModel.onAddItem()
    },
    doAddItem() {
      if (!this.addItemModel.init) {
        throw new Error('please init addItemModel first')
      }
      let data = null
      if (isFunction(this.addItemModel.params) === '[object Function]') {
        data = this.addItemModel.updateData()
      } else if (isOjbect(this.addItemModel.params) === '[object Object]') {
        data = this.addItemModel.params
      } else {
        throw new Error('please set add param')
      }
      addItem.call(this, {
        url: this.addItemModel.url,
        method: this.addItemModel.method || 'post',
        data
      }).then((res) => {
        handleResult.call(this, this.addItemModel, res)
      }).catch((error) => {
        handleError.call(this, this.addItemModel, error)
      })
    }
  }
}