<template>
  <div class="rightGoodsList">
    <right-goods-list-child
      v-for="(item, index) in goodsList"
      :key="index"
      class="goodsListItem"
      :item-goods="item"
    ></right-goods-list-child>
  </div>
</template>

<script>
import rightGoodsListChild from "./rightGoodsListChild";
export default {
  name: "rightGoodsList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    rightGoodsListChild,
  },
};
</script>

<style scoped>
.rightGoodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
.goodsListItem{
  width: 33%;
}
</style>