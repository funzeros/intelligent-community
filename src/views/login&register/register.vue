<template>
    <div id="register">
        <reghome v-if="getstepcount===0"></reghome>
        <reginfo v-else-if="getstepcount===1"></reginfo>
        <reginfouser v-else-if="getstepcount===3"></reginfouser>
        <reginfoht v-else-if="getstepcount===2"></reginfoht>
        <regid v-else-if="getstepcount===4"></regid> 
        <reghouse v-else-if="getstepcount===-1"></reghouse>
    </div>
</template>
<script>

import reghome from '@/components/register/reg_home';
import reginfouser from '@/components/register/reg_info_user';
import reginfoht from '@/components/register/reg_info_ht';
import reginfo from '@/components/register/reg_info';
import regid from '@/components/register/reg_idinfo';
import reghouse from '@/components/register/reg_house';

export default {
    components: {
        reghome,
        reginfouser,
        reginfoht,
        regid,
        reginfo,
        reghouse
    },
    computed:{
        getstepcount(){
            // 根据stepcount数v-if决定显示哪个组件
            // console.log(this.$store.state.register.stepcount);
            return this.$store.state.register.stepcount;
        }
    }
}
</script>
<style  scoped>
    #register{
        height: 100%;
    }
</style>