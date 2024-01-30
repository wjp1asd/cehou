<template>
	<view class="content">
		<text>初始化一次,全局可发送信息</text>
		<input style="width: 750rpx;" type="text" v-model="message" placeholder="请输入发送内容" />
		<input style="width: 750rpx;" type="text" v-model="channel" placeholder="请输入信道编号" />
		<button @click="sendMsg()">发送</button>
		<button @click="sendHexMsg()">发送字节数组</button>
	</view>
</template>

<script>
//自定义
var _self;
export default {
	data() {
		return {
			channel: '1',
			message: '我很好',
			listBytes: ['23', '23', '01', 'c0', '00', 'A9', '09', '10', '11', '12', '19', '20', 'ff', 'ff', '4F', '4F']
		};
	},
	onLoad() {
		_self = this;
	},
	onShow: function() {},
	methods: {
		sendMsg() {
			console.log('sendMsg');
			this.$socket.send(_self.channel, _self.message);
		},
		sendHexMsg() {
			console.log('sendHexMsg');
			this.$socket.sendBytes(_self.channel, JSON.stringify(_self.listBytes));
		}
	}
};
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

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
