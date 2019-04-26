const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    it('接收 value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })

    it('接收 disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })

    it('接收 readonly', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })

    it('接收 error', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: '错了哦'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')

      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('错了哦')
      vm.$destroy()
    })
  })

  describe('事件', () => {

  })



})