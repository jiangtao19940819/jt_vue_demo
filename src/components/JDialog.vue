<template>
  <el-dialog title="新建弹窗" :visible.sync="dialogUser" >
    <span>hello world</span>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogUser=false">确定</el-button>
        <el-button @click="closeDialog()">取消</el-button>
      </span>
  </el-dialog>
</template>
<script>
  export default {
    name: "JDialog",
    data(){
      return {
        //dialogUser: this.show
      }
    },
    props: {
      show:{
        type: Boolean,
        default: false
      }
    },
    // watch: {
    //   show(){
    //     this.dialogUser = this.show;
    //     console.log("hello"+this.dialogUser);
    //   }
    // },
    computed: {
      dialogUser: {
        get: function(){
          return this.show;
          console.log("hello"+this.dialogUser);
        },
        set: function(){
          this.$emit('closeDialog');
        }

      }
    },
    methods: {
      closeDialog: function(){
        this.dialogUser = false;

      }
    }
  }
</script>
