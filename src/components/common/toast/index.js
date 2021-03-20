import Toast from "./Toast"

const obj = {

}
obj.install = function (vue) {

  /**
   * 个人理解：extend就是将Toast和全局vue实例进行关联，创建一个构造器
   * 再根据组件构造器，new一个实例，
   * 将这个实例挂载到一个元素上，
   * 将这个元素添加到页面上
   * 最后将这个实例绑定到vue原型上
   */
  const toastConstructor = vue.extend(Toast)

  const toast = new toastConstructor()

  toast.$mount(document.createElement("div"))

  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast

}


// import Toast from './Toast'

// const Obj = {}

//   Obj.install = function (Vue) {
//     // document.body.appendChild(Toast.$el)
//     // 1.创建组件构造器
//     const toastConTrustor = Vue.extend(Toast)

//     // 2.new的伐毛换髓解耦，根据组件构造器，可以创建出来一个组件对象
//     const toast = new toastConTrustor()

//     // 3.将组件对象，手动挂载到某一个元素上
//     toast.$mount(document.createElement('div'))

//     // 4.toast.$el对应的就是div了
//     document.body.appendChild(toast.$el)

//     Vue.prototype.$toast = toast
//   }

export default obj
