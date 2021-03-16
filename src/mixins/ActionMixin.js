import { getData, likeSearch, deleteItems, updateItem } from '@/model/BaseModel'

export const GetDataMixin = {
  methods: {
    getData
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
        method: this.deleteItemsModel.method || 'post'
      })
    }
  }
}

