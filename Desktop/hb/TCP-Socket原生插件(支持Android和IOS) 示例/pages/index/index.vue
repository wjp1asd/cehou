<template>
	<view class="content">
		<input style="width: 750rpx;" type="text" v-model="ip" placeholder="请输入IP" />
		<input style="width: 750rpx;" type="text" v-model="port" placeholder="请输入端口" />
		<input style="width: 750rpx;" type="text" v-model="message" placeholder="请输入发送内容" />
		<input style="width: 750rpx;" type="text" v-model="channel" placeholder="请输入信道编号" />
		<button @click="connectTCP()">连接</button>
		<button @click="sendMsg()">发送</button>
		<button @click="sendHexMsg()">发送字节数组</button>
		<button @click="sendHexMsg1()">联机</button>
		<button @click="sendHexMsg2()">当前</button>
		
		<button @click="sendHexMsg3()">历史</button>
		
		<button @click="disconnectTCP()">关闭</button>
		<button @click="exchange()">跳转B页面</button>
	</view>
</template>

<script>
//自定义
var _self;
export default {
	data() {
		return {
			ip: '192.168.1.1',
			port: '8899',
			message: '你好啊',
			channel: '1',
			channel1: '2',
			channel2: '3',
			channel3: '4',
			channel4: '5',
			
			conect1:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '08','00', '00', '00','6E', '02'],
			conect2:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '09','00', '00', '00','6E', '02'],
			conect3:['3A', '01', '00', '14', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '82','00', '04', '00','00', '00','00', '00','F0', '02'],
			conect4:['3A', '01', '00', '14', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '82','00', '04', '00','01', '00','00', '00','F1', '02'],
			conect5:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '08','00', '00', '00','6E', '02'],
			
		
			
			listBytes: ['02', '00', '01', '00', '00', '03']
		};
	},
	onLoad() {
		_self = this;
	
	},
	methods: {
		connectTCP() {
			this.$socket.init(_self.channel, _self.ip, _self.port);
			this.$socket.receivedStatus = function(channel, status) {
				//服务器返回状态
				console.log(channel, status);
				if (status == '0') {
					//TCP连接成功
					console.log('通道:' + channel + '连接成功');
				} else if (status == '1') {
					//TCP断开连接
					console.log('通道:' + channel + '断开连接');
				}
			};
			this.$socket.receivedMsgCallBack = function(channel, receivedMsg) {
				//服务器返回字符串
				console.log('通道:' + channel);
				console.log(receivedMsg);
			};
			this.$socket.receivedHexMsgCallBack = function(channel, receivedHexMsg) {
				//硬件服务器返回16进制数据
				console.log('通道:' + channel);
				console.log(receivedHexMsg);
				let msg = receivedHexMsg;
				let sum = msg.length / 2;
				let arr = [];
				for (let k = 0; k < sum; k++) {
					let i = msg.substring(k * 2, k * 2 + 2);
					arr.push(i);
				}
				console.log(arr.length);
				uni.showModal({
					content:JSON.stringify(arr)
				})
				if(arr.length==33){
					var str = arr[30] + arr[29] + arr[28] + arr[27];
					var ce = parseInt(str, 16) / 1000;
					this.xx = ce;
					uni.showModal({
						content: str+"当前测量值：" + ce + 'mm'
					})
					
				}
				
				
			};
		},
		sendMsg() {
			console.log('sendMsg');
			this.$socket.send(_self.channel, _self.message);
		},
		sendHexMsg() {
			console.log('sendHexMsg');
			this.$socket.sendBytes(_self.channel, JSON.stringify(_self.listBytes));
		},
		sendHexMsg1() {
			console.log('联机');
			this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect1));
		},
		sendHexMsg2() {
			console.log('当前');
			this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect3));
		},
		sendHexMsg3() {
			console.log('历史');
			this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect4));
		},
		disconnectTCP() {
			this.$socket.disconnect(_self.channel);
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
