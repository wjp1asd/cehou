
<template>
	<view class="container">
	
			<view style="margin-left: 30px;flex-direction: row;display: flex;margin-top: 50px;">
			<label style="font-size: 16px;margin-top: 5px">后台地址：</label>
			<uni-easyinput  type="text" width="80%"  v-model="url" style="width: 250px;" placeholder="请输入后台地址" />		
			
			<button style="margin-left:2px;
			background-color:greenyellow;
			margin-right: 5%;height: 36px;
			line-height: 36px;" @click="addback">+</button>	
			</view>
			
		
	<button style="background-color: orange;width: 80%;margin-top: 50px;" @click="submit">保存</button>
	
	<button style="background-color:cornflowerblue;width: 80%;margin-top: 50px;" @click="submit1">清除用户数据</button>
	<view style="margin-left: 10px;margin-top: 100px;">历史记录</view>
	<view v-if="range.length==0" style="margin:10px ;">
		暂无记录
	</view>
	<view v-else>
		
		<uni-list v-for="item in range ">
			<view>
				
					<label style="margin-left: 10px;" v-on:click="seturl(item)" >{{item}}</label>
			</view>
			
			
			<br>
			
			
		</uni-list>
		
	</view>
	
	
	</view>
	
</template>
<script>
export default {
	data() {
		return {
			// 表单数据
			range:[],
			url:""
				}
			
		
	},
	onLoad(e) {
		 var backs =uni.getStorageSync("backs");
		 var url =uni.getStorageSync("backurl");
		 this.range=backs;
		
		  this.url=url;
	},
	methods: {
		seturl(e){
			uni.showModal({
										
				content:"设置网址："+JSON.stringify(e)
			})
			this.url=e;
		},
		addback(){
		
		var backs=uni.getStorageSync("backs");
		 
	    var url =this.url;
		if(url.length==0){
						 uni.showToast({
							 icon:"error",
						 	title:"请输入信息"
						 })
						 return;
		}
      backs.push(url);
	   uni.showModal({
	   	content:"添加成功"+url
	   })
	   uni.setStorageSync("backs",backs);
	   this.range=backs;
		},
		submit1(){
			uni.setStorageSync("username",null);
		},
		submit() {
			 var url = this.url;
			 if(url.length==0){
				 uni.showToast({
					 icon:"error",
				 	title:"请输入信息"
				 })
				 return;
			 }
			 uni.setStorageSync("backurl",url);
			 uni.showModal({
			 	content:"当前后台地址："+url
			 })
			 uni.navigateTo({
			 	url:"../login/login"
			 })
		},
		
		
	}
}
</script>

<style lang="scss">
@import '../../common/uni-ui.scss';
</style>
