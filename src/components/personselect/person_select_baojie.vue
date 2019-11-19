// 投诉建议——人员选择
// 周佩蕾
<template>
  <div>
   <van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="张三" clickable @click="radio = '1'">
      <van-radio slot="right-icon" name="1" />
    </van-cell>
    <van-cell title="李四" clickable @click="radio = '2'">
      <van-radio slot="right-icon" name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>

  </div>
</template>
<script>
export default {
  data() {
    return {
        peoples:[
            {id:'101',name:'周四',radio:'1',name:'1'},
             {id:'102',name:'陈武',radio:'2',name:'2'},
        ],
        titles:[],
        radio:[]
    };
  },
  methods: {
   
  },
  computed: {
     
  },
};
</script>
<style scoped>
.van-cell {
   padding: 10px 30px;
}

/* 选择名 */
.van-cell__title {
    font-size:16px;
    text-align:left;
}
</style>