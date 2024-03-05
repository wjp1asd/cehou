<template>
	<view >
				<uni-list @change="radioChange" v-model="yujingcheck">
					<view class="uni-list-cell uni-list-cell-pd"  v-model="yujingcheck" v-for="item in yujingcheck" :key="item.value">
						<view style="margin-left:40px;">
							<uni-list-item :value="item.value" :checked="item.checked" />
						{{item.name}}
						</view>
						
					</view>
				</uni-list>
	<button style="background-color: orange;width: 80%;margin-top: 50px;" @click="submit">保存</button>
	<button style="background-color: skyblue;width: 80%;margin-top: 20px;" @click="refr">刷新</button>
	
	</view>
		
</template>

<script>
	export default {
		data() {
			return {
			 yujingcheck:[
					],
		     items:[]
			};
		},
		
		onLoad() {
			uni.showLoading({
				title:"获取信息"
			})
			var doo=this;
			
			uni.request({
				url:uni.getStorageSync("backurl")+"api.ashx?do=yujing",
				success(res) {
					var cje=[];
					for (var i = 0; i < res.data.length; i++) {
						var cjeitem={};
						 cjeitem.value=res.data[i].ID;
					     cjeitem.name=res.data[i].ystandard;
						 cje[i]=cjeitem;
					}
				doo.yujingcheck=cje;
				doo.items=res.data;
			    uni.setStorageSync('yujing',doo.yujingcheck)
			
				
											  
				}	
				}
			)
			
			 uni.hideLoading()
		},
		methods: {
			submit:function(){
				uni.showLoading({
					title:"保存成功！"
				})
				
				setTimeout(()=>{uni.navigateBack()},2000)
				
			},
			refr:function(){
			uni.showLoading({
				title:"刷新信息"
			})
			
			var doo=this;
			
			uni.request({
				url:uni.getStorageSync("backurl")+"api.ashx?do=yujing",
				success(res) {
					var cje=[];
					for (var i = 0; i < res.data.length; i++) {
						var cjeitem={};
						 cjeitem.value=res.data[i].ID;
					     cjeitem.name=res.data[i].ystandard;
						 cje[i]=cjeitem;
					}
				doo.yujingcheck=cje;
				doo.items=res.data;
			
			
				
											  
				}	
				}
			)
			
			 uni.hideLoading()
				
			},
			 radioChange: function(evt) {
			           uni.showModal({
			           	content:evt.detail.value
			           }) 
			            }}
			       
	}
</script>

<style lang="scss">

</style>
