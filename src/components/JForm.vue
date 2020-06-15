<template>
  <div id="app">
    <el-dialog title="title" :visible.sync="dialogUser" width="700px">
      <el-form :model="user" label-width="100px" ref="user">
        <el-form-item label="联系人姓名" :required="true">
          <el-input v-model="user.name" placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
          <el-input v-model="user.phone" placeholder="请输入联系人电话"></el-input>
        </el-form-item>
        <el-form-item label="联系人地址">
          <el-input v-model="user.address" placeholder="请输入联系人地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="amethod">确定</el-button>
        <el-button @click="dialogUser=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    props:{
      show: {
        type:Boolean,
        default: false
      },
      puser: {
        type: Object
      },
      type2: {
        type: String,
        default: 'add'
      }

    },

    data(){
      return {
        user: this.puser,
        title: ""
      }
    },

    computed: {
      dialogUser: {
        get: function(){
          return this.show;
        },
        set: function(){
         this.$emit("update:show",false);
        }
      }
    },
    watch: {
      type2: function(){
        if(type ==='add'){
          this.title = "新增用户";
        }else{
          this.title = "编辑用户";
        }
      }
    },
    methods: {
      amethod: function(){
        if(this.title === "新增用户"){
          this.smethod();
        }else{
          this.smethod2();
        }
      },
      smethod: function(){
        this.$emit('pmethod');
      },
      smethod2: function(){
        this.$emit('pmethod',this.user);
      }
    }




  }
</script>
