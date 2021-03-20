<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in list" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "@/components/common/scroll/Scroll";
import cartListItem from "./cartListItem"

export default {
  name: "cartList",
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
  components: {
    scroll,
    cartListItem
  },
  activated(){
    // console.log("aaa");
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cartList{
  height: calc(100vh - 44px - 49px - 45px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>