<style>
	.title{
		text-align: center;
		font-size: 16px;
		
	}
</style>
<template>
	<view>

		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title" >管件ID：{{dd.id}}</view>
					</view>
			<view class="uni-form-item uni-column">
				<view class="title">管道名称：{{dd.ConName}}</view>
					</view>
			<view class="uni-form-item uni-column">
				<view class="title">管件名称：{{dd.NumBer}}</view>
					</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">管道规格：{{dd.GuandaoType}}</view>
					</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">管道级别：{{dd.GudandaoJibie}}</view>
					</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">管道材质：{{dd.Guandaocaizhi}}</view>
					</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">筒体厚度：{{dd.JiantiHoudu}}mm</view>
					</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">封头厚度：{{dd.FengtouHoudu}}mm</view>
					</view>
			<view class="uni-form-item uni-column">
				<view class="title">布点数量	：{{dd.BudianNum}}</view>
					</view>
			<view class="uni-form-item uni-column">
				<view class="title">使用单位	：{{dd.YonghuName}}</view>
					</view>
			<view class="uni-form-item uni-column">
				<view class="title">图片：</view>
				<image   :src="dd.Image"  mode="aspectFill"   style="margin-left: 5%;height: 300px;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			dd:{}	
			}
		},
		onLoad() {
			
			var item =uni.getStorageSync("temdata");
		
			if(item.id>0){
				
				if(item.state=="管道"){
				   this.getInfo1(item.GJNo);
				}else{
				   this.getInfo2(item.GJNo);	
				}
				
			}else{
			var key =uni.getStorageSync("keyword");
			if(key.length>0){
				var newstring= key.substring(0,2);
				
				if(newstring=="GD"){
				   this.getInfo1(key.substring(3,key.length));
				}
				if(newstring=="RQ"){
					
				   this.getInfo2(key.substring(3,key.length));
				}
				
			}	
				
			}
			
			
			
			
		},
		methods: {
			getInfo1:function(id){
				var that =this;
			uni.request({
			    url: uni.getStorageSync("backurl")+"/api.ashx?do=guandaoinfo&gid="+id, //仅为示例，并非真实接口地址。
			    data: {
			      
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res);
				
					
			      that.dd =res.data[0];
				  let newStr = that.dd.Image.replace("~/", "");
				  that.dd.Image =uni.getStorageSync("backurl")+newStr ;
				  
			    }
			});	
				
				
			},
			getInfo2:function(id){
				var that =this;
			uni.request({
			    url: uni.getStorageSync("backurl")+"/api.ashx?do=rongqiinfo&cid="+id, //仅为示例，并非真实接口地址。
			    data: {
			      
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res);
					uni.showModal({
						content: res
					})
					
			     that.dd =res.data[0];
			    
			    
			    }
			});	
				
				
			},
		}
	}
</script>

<style>

</style>
