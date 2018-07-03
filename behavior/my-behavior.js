// 公共模版属性，方法继承
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () { 
      console.log('myBehaviorMethod')
    }
  }
})