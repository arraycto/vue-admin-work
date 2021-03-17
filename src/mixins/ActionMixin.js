import { loadData, likeSearch, deleteItems, updateItem, addItem } from '@/model/BaseModel'

export const GetDataMixin = {
  data() {
    return {
      getDataModel: {
        init: false
      }
    }
  },
  methods: {
    initGetData({ url, method, params, beforeAction, onGetDataResult, onGetDataError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.getDataModel.url = url
      this.getDataModel.method = method
      this.getDataModel.onGetDataResult = onGetDataResult
      this.getDataModel.onGetDataError = onGetDataError
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
        this.getDataModel.onGetDataResult(res)
        this.getDataModel.afterAction && this.getDataModel.afterAction()
      })
        .catch((error) => {
          this.getDataModel.onGetDataError(error)
          this.getDataModel.afterAction && this.getDataModel.afterAction()
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
    initLikeSearch({ url, method, conditionItems, extraParams, beforeAction, onSearchResult, onSearchError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      if (!onSearchResult) {
        throw new Error('please init onSearchResult function')
      }
      if (!(onSearchResult instanceof Function)) {
        throw new Error('onSearchResult must be Function type')
      }
      this.likeSearchModel.url = url
      this.likeSearchModel.method = method
      this.likeSearchModel.conditionItems = conditionItems
      this.likeSearchModel.extraParams = extraParams
      this.likeSearchModel.onSearchResult = onSearchResult
      this.likeSearchModel.onSearchError = onSearchError
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
        this.likeSearchModel.beforeAction && this.likeSearchModel.beforeAction()
        this.likeSearchModel.onSearchResult(res)
      })
        .catch((error) => {
          this.likeSearchModel.afterAction && this.likeSearchModel.afterAction()
          this.likeSearchModel.onSearchError(error)
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
    initDeleteItems({ url, method, deleteKey = 'id', beforeAction, onDeleteResult, onDeleteError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.deleteItemsModel.url = url
      this.deleteItemsModel.method = method
      this.deleteItemsModel.onDeleteResult = onDeleteResult
      this.deleteItemsModel.onDeleteError = onDeleteError
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
      }).then(res => {
        this.initDeleteItemsModel.beforeAction && this.initDeleteItemsModel.beforeAction()
        this.initDeleteItemsModel.onDeleteResult(res)
      }).catch(error => {
        this.initDeleteItemsModel.afterAction && this.initDeleteItemsModel.afterAction()
        this.initDeleteItemsModel.onDeleteError(error)
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
    initUpdateItem({ url, method, updateData, beforeAction, onUpdateResult, onUpdateError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      if (!(updateData instanceof Function)) {
        throw new Error('please init updateData and updateData must be a Function')
      }
      this.updateItemModel.url = url
      this.updateItemModel.method = method
      this.updateItemModel.updateData = updateData
      this.updateItemModel.onUpdateResult = onUpdateResult
      this.updateItemModel.onUpdateError = onUpdateError
      this.updateItemModel.beforeAction = beforeAction
      this.updateItemModel.afterAction = afterAction
      this.updateItemModel.init = true
    },
    doUpdateItem() {
      if (!this.updateItemModel.init) {
        throw new Error('please init updateItemModel first')
      }
      const params = this.updateItemModel.updateData()
      updateItem.call(this, {
        url: this.updateItemModel.url,
        method: this.updateItemModel.method || 'post',
        data: params
      }).then(res => {
        this.updateItemModel.beforeAction && this.updateItemModel.beforeAction()
        this.updateItemModel.onUpdateResult(res)
      }).catch(error => {
        this.updateItemModel.afterAction && this.updateItemModel.afterAction()
        this.updateItemModel.onUpdateError(error)
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
    initAddItem({ url, method, addData, beforeAction, onAddResult, onAddError, afterAction }) {
      if (!url) {
        throw new Error('please init url')
      }
      if (!(addData instanceof Function)) {
        throw new Error('please init addData and addData must be a Function')
      }
      this.addItemModel.url = url
      this.addItemModel.method = method
      this.addItemModel.addData = addData
      this.addItemModel.onAddResult = onAddResult
      this.addItemModel.onAddError = onAddError
      this.addItemModel.beforeAction = beforeAction
      this.addItemModel.afterAction = afterAction
      this.addItemModel.init = true
    },
    doAddItem() {
      if (!this.addItemModel.init) {
        throw new Error('please init addItemModel first')
      }
      const params = this.addItemModel.addData()
      addItem.call(this, {
        url: this.addItemModel.url,
        method: this.addItemModel.method || 'post',
        data: params
      }).then(res => {
        this.addItemModel.beforeAction && this.addItemModel.beforeAction()
        this.addItemModel.onAddResult(res)
      }).catch(error => {
        this.addItemModel.afterAction && this.addItemModel.afterAction()
        this.addItemModel.onAddError(error)
      })
    }
  }
}
