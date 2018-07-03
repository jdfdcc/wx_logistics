// components/test.js
var behavior = require('../../behavior/my-behavior');
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['my-class'],// 由于继承设置组件class样式
  behaviors: [behavior],
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showClick: function() {
      console.log(this.data.innerText)
      this.triggerEvent('myevent', '2', '2')
      this.myBehaviorMethod()
    }
  },

  created: function () {
    console.log('created')
  },

  attached: function () {
    console.log('attached')
  },

  ready: function () {
    console.log('ready')
  }
})
