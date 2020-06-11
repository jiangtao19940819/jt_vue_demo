<template>
  <div id="app">
    <el-button type="success" @click="open">点击</el-button>
    <JDialog :show="show" @closeDialog="close()"></JDialog>
  </div>
</template>
<script>
  import JDialog from "../components/JDialog";
  export default {
    name: "PageTwo",
    data(){
      return {
        show: false
      }
    },
    components: {
      JDialog
    },
    methods:{
      open: function(){
        this.show = true;
        console.log(this.show);
      },
      close: function(){
        this.show = false;
        console.log(this.show);
      }
    }
  }
</script>
