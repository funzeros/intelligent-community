
<template>
  <div id="reg_contract_time">
     <input v-model="show" style="display:none"/>
      <van-popup v-model="showPicker"  position="bottom">
        <van-datetime-picker
          :title="gettitle"
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="onCancel"
        ></van-datetime-picker>
      </van-popup>

  </div>
</template>
<script>
//  by方珂琛

export default {
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(),
      showPicker:false

    };
  },
  mounted() {
    this.minDate.setFullYear(this.minDate.getFullYear() - 20);
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 50);
  },
  methods: {
    onConfirm(value) {
      // console.log(value);
      value = `${value.getFullYear()}-${value.getMonth() +
        1}-${value.getDate()}`;
      if (this.$store.state.register.cotime_title === "开始时间") {      
        if(this.$store.state.register.contract_end){
            let startarr = value.split("-");
          let endarr = this.$store.state.register.contract_end.split("-");
          let flag=false;
          if (Number(endarr[0]) > Number(startarr[0])) {
            flag=true;
          }else if(Number(endarr[0]) < Number(startarr[0])){
            flag=false;
                this.$toast('合同开始时间不能晚于结束时间');

          }else{
            if (Number(endarr[1]) > Number(startarr[1])) {
              flag=true;   
            }else if(Number(endarr[1]) < Number(startarr[1])){
              flag=false;
                this.$toast('合同开始时间不能晚于结束时间');
              
            }else{
              if (Number(endarr[2]) > Number(startarr[2])) {
                flag=true;   
              }else{
                flag=false;
                this.$toast('合同开始时间不能晚于结束时间');
              }
            }
          }
          if(flag){
          this.$store.state.register.contract_start = value;
          }else{
          this.$store.state.register.contract_start = "";
          }
        }else{
        this.$store.state.register.contract_start = value;

        }
          
      } else {

        let endarr = value.split("-");
        let startarr = this.$store.state.register.contract_start.split("-");
        let flag=false;
        if (Number(endarr[0]) > Number(startarr[0])) {
          flag=true;
        }else if(Number(endarr[0]) < Number(startarr[0])){
          flag=false;
              this.$toast('合同结束时间不能早于开始时间');

        }else{
          if (Number(endarr[1]) > Number(startarr[1])) {
            flag=true;   
          }else if(Number(endarr[1]) < Number(startarr[1])){
            flag=false;
              this.$toast('合同结束时间不能早于开始时间');

          }else{
            if (Number(endarr[2]) > Number(startarr[2])) {
              flag=true;   
            }else{
              flag=false;
              this.$toast('合同结束时间不能早于开始时间');
            }
          }
        }
        if(flag){
        this.$store.state.register.contract_end = value;
        }else{
        this.$store.state.register.contract_end = "";
        }
      }
      this.$store.state.register.cotime_flag = false;
    },
    onCancel() {
      this.$store.state.register.cotime_flag = false;
    }
  },
  computed: {
    gettitle() {
      return this.$store.state.register.cotime_title;
    },
      show(){
      return this.showPicker=this.$store.state.register.cotime_flag;
    }
  },
  updated(){
    this.$store.state.register.cotime_flag=this.showPicker;
  },
};
</script>
<style  scoped>
#reg_contract_time {
  width: 100%;
  position: fixed;
  bottom: 0;
}
van-picker {
}
</style>