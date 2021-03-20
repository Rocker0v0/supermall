<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>

    <left-bar :goodsTypeList="goodTypeList" @itemClick="itemClick"></left-bar>
    <scroll ref="scroll" class="scroll">
      <right-goods-list :goods-list="CateGoryDateDetail"></right-goods-list>
      <tab-control
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="commonGoodsList"></goods-list>
    </scroll>
  </div>
</template>

<script>
import {
  getCateGoryDate,
  getCateGoryDateDetail,
  getCateGoryDateCommont,
} from "@/network/category";
import leftBar from "./categoryChild/categroyLeftBar";
import navBar from "@/components/common/navbar/NavBar";
import rightGoodsList from "./categoryChild/rightGoodsList";
import scroll from "@/components/common/scroll/Scroll";
import { debounce } from "@/common/uttilts";
import { itemListenetMixin } from "@/common/mixin";
import tabControl from "@/components/content/tabControl/tabControl";
import goodsList from "@/components/content/goods/goodsList";
export default {
  name: "Category",
  data() {
    return {
      goodTypeList: [],
      currentIndex: 0,
      CateGoryDateDetail: [],
      goodsType: "pop",
      commonGoodsList: [],
    };
  },
  mixins: [itemListenetMixin],
  components: {
    navBar,
    leftBar,
    rightGoodsList,
    scroll,
    tabControl,
    goodsList,
  },
  created() {
    getCateGoryDate().then((res) => {
      this.goodTypeList = res.data.category.list;
      this._getCateGoryDateDetail(this.currentIndex);
      this._getCateGoryDateCommont(this.currentIndex);
    });
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    _getCateGoryDateDetail(index) {
      const maitKey = this.goodTypeList[index].maitKey;
      getCateGoryDateDetail(maitKey).then((res) => {
        this.CateGoryDateDetail = res.data.list;
      });
    },
    _getCateGoryDateCommont(index) {
      const goodsType = this.goodsType;
      const miniWallkey = this.goodTypeList[index].miniWallkey;
      getCateGoryDateCommont(miniWallkey, goodsType).then((res) => {
        this.commonGoodsList = res;
      });
    },

    itemClick(index) {
      this.currentIndex = index;
      this._getCateGoryDateDetail(this.currentIndex);
      this._getCateGoryDateCommont(this.currentIndex);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
      }
      this._getCateGoryDateCommont(this.currentIndex);
    },
  },
};
</script>

<style scoped>
#category {
  position: flex;
}

.nav-bar {
  background-color: #ff69b4;
  color: #f8f8ff;
}
.scroll {
  position: absolute;
  left: 25%;
  right: 0;
  top: 44px;
  width: 75%;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
