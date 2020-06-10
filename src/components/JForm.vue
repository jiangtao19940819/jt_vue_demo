<template>
  <div id="app">
    <el-dialog title="selectData.title" :visible.sync="dialogUser" width="700px">
      <el-form :model="user" label-width="100px" ref="user">
        <el-form-item label="联系人姓名" :required="true">
          <el-input v-model="user.name" placeholder="请输入联系人姓名" disabled></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
          <el-input v-model="user.phone" placeholder="请输入联系人电话"></el-input>
        </el-form-item>
        <el-form-item label="联系人地址">
          <el-input v-model="user.address" placeholder="请输入联系人地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogUser=false">确定</el-button>
        <el-button @click="dialogUser=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  const formData = {
    create:{tilte:"新建联系人",mothod:"ensureCreateUser"},
    edit:{tilte:"编辑联系人",mothod:"ensureEditUser"}
  }

  export default {
    
    data(){
      return {
          dialogUser :this.dialogUserPar,
          selectData :formData[this.type],
             user:{
          name:"",
          phone:"",
          address:""
        }
      }
    },

    props:{
      dialogUserPar:Boolean,
      type:String
    },

    methods:{
      ensureCreateUser:function(){

      },
      ensureEditUser:function(){

      }
    }
  }
</script>