import { getData, likeSearch } from '@/model/BaseModel'

export const getDataModel = {
  methods: {
    getData
  }
}

export const LikeSearchMixin = {
  data() {
    return {
      likeSearchModel: {
        init: false,
        conditionItems: [],
        url: '',
        method: 'post',
        extraParams: null
      }
    }
  },
  methods: {
    initLikeSearchModel({ url, method, conditionItems, extraParams, onSearchResult }) {
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
        method: this.likeSearchModel.methods || 'post',
        data: searchParams
      }).then(this.likeSearchModel.onSearchResult)
        .catch(error => {
          console.log(error)
        })
    },
    resetSearch() {
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
