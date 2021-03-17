import { loadData, likeSearch, deleteItems, updateItem } from '@/model/BaseModel'

export const GetDataMixin = {
  data() {
    return {
      getDataModel: {
        init: false
      }
    }
  },
  methods: {
    initGetDataModel({ url, method, params = {}, onGetDataResult, onGetDataError }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.getDataModel.url = url
      this.getDataModel.method = method
      this.getDataModel.onGetDataResult = onGetDataResult
      this.getDataModel.onGetDataError = onGetDataError
      this.getDataModel.params = params
      this.getDataModel.init = true
      return Promise.resolve(this.getDataModel.init)
    },
    getData() {
      loadData.call(this, {
        url: this.getDataModel.url,
        method: this.getDataModel.method || 'post',
        data: this.getDataModel.params
      }).then(this.getDataModel.onGetDataResult)
        .catch(this.getDataModel.onGetDataError)
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
    initLikeSearchModel({ url, method, conditionItems, extraParams, onSearchResult, onSearchError }) {
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
      }).then(this.likeSearchModel.onSearchResult)
        .catch(this.likeSearchModel.onSearchError)
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
    initDeleteItemsModel({ url, method, deleteKey = 'id', onDeleteResult, onDeleteError }) {
      if (!url) {
        throw new Error('please init url')
      }
      this.deleteItemsModel.url = url
      this.deleteItemsModel.method = method
      this.deleteItemsModel.onDeleteResult = onDeleteResult
      this.deleteItemsModel.onDeleteError = onDeleteError
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
    initUpdateItemModel({ url, method, updateData, onUpdateResult, onUpdateError }) {
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
      this.updateItemModel.onDeleteError = onUpdateError
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
      })
    }
  }
}
