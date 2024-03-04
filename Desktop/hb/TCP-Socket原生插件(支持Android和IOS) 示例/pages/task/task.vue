<style>
	.f{
		position: fixed;
		z-index: 10;
		width: 87%;
	}
	.ff{
		position: absolute;
		right: 12px;
		top:50px;
	}
	.ff0{
		position: absolute;
		right: 52px;
		top:20px;
	}
	.ff1{
		position: absolute;
		right: 12px;
		top:20px;
	}
	.row{
	    display: flex;
		flex-direction: row;
		height:50px;
	}
</style>
<template>
	<view>
		<uni-card class="row f">
		<uni-easyinput type="text" v-model="ssid"  style="width: 95%;" placeholder="请输入批次号|类型|委托" />
		<uni-icons type="scan" size="30" class="ff1" @click="scan"></uni-icons>	
		<uni-icons type="search" size="30" class="ff0" @click="lk"></uni-icons>
			
			
		</uni-card>
		<view class="uni-container" style="margin-top: 5px;">
			<uni-list v-for="(item, index) in data"  >
				
			
			<view @click="showff(item)" :key="index" >
			<uni-card  >
				ID：{{ item.ID}}
				类型：{{item.state}} 编号：{{item.GJNo}}
				<br>
				委托单号：{{item.WTNo}}
				<br>
				任务单号：{{ item.RWNo}}
				<br>
				批次号：{{item.FNo}}
				<br>
				更新时间：{{item.wrtime}}
				<br>
				检验人：{{item.Jianyanren}}
				<br>
				<uni-icons type="paperplane" size="30" class="ff" ></uni-icons>
			</uni-card>	
			</view>	
						
				
				
			</uni-list>
			
		</view>	
	</view>
</template>

	
	
	
	

	


<script>
	export default {
		components: {},
		data() {
			return {
				// 数据表名
				url:'api.ashx?do=testadmin',
				url1:'api.ashx?do=task&type=容器',
				url2:'api.ashx?do=task&type=管道',
				field: 'ConName,FengtouHoudu,ID,JiantiHoudu,YonghuName,cpid,cptype',
				data:{},
				ssid:""
				
			};
		},
		onLoad(e) {
			
			
			this.ssid =e.gid
			
		
		 this.lk();
		},
		methods: {
			
			lk:function(){
				var that =this;
				// if(that.ssid.length==0){
				// 	return
				// }
			uni.request({
			    url: uni.getStorageSync("backurl")+this.url, //仅为示例，并非真实接口地址。
			    data: {
			      key:that.ssid
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
						that.data =res.data;
	     for (var i = 0; i < res.data.length; i++) {
	     	var str= res.data[i].wrtime;
			//res.data[i].wrtime1 =str;
		    str=str.replace("/Date(","");
			str= str.replace("000)/","");
			var date = new Date(str * 1000);  // 参数需要毫秒数，所以这里将秒数乘于 1000
			var Y = date.getFullYear() + '-';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			var D = date.getDate() + ' ';
			var h = date.getHours() + ':';
			var m = date.getMinutes() + ':';
			var s = date.getSeconds();
			res.data[i].wrtime1 =date;
			res.data[i].wrtime =Y+M+D+h+m+s;
			//document.write(Y+M+D+h+m+s)
			
			
			//res.data[i].wrtime =dateString;
	     }
			      
			    }
			});			
				
			},
			showff:function(e){
			// 验证 检验人身份
			
			var user =uni.getStorageSync("user");
			uni.setStorageSync("temdata",e);
			if(e.Jianyanren!=JSON.parse(user).usrname){
				
			uni.showModal({
				content:"检验人身份不符合",
				
			})	
			//return;
			}else{
			
			uni.navigateTo({
				url:"../cedian/cedian"
			})		
			}
			
			
				
			},
			scan:function(e){
				var that =this;
				uni.scanCode({
					success: function (res) {
							
							that.ssid=res.result;
							uni.showModal({
								content:res.result
							})
							console.log('条码内容：' + res.result);
							
						}
				})
			}
			/**
			 * 切换商品列表布局方向
			 */
			
	}
	}
</script>

<style lang="scss">
	@import '../../common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	
	
</style>
