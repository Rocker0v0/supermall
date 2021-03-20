<template>
  <div class="cart">
    <!--导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{lenth}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import cartList from "./childComps/cartList"
import {mapGetters} from 'vuex'
import cartButtomBar from "./childComps/cartButtomBar"
  export default {
    name: "Cart",
    components: {
      NavBar,
      cartList,
      cartButtomBar
    },
    computed: {
      
      /**
       * vue提供的一种快速获取vuex中的getters方法里的内容
       *  两种语法 数组函数和对象函数，分别映射出来
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
       */
      ...mapGetters({
        lenth: 'cartLength',
      })
    }
  }
</script>

<style scoped>
.cart {
  height: 100%;
}
.nav-bar {
  background-color: #FF69B4;
  color: #ffffff;
  /* font-weight: 700; */
}
</style>
