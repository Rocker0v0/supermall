<template>
  <div class="rightGoodsListChild">
    <a :href="itemGoods.link">
      <img :src="itemGoods.image" @load="loadClick" alt="" />
      <div>{{ itemGoods.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "rightGoodsListChild",
  props: {
    itemGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    
    loadClick(){
      this.$bus.$emit("imgLoad")
    }
  }
};
</script>

<style scoped>
.rightGoodsListChild {
  width: 100%;
  padding: 12px;
}
.rightGoodsListChild img {
  width: 100%;
  border-radius: 50%;
}
.rightGoodsListChild div {
  width: 100%;
  text-align: center;
  font-size: 12px;
  text-align: center;
}
</style>