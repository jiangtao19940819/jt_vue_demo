import ElementUI from 'element-ui';
import axios from 'axios'
let request = axios.create({
	baseURL : "http://127.0.0.1:8888/",
	//baseURL : "http://10.0.2.214:8000/mock",
	//baseURL : "http://172.16.0.185:8888/",
	timeout : 1000000
})

request.interceptors.request.use(config => {
	return config;
},error =>{
	Promise.reject(error);
})

request.interceptors.response.use(response=>{
	return Promise.resolve(response.data).then(checkResponseStatus(response));
},error=>{
  ElementUI.Message.error("服务器或者网络异常请稍后再试");
	if(error.response.status===404 || error.response.status===500){
		ElementUI.Message.error("服务器或者网络异常请稍后再试");
	}

	return Promise.reject(error);

})

let checkResponseStatus = (res)=>{

	if(res.data.result != "200"){
		ElementUI.Message.error(res.data.msg);
	}
}


export default {
	get: function(url,params){
		return request.get(url,{params:params})
	},
	getUrl: function(url){
		return request.get(url)
	},
    post:function(url,data){
		return  request.post(url,data)
	}
}
