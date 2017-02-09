///<reference path="test.d.ts" />
import * as _ from 'lodash'


wxxxx.getNetworkType({
  success: res => {
    res.networkType
  },
  data: {
    url: 'gege',
    page: 11
  }
})

export default {
  ready () {
    
    wxxxx.getNetworkType({
      data: {
        page: 1,
        url: '333'
      },
      success (res) {
        res.networkType
      }
    })
  }
}