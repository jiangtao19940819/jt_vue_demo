<template>
  <div id="app">
    <el-button type="success" @click="open">点击</el-button>
    <JForm :show.sync="show" :puser="user" @pmethod="ensureCreateUser()" :type2="add"></JForm>
     <el-button type="success" @click="open">点击22</el-button>
    <JForm :show.sync="show" :puser="user2" @pmethod="ensureeditUser($emit)" :type2="edit"></JForm>
  </div>
</template>
<script>
  import JDialog from "../components/JDialog";
  import JForm from "../components/JForm";
  export default {
    name: "PageTwo",
    data(){
      return {
        show: false,
        user: {
          name: "",
          phone: "",
          address: ""
        },
        user2: {
          name: "111",
          phone: "222",
          address: "333"
        }
      }
    },
    components: {
      JDialog,
      JForm
    },
    methods:{
      open: function(){
        this.show = true;
      },
      ensureCreateUser: function(){
        console.log("hello world");
        this.show = false;
      }
    }
  }
</script>
