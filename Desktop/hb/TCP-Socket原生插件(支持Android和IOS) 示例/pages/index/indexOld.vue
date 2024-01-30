<template>
	<view class="content">
		<input style="width: 750rpx;" type="text" v-model="ip" placeholder="请输入IP" />
		<input style="width: 750rpx;" type="text" v-model="port" placeholder="请输入端口" />
		<input style="width: 750rpx;" type="text" v-model="message" placeholder="请输入发送内容" />
		<input style="width: 750rpx;" type="text" v-model="channel" placeholder="请输入信道编号" />
		<!-- <button @click="testPermisson()">测试权限</button> -->
		<button @click="connectTCP()">连接</button>
		<button @click="receiveTCP()">获取</button>
		<button @click="disconnectTCP()">关闭</button>
		<button @click="sendMsg()">发送</button>
		<button @click="sendHexMsg()">发送字节数组</button>
		<button @click="exchange()">跳转B页面</button>
	</view>
</template>

<script>
//自定义
var _self;
//DCloud-RichAlert
const TCPSocket = uni.requireNativePlugin('Aimer-TCPPlugin');
export default {
	data() {
		return {
			ip: '192.168.18.106',
			port: '6666',
			message: '',
			channel: '',

			listBytes: ['53', '53', '01', 'c0', '00', 'A9', '09', '10', '11', '12', '19', '20', 'ff', 'ff', '4E', '4E'],

			titleNumber: '',
			titleNumber2: '',
			callLog: null,
			title: '',
			title1: '',
			title2: '',
			title3: '',

			title4: '',
			title5: '',
			title6: '',
			title7: ''
		};
	},
	onLoad() {
		_self = this;
	},
	onShow: function() {},
	methods: {
		connectTCP() {
			console.log('ip', _self.ip);
			console.log('port', _self.port);
			console.log('channel', _self.channel);
			TCPSocket.connect(
				{
					channel: _self.channel,
					charsetname:'GBK',
					ip: _self.ip,
					port: _self.port
				},
				result => {
					/**
					 * status : 0 连接成功
					 * status : 1 断开连接
					 * receivedMsg : 服务器返回信息
					 */
					if (result.status == '0') {
						//TCP连接成功
						console.log('TCP连接成功=='+_self.channel);
					} else if (result.status == '1') {
						//TCP断开连接
						console.log('TCP断开连接=='+_self.channel);
					}
					if (result.receivedMsg) {
						//服务器返回信息
						console.log(_self.channel+':'+result.receivedMsg);
					}
					if (result.receivedHexMsg) {
						//Hex服务器返回信息
						console.log(_self.channel+':'+result.receivedHexMsg);
						let msg = result.receivedHexMsg;
						let sum = msg.length / 2;
						let arr = [];
						for (let k = 0; k < sum; k++) {
							let i = msg.substring(k * 2, k * 2 + 2);
							arr.push(i);
						}
						console.log(_self.channel+':'+arr);
						uni.showToast({
							title: result.receivedHexMsg,
							icon: 'none'
						});
					}
				}
			);
		},
		receiveTCP() {},
		disconnectTCP() {
			// TCPSocket.disconnect();
			TCPSocket.disconnect({ channel: _self.channel });
		},
		sendMsg() {
			console.log('sendMsg');
			TCPSocket.send({
				channel: _self.channel,
				charsetname:'GBK',
				message: '发送内容'
			});
		},
		sendHexMsg() {
			console.log('sendHexMsg');
			TCPSocket.sendBytes({
				channel: _self.channel,
				bytesMessage: JSON.stringify(_self.listBytes)
			});
		},
		testPermisson() {
			// dcRichAlert
			// 调用
			// TCPSocket.show(
			// 	{
			// 		position: 'bottom',
			// 		title: '提示信息',
			// 		titleColor: '#FF0000',
			// 		content:
			// 			"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
			// 		contentAlign: 'left',
			// 		checkBox: {
			// 			title: '不再提示',
			// 			isSelected: true
			// 		},
			// 		buttons: [
			// 			{
			// 				title: '取消'
			// 			},
			// 			{
			// 				title: '否'
			// 			},
			// 			{
			// 				title: '确认',
			// 				color: '#3F51B5'
			// 			}
			// 		]
			// 	},
			// 	result => {
			// 		switch (result.type) {
			// 			case 'button':
			// 				console.log('callback---button--' + result.index);
			// 				break;
			// 			case 'checkBox':
			// 				console.log('callback---checkBox--' + result.isSelected);
			// 				break;
			// 			case 'a':
			// 				console.log('callback---a--' + JSON.stringify(result));
			// 				break;
			// 			case 'backCancel':
			// 				console.log('callback---backCancel--');
			// 				break;
			// 		}
			// 	}
			// );
		},
		exchange() {
			uni.navigateTo({
				url: 'bIndex',
				animationType: 'pop-in',
				animationDuration: 300
			});
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
