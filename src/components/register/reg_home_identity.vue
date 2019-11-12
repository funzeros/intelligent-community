
<template>
    <div id="reg_home_identity">
       <input v-model="show" style="display:none"/>
      <van-popup v-model="showPicker"  position="bottom">
        <van-picker 
                show-toolbar
                title="身份类型"
                :columns="columns"
                visible-item-count:3
                @cancel="onCancel"
                @confirm="onConfirm"
        ></van-picker>
      </van-popup>
     
    </div>
</template>
<script>

//  by方珂琛

export default {
  data() {
    return {
      columns: ['业主家属', '业主', '租客'],
      showPicker:false
    }
  },
  computed:{
    show(){
      return this.showPicker=this.$store.state.register.identity;
    }
  },
  updated(){
    this.$store.state.register.identity=this.showPicker;
  },
  methods: {
    onConfirm(value, index) {
    //   Toast(`当前值：${value}, 当前索引：${index}`);
        this.$store.state.register.homeform[0].value=value;
        this.$store.state.register.identity=false;
    },
    onCancel() {
    //   Toast('取消');
        this.$store.state.register.identity=false;
    }
  }
};
</script>
<style  scoped>
    #reg_home_identity{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>