<style>
	.input{
		width: 40%;
		margin-left: 2px;
	}
	
	.row{
	    display: flex;
		flex-direction: row;
	}
	.a{
		background-color: red;
	}
	.title{
		font-size: 15px;
		height: 45px;
		line-height: 45px;
	}
	button{
		font-size: 13px;
	}
</style>

<template>
	
			
	<view v-model="item" style="margin-left: 8px;">
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">任务单号：</view>
				<input class="uni-input"   disabled="true" v-model="item.RWNo" placeholder="请链接测厚仪读值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">  分单号：</view>
				<input class="uni-input" disabled="true" v-model="item.FNo"  placeholder="请链接测厚仪读值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"  >委托单号：</view>
				<input class="uni-input" disabled="true" v-model="item.WTNo"  placeholder="请链接测厚仪读值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"> 耦合剂：</view>
				<input class="uni-input" disabled="true" v-model="item.Oname"  placeholder="请链接测厚仪读值" />
				
				<!-- <picker @change="bindPickerChange" :value="index" :range="array">
			<view class="uni-input" v-model="item.Oname" >{{array[index]}}</view>
				</picker> -->
			</view>
		
			<view class="uni-form-item uni-column">
				<view class="title">管道/容器：</view>
				<input class="uni-input" disabled="true" v-model="item.state" placeholder="请链接测厚仪读值" />
			</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">图片：</view>
				<image   :src="item.WT_pho" v-if="item.WT_pho" mode="aspectFill" height="100px" style="margin-left: 5%;"></image>
			</view>
			<view class="uni-form-item uni-column">
			
				<view class="title">
				<text>测点编号1：{{item.Mpref1}}</text>  
				<text>测点编号2：{{item.Mpref1}}</text>
				
				</view>
					<!-- <input class="uni-input" v-model="item.Mpref1"  disabled="true" placeholder="请链接测厚仪读值" /> -->
			   	
			</view>
			<view class="uni-form-item uni-column">
				
				<view class="row">
				<view class="title">测点厚度1：</view>	
				<input class="uni-input" v-bind:disabled="p1" v-model="nowvalue1"  placeholder="请链接测厚仪读值" />
				<button @click="lock(1)" >{{p1?"锁定":"未锁定"}}
				</button>
				</view>
				
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号2：{{item.Mpref2}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref2"  disabled="true"   placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
			<view class="row">
				<view class="title">测点厚度2：</view>
			<input class="uni-input" v-bind:disabled="p2" v-model="nowvalue2"  placeholder="请链接测厚仪读值" />
			<button @click="lock(2)" >{{p2?"锁定":"未锁定"}}
			</button>
			</view>	
			
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号3：{{item.Mpref3}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref3" disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
			
			<view class="row">
					<view class="title">测点厚度3：</view>
			<input class="uni-input" v-bind:disabled="p3" v-model="nowvalue3"  placeholder="请链接测厚仪读值" />
			<button @click="lock(3)" >{{p3?"锁定":"未锁定"}}
			</button>
			</view>	</view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号4：{{item.Mpref4}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref4"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度4：</view>	
			<input class="uni-input" v-bind:disabled="p4" v-model="nowvalue4"  placeholder="请链接测厚仪读值" />
			<button @click="lock(4)" >{{p4?"锁定":"未锁定"}}
			</button>
			</view></view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号5：{{item.Mpref5}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref5"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度5：</view>	
			<input class="uni-input" v-bind:disabled="p5" v-model="nowvalue5"  placeholder="请链接测厚仪读值" />
			<button @click="lock(5)" >{{p5?"锁定":"未锁定"}}
			</button>
			</view></view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号6：{{item.Mpref6}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref6"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度6：</view>	
			<input class="uni-input" v-bind:disabled="p6" v-model="nowvalue6"  placeholder="请链接测厚仪读值" />
			<button @click="lock(6)" >{{p6?"锁定":"未锁定"}}
			</button>
			</view></view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号7：{{item.Mpref7}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref7"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
			
			<view class="row">
				<view class="title">测点厚度7：</view>	
			<input class="uni-input" v-bind:disabled="p7" v-model="nowvalue7"  placeholder="请链接测厚仪读值" />
			<button @click="lock(7)" >{{p7?"锁定":"未锁定"}}
			</button>
			</view></view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号8：{{item.Mpref8}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref8"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
				<view class="row">
					<view class="title">测点厚度8：</view>
				<input class="uni-input" v-bind:disabled="p8" v-model="nowvalue8"  placeholder="请链接测厚仪读值" />
				<button @click="lock(8)" >{{p8?"锁定":"未锁定"}}
				</button>
				</view>	</view>
			<view class="uni-form-item uni-column">
				<view class="title">测点编号9：{{item.Mpref9}}</view>
				<!-- <input class="uni-input"v-model="item.Mpref9"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
				<view class="row">
				<view class="title">测点厚度9：</view>	
				<input class="uni-input" v-bind:disabled="p9" v-model="nowvalue9"  placeholder="请链接测厚仪读值" />
				<button @click="lock(9)" >{{p9?"锁定":"未锁定"}}
				</button>
				</view></view>	<view class="uni-form-item uni-column">
				<view class="title">测点编号10：{{item.Mpref10}}</view>
				<!-- <input class="uni-input" v-model="item.Mpref10"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
			<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度10：</view>	
			<input class="uni-input" v-bind:disabled="p10" v-model="nowvalue10"  placeholder="请链接测厚仪读值" />
			<button @click="lock(10)" >{{p10?"锁定":"未锁定"}}
			</button>
			</view ></view>
<view class="uni-form-item uni-column">
				<view class="title">测点编号11：{{item.Mpref11}}</view>
				<!-- <input class="uni-input"v-model="item.Mpref11"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
	<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度11：</view>	
			<input class="uni-input" v-bind:disabled="p11" v-model="nowvalue11"  placeholder="请链接测厚仪读值" />
			<button @click="lock(11)" >{{p11?"锁定":"未锁定"}}
			</button>
			</view >
</view>
<view class="uni-form-item uni-column">
				<view class="title">测点编号12：{{item.Mpref12}}</view>
				<!-- <input class="uni-input"v-model="item.Mpref12"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
			</view>
	<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度12：</view>	
			<input class="uni-input" v-bind:disabled="p12" v-model="nowvalue12"  placeholder="请链接测厚仪读值" />
			<button @click="lock(12)" >{{p12?"锁定":"未锁定"}}
			</button>
			</view >
			</view>
	<view class="uni-form-item uni-column">
		<view class="title">测点编号13：{{item.Mpref13}}</view>
		<!-- <input class="uni-input"v-model="item.Mpref13"  disabled="true"  placeholder="请链接测厚仪读值" /> -->
	</view>
	<view class="uni-form-item uni-column">
				
			<view class="row">
			<view class="title">测点厚度13：</view>	
			<input class="uni-input" v-bind:disabled="p13" v-model="nowvalue13"  placeholder="请链接测厚仪读值" />
			<button @click="lock(13)" >{{p13?"锁定":"未锁定"}}
			</button>
			</view >
			</view>
	
	<view style="margin-bottom: 20px;height: 100px;"></view>
	<view style="display: flex;flex-direction: row;z-index:100;position: fixed;bottom: 10px;">
	<button class="btn-default" style="background-color:orange;width:50%;" @click="suu()">提交</button>
	<button class="btn-default" style="background-color:lawngreen;width:50%;margin-left: 10px;" @click="setwifi()">WIFI</button>
	<button class="btn-default" style="background-color:skyblue;width:50%;margin-left: 10px;" @click="setInfo()">信息</button>
	<button class="btn-default" style="background-color:cornsilk;width:50%;margin-left: 10px;" @click="ret()">复位</button>
	<button class="btn-default" style="background-color:orangered;width:50%;margin-left: 10px;" @click="ret1()">帮助</button>
	<!-- 输入框示例 -->
<uni-popup ref="inputDialog" type="dialog">
<uni-popup-dialog ref="inputClose" 
 mode="input" title="链接测厚仪网络"  v-model="wifiname"
placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
</uni-popup>		
	
	</view>
	</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			
			
			return {
			 item:{},
			 item1:{},
			 url:'api.ashx?do=task1',
			 array: ['中国', '美国', '巴西', '日本'],	
			 ip: '192.168.1.1',
			 port: '8899',
			 message: '你好啊',
			 nowvalue:0,
			  nowvalue1:0,
			   nowvalue2:0,
			    nowvalue3:0,
				 nowvalue4:0,
				  nowvalue5:0,
				   nowvalue6:0,
				    nowvalue7:0,
					 nowvalue8:0,
					nowvalue9:0,
					 nowvalue10:0, 
					 nowvalue11:0,
					  nowvalue12:0,
					  nowvalue13:0,
			 wifiname:"USR-232",
		     connected:false,
			 channel: '1',
			 conect1:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '08','00', '00', '00','6E', '02'],
			 conect2:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '09','00', '00', '00','6E', '02'],
			 conect3:['3A', '01', '00', '14', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '82','00', '04', '00','00', '00','00', '00','F0', '02'],
			 conect4:['3A', '01', '00', '14', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '82','00', '04', '00','01', '00','00', '00','F1', '02'],
			 conect5:['3A', '01', '00', '10', '00', '00', '00', '02','21', '31', '01', '00','01', '00', '01', '55','55', 'AA', 'AA', '08','00', '00', '00','6E', '02'],
			 listBytes: ['02', '00', '01', '00', '00', '03'],
			 p1:false,
			 p2:false,
			 p3:false,
			 p4:false,
			 p5:false,
			 p6:false,
			 p7:false,
			 p8:false,
			 p9:false,
			 p10:false,
			 p11:false,
			 p12:false,
			 p13:false,
			 
			}
		},
		onLoad() {
			
			var item =uni.getStorageSync("temdata");
			this.item=item;
			this.lk();
			var that=this;
			uni.startWifi({
				success: res => {
					console.log('Wi-Fiinit成功:', res);
					that.init=true;
					
				},
				fail: err => {
					console.error('Wi-Fiinit失败:', err);
				}
			});
			
			
			let newStr = item.WT_pho.replace("~/", "");
			item.WT_pho =uni.getStorageSync("backurl")+newStr ;
			// 获取上次数据
			//http://localhost:5918/api.ashx?do=task1&GJNO=20231212001&wrtime=2024-01-21%2021:0:39
			//http://localhost:5918/api.ashx?do=task1?GJNO=20231212001&wrtime=2024-02-21%2021:0:39
		},
		methods: {
		lk:function(){
			var that =this;
			// if(that.ssid.length==0){
			// 	return
			// }
			var xx=uni.getStorageSync("backurl")+this.url+"&GJNO="+this.item.GJNo+"&wrtime="+this.item.wrtime.slice(0,10);
	
		uni.request({
		    url: xx, //仅为示例，并非真实接口地址。
		    data: {
		    
		    },
		    header: {
		        'custom-header': 'hello' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res);
				if(res.data.length==0){
				  uni.showModal({
				  	content:"暂无匹配数据"
				  })
					return;
				}
				uni.showModal({
					content:res.data[0]
				})
				that.item1 =res.data[0];
				uni.showModal({
					content:that.item1
				})
		}
		});			
			
		},
			dialogInputConfirm(val) {
							uni.showLoading({
								title: '3秒后会关闭'
							})
			
							setTimeout(() => {
								uni.hideLoading()
								console.log(val)
								this.value = val
								// 关闭窗口后，恢复默认内容
								
							console.log('选中的WiFi:', val);
							uni.connectWifi({
								SSID: val,
								password: '',
								success: res => {
									console.log('Wi-Fi连接成功:', res);
									uni.showModal({
										content:"连接成功"
									})
								},
								fail: err => {
									uni.showModal({
										content:"连接失败"+err.errMsg
									})
								}
							});
								
								
								this.$refs.inputDialog.close()
							}, 3000)
						},
			updatevalue:function(){
				if(this.p1==false){
					this.nowvalue1=this.nowvalue;
					
				}
				if(this.p2==false){
					this.nowvalue2=this.nowvalue;
					
				}
				if(this.p3==false){
					this.nowvalue3=this.nowvalue;
					
				}
				if(this.p4==false){
					this.nowvalue4=this.nowvalue;
					
				}
				if(this.p5==false){
					this.nowvalue5=this.nowvalue;
					
				}
				if(this.p6==false){
					this.nowvalue6=this.nowvalue;
					
				}
				if(this.p7==false){
					this.nowvalue7=this.nowvalue;
					
				}
				if(this.p8==false){
					this.nowvalue8=this.nowvalue;
					
				}
				if(this.p9==false){
					this.nowvalue9=this.nowvalue;
					
				}
				if(this.p10==false){
					this.nowvalue10=this.nowvalue;
					
				}
				if(this.p11==false){
					this.nowvalue11=this.nowvalue;
					
				}
				if(this.p12==false){
					this.nowvalue12=this.nowvalue;
					
				}
				if(this.p13==false){
					this.nowvalue13=this.nowvalue;
					
				}
				
				
			},
			setInfo:function(){
				uni.navigateTo({
					url:"../detail/detail"
				})
			},
			
			lock:function(index){
				
				switch(index){
				case 1:
					this.p1=!this.p1;
				
				break;	
				case 2:
					this.p2=!this.p2;
				break;	
					case 3:
						this.p3=!this.p3;
					break;	
					case 4:
						this.p4=!this.p4;
					break;	
					case 5:
						this.p5=!this.p5;
					break;	
					case 6:
						this.p6=!this.p6;
					break;	
					case 7:
						this.p7=!this.p7;
					break;	
					case 8:
						this.p8=!this.p8;
					break;	
					case 9:
						this.p9=!this.p9;
					break;	
					case 10:
						this.p10=!this.p10;
					break;	
					case 11:
						this.p11=!this.p11;
					break;	
					case 12:
						this.p12=!this.p12;
					break;	
					case 13:
						this.p13=!this.p13;
					break;	
				
				}
				
			},
			showMsg(msg){
				uni.showModal({
					content:msg
				})
				
			},
			ret:function(e){
				this.nowvalue1=0;
				this.nowvalue2=0;
				this.nowvalue3=0;
				this.nowvalue4=0;
				this.nowvalue5=0;
				this.nowvalue6=0;
				this.nowvalue7=0;
				this.nowvalue8=0;
				this.nowvalue9=0;
				this.nowvalue10=0;
				this.nowvalue11=0;
				this.nowvalue12=0;
				this.nowvalue13=0;
				this.p1=false;
				this.p2=false;
				this.p3=false;
				this.p4=false;
				this.p5=false;
				this.p6=false;
				this.p7=false;
				this.p8=false;
				this.p9=false;
				this.p10=false;
				this.p11=false;
				this.p12=false;
				this.p13=false;
				this.showMsg('复位成功');
				this.disconnectTCP();
			},
			ret1:function(){
				this.showMsg("1.确保测厚仪开启按钮WIFI，PDA链接到测厚仪网络下，显示连接成功，表示可以测点。"+
				"2.信息查看当前管道/容器信息"+"3.复位清除当前信息");
			},
			connectTCP() {
				var _self = this;
				var that =this;
				this.$socket.init(_self.channel, _self.ip, _self.port);
				this.$socket.receivedStatus = function(channel, status) {
					//服务器返回状态
					console.log(channel, status);
					if (status == '0') {
						//TCP连接成功
						that.showMsg('连接成功');
						that.connected=true;
					} else if (status == '1') {
						//TCP断开连接
						//that.showMsg('连接断开');
						that.connected=false;
						//console.log('通道:' + channel + '断开连接');
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
					// uni.showModal({
					// 	content:JSON.stringify(arr)
					// })
					if(arr.length==33){
						var str = arr[30] + arr[29] + arr[28] + arr[27];
						var ce = parseInt(str, 16) / 1000;
						that.nowvalue =""+ ce;
						
						console.log(that.nowvalue)
						that.updatevalue()
						
						
					}
					
					
				};
			},
			sendMsg() {
				var _self = this;
				console.log('sendMsg');
				this.$socket.send(_self.channel, _self.message);
			},
			sendHexMsg() {
				var _self = this;
				console.log('sendHexMsg');
				this.$socket.sendBytes(_self.channel, JSON.stringify(_self.listBytes));
			},
			sendHexMsg1() {
				var _self = this;
				console.log('联机');
				this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect1));
			},
			sendHexMsg2() {
				var _self = this;
				console.log('当前');
				this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect3));
			},
			sendHexMsg3() {
				var _self = this;
				console.log('历史');
				this.$socket.sendBytes(_self.channel, JSON.stringify(_self.conect4));
			},
			disconnectTCP() {
				var _self = this;
				this.$socket.disconnect(_self.channel);
			},
			suu:function(){
				var that=this;
				uni.request({
				    url: uni.getStorageSync("backurl")+"/api.ashx?do=upcedian", //仅为示例，并非真实接口地址。
				    data: {
				      id:this.item.ID,
					  p1:this.nowvalue1,
					  p2:this.nowvalue2,
					  p3:this.nowvalue3,
				      p4:this.nowvalue4,
					  p5:this.nowvalue5,
					  p6:this.nowvalue6,
					  p7:this.nowvalue7,
					  p8:this.nowvalue8,
					  p9:this.nowvalue9,
					  p10:this.nowvalue10,
					  p11:this.nowvalue11,
					  p12:this.nowvalue12,
					  p13:this.nowvalue13,
					  
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res);
						uni.showModal({
							content: res.data.message
						})
						
				      
				    }
				});
				
			},
			
			connectWifi(wifi) {
				console.log('选中的WiFi:', wifi);
				
				var that=this;
				uni.connectWifi({
					SSID: wifi,
					password: '',
					success: res => {
						console.log('Wi-Fi连接成功:', res);
					},
					fail: err => {
						that.showMsg('Wi-Fi连接失败'+ err.errMsg);
						console.error('Wi-Fi连接失败:', err);
					}
				});
			},
			 
			 
			//获取当前连接的wifi
			getConnectedWifi() {
				var that=this
				uni.getConnectedWifi({
					success: res => {
					var	connectedWifi = res.wifi; //当前连接的wifi的信息
						//console.log(connectedWifi, "connectedWifi")
						this.connectedWifiSSID = res.wifi.SSID;
						console.log('已连接Wi-Fi:', res);
						console.log('已连接Wi-Fi的SSID:', this.connectedWifiSSID);
						this.wifiname=res.wifi.SSID;
						this.connected=true;
					},
					fail: err => {
						that.showMsg('Wi-Fi连接失败'+ err.errMsg);
						console.error('获取已连接的Wi-Fi信息失败:', err);
						this.connected=false;
					}
				});
			},
			
			setwifi:function(){
				var that=this;
				if(this.getConnectedWifi()){
				that.connectTCP();
				   that.sendHexMsg1();
				setInterval(function(){
					that.sendHexMsg2();
					
				},500);	
					
				}else
				{
						this.$refs.inputDialog.open();
						
				}
				
			},
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.detail.value)
			            this.index = e.detail.value
			        },
		}
	}
</script>

<style>
	.title{
	font-size: 18px;
	}
.uni-input{
	background-color: ghostwhite;
	height: 45px;
	border-radius: 2%;
	border: 1px solid ;
}
</style>
