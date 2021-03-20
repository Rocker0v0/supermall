<template>
  <div class="buttom-bar">
    <div class="check-content">
      <check-button class="check-button" @click.native="checkedClick" :isChecked ="isAllChecked" />
      <span>全选</span>
    </div>
    <div class="price">合计 {{ totalPrice }}</div>
    <div class="calculate">
        去计算 ({{checkedLength}})
    </div>
  </div>
</template>

<script>
import checkButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  name: "carButtom",
  components: {
    checkButton,
  },
  computed: {
      ...mapGetters(["cartList"]),
    totalPrice() {
        return "￥"+this.cartList.filter((item)=>{
            return item.checked
        }).reduce((preValues,item)=>{
            return preValues+item.price*item.count
        },0).toFixed(2)
    },
    checkedLength(){
        return this.cartList.filter(item=>{
            return item.checked
        }).length
    },
    isAllChecked(){
      if(this.cartList.length === 0){
        return false
      }
      return !this.cartList.find(item=>{
          return  !item.checked
      })
    }
  },
  methods:{
    checkedClick(){
      if(this.isAllChecked){
        this.cartList.forEach(element => {
          element.checked = false
        });
      }else{
        this.cartList.forEach(element => {
          element.checked = true
        });
      }
    }
  }
};
</script>

<style scoped>
.buttom-bar {
  height: 45px;
  background-color: #eee;
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 45px;
  width: 100%;
  font-size: 15px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 100px;
}
.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
    margin-left: 20px;
    flex: 1;
}
.calculate{
    width: 100px;
    background: red;
    text-align: center;
    color: #fff;
}
</style>