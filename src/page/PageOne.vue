<template>
  <div id="app" >
       <el-row style="height:40px;margin:40px" >
        <el-col :span="6">
          <el-input v-model="username" placeholder="请输入联系人姓名" clearable></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="success" @click="getAllUser()">查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="success" round @click="dialogCreateUser=true">新增联系人</el-button>
        </el-col>
       </el-row>
       <el-row>
  
          <el-table :data="tableData" border stripe style="width:100%;">
                <el-table-column prop="name" label="联系人姓名" > </el-table-column>
                <el-table-column prop="phone" label="联系人电话" > </el-table-column>
                <el-table-column prop="address" label="联系人地址" > </el-table-column>
                <el-table-column width="200px">
                  <template slot="header" slot-scope="scope">操作</template>
                  <template slot-scope="scope">
                    <el-button @click="editUser(scope.row)" type="success" size="small">Edit</el-button>
                    <el-button @click="delUser(scope.row)" type="danger" size="small">Delete</el-button>
                  </template>
                </el-table-column>
          </el-table>
        
        </el-row>
        <JForm :dialogUser="true" :type="create"></JForm>
   </div>     
</template>

<script>
  import JForm from '@/components/JForm'
export default {
  name: 'HelloWorld',
  components:{
    JForm
  },
  data () {
    return {
      tableData: [],
        username:"",
        dialogCreateUser:false,
        dialogEditUser:false,
        user:{
          name:"",
          phone:"",
          address:""
        },
        newUser:{
          name:"",
          phone:"",
          address:""
        },
        response:{
          result:"",
          message:"",
          data:[]
        }
    }
  },
  methods:{
        getAllUser:function(){
          this.$http.get("user/getAll").then(res=>{
            console.log(res);
            //res 是 Promise对象，所以需要先 res.data才是接口返回
            this.tableData = res.data.data;
            
          })
          

        },
        addUser:function(){
          this.$http.post("user/add",this.user).then(res=>{
            console.log(res);
            //console.log(response.data.data);
          })
          this.dialogCreateUser = false;
          this.getAllUser();
        },

        delUser:function(row){
          this.$http.get("user/del",{"params":{"name":row.name}}).then(res=>{
            
            //console.log(response.data.data);
          })
          this.getAllUser();
        },
        editUser:function(row){
          this.user.name = row.name;
          this.user.phone = row.phone;
          this.user.address = row.address;
          this.dialogEditUser = true;
          
        },
        ensureEditUser:function(){
          this.$http.post("user/edit",this.user).then(res=>{
            
            //console.log(response.data.data);
          })
          this.dialogEditUser = false;

          this.getAllUser();
        },

        clearSuiteData:function(){
           this.user = Object.assign({}, this.newUser);
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
