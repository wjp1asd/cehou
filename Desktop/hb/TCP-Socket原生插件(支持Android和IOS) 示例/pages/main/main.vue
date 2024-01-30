<template>
	<view class="content">
		<uni-tooltip style="background-color: hotpink;width: 100%;">{{username}}</uni-tooltip>
		<view class="shop">
			<view @click="nav1"  data-i="0"  class="box" style="color: white;">扫码检验</view>
			<view @click="nav"data-i="1"  class="box" style="color: white;">历史数据</view>
			
		</view>
		<view class="shop">
		
			<view @click="nav"data-i="2"  class="box" style="color: white;">任务管理</view>
			<view @click="nav"data-i="3"  class="box" style="color: white;">预警管理</view>
		</view>
		<view class="shop">
		
			<view @click="nav"data-i="4"  class="box" style="color: white;">系统设置</view>
			<view @click="nav"data-i="5"  class="box" style="color: white;">更多</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clickx:false,
				username:"",
				navlist:["/pages/index/index","/pages/task/task",
				"/pages/mission/mission","/pages/yujingset/yujingset","/pages/setting/setting","/pages/wifi/wifi"]
				
			}
		},
		onLoad() {
			var username =uni.getStorageSync("username");
			if(!username){
			uni.showToast({
				icon:"error",
				title:"未登录"
			})
			uni.navigateTo({
				url:"../login/login"
			})
			}else{
				this.username="当前登录账号："+username;
				this.clickx=true;
			}
			
			
		},
		methods: {
			nav(e){
				var a=uni;
					var i =e.currentTarget.dataset.i;
				if(this.clickx==false&&i!=4){
					uni.showToast({
						icon:"error",
						title:"未登录,无法操作"
					})
					
					uni.navigateTo({
						url:"../login/login"
					})
					return;
				}
			
				
				uni.navigateTo({
					url:this.$data.navlist[i],
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			nav2(e){
			uni.showToast({
				
				icon:"none",
				title:"功能开发中..."
			})
			},
			nav1(e){
			uni.scanCode({
				success: function (res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					uni.setStorageSync('keyword',res.result)
					
					uni.showModal({
						content:res.result
					})
					console.log('条码内容：' + res.result);
					uni.navigateTo({
						url:'../detail/detail'
					})
				}
			});
			}
		}
	}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50upx;
}

.text-area {
	display: flex;
	justify-content: center;
}
.box{
width:185px;
height: 200px;
color:white;
background-color:darkorange;
text-align: center;
justify-content: center;
align-items: center;
color: black;
font-size: 24px;
margin-left: 1%;
display: flex;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
.shop {
	    margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>