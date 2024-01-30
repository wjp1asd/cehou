import Vue from 'vue'
import App from './App'
import socket from './utils/socket.js'

Vue.prototype.$socket = socket;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
//初始化一些参数
if(!uni.getStorageSync("backs")){
var backs=[];
	uni.setStorageSync("backs",backs);
	
}
if(!uni.getStorageSync("backurl")){
var url="";
	uni.setStorageSync("backurl",url);
	
}

app.$mount()
