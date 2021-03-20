<template>
  <div class="leftbar">
    <scroll class="scroll">
      <div
        v-for="(item, index) in goodsTypeList"
        :key="index"
        class="leftbarItem"
        @click="itemClick(index)"
        :class="{ activity: index === currentIndex }"
      >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/common/scroll/Scroll";
export default {
  props: {
    goodsTypeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    scroll,
  },
  activited() {
    this.$refs.scroll.refresh();
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  name: "leftbar",
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.leftbar {
  width: 25%;
  background-color: #f3e1e16e;
  height: 100%;
  font-size: 14px;
  overflow: hidden;
}
.scroll {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.leftbarItem {
  padding: 15px;
  text-align: center;
}
.activity {
  background-color: #ffff;
}
</style>