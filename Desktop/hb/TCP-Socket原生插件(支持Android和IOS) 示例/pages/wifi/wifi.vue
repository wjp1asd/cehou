<style>
	.row{
	    display: flex;
		flex-direction: row;
	}
</style>
<template>
	<view>
		<view class="row">
			<uni-easyinput type="text" v-model="ssid" style="width: 80%;" placeholder="请输入姓名" />
			<uni-icons type="paperplane" size="30"></uni-icons>
			
		</view>
		<view v-if="wifiList.length==0">
			
			
			<button @click="getWifiList()">查找测厚仪(确保测厚仪上WIFI打开)</button>
		</view>
		<uni-list v-model="wifiList">
			<label class="uni-list-cell uni-list-cell-pd"  v-model="wifiList" v-for="item in wifiList" :key="item.value">
				<view style="margin:20px;margin-left:40px;">
					<uni-list-item :value="item.value" :checked="item.checked" />
				{{item.SSID}}
				</view>
				
			</label>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				init:false,
				ssid:"USR-232",
				connectedWifi:"",
				wifiList: [], // 存储WiFi列表
				connectedWifiSSID: {}
			};
		},
 
		onLoad() {
			var that=this;
			uni.startWifi({
				success: res => {
					console.log('Wi-Fiinit成功:', res);
					that.init=true;
					that.getWifiList();
				},
				fail: err => {
					console.error('Wi-Fiinit失败:', err);
				}
			});
			uni.showModal({
				content:JSON.stringify(this.wifiList)
			})
			//this.getConnectedWifi();
			
		},
 
 
		methods: {
			getWifiList() {
					var that=this;
				if(this.init==false){
				uni.startWifi({
					success: res => {
						console.log('Wi-Fiinit成功:', res);
						that.init=true;
						
					},
					fail: err => {
						console.error('Wi-Fiinit失败:', err);
					}
				});
				} 
				uni.getWifiList({
					success: res => {
						
						uni.onGetWifiList((res) => {
							that.wifiList = res.wifiList;
							console.log('this.wifiList', that.wifiList);
 
							this.wifiList.sort(function(a, b) {
								if (a.SSID === connectedWifi.SSID) {
									return -1;
								} else if (b.SSID === connectedWifi.SSID) {
									return 1;
								} else {
									return 0;
								}
							})
 
							// 过滤同名WiFi信号
							let filterList = this.wifiList.reduce(function(result, item) {
								let index = result.findIndex(function(v) {
									return v.SSID == item.SSID;
								});
								if (index < 0) {
									result.push(item);
								} else if (item.signalStrength > result[index]
									.signalStrength) {
									result[index] = item;
								}
								return result;
							}, []);
							console.log("filterList", filterList);
							this.wifiList = filterList;
						});
					},
					fail: err => {
						console.error('获取WiFi列表失败:', err);
					}
				});
			},
 
 
			// 点击连接某个 Wi-Fi
			connectWifi(wifi) {
				console.log('选中的WiFi:', wifi);
				uni.connectWifi({
					SSID: wifi.SSID,
					password: 'your_password',
					success: res => {
						console.log('Wi-Fi连接成功:', res);
					},
					fail: err => {
						console.error('Wi-Fi连接失败:', err);
					}
				});
			},
 
 
			//获取当前连接的wifi
			getConnectedWifi() {
				uni.getConnectedWifi({
					success: res => {
						connectedWifi = res.wifi; //当前连接的wifi的信息
						console.log(connectedWifi, "connectedWifi")
						this.connectedWifiSSID = res.wifi.SSID;
						console.log('已连接Wi-Fi:', res);
						console.log('已连接Wi-Fi的SSID:', this.connectedWifiSSID);
					},
					fail: err => {
						console.error('获取已连接的Wi-Fi信息失败:', err);
					}
				});
			}
 
 
		}
	};
</script>

<style>

</style>
