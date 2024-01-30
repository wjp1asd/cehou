<style>
	.t-c{
		border: 1px solid grey;
		text-align: center;
	}
</style>
<template>
	<view style="margin-left: 20px;">
		
		<view id="1" style="width: 90%;">
		<view class="uni-title uni-common-pl " @click="resg">机构选择(点击)</view>
				<view class="uni-list">
					<view class="uni-list-cell ">
						
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input t-c" >{{array[index]}}</view>
							</picker>
						</view>
					</view>
				</view>
		</view>	
		<uni-title
		>登录</uni-title>
		<uni-forms ref="form" :modelValue="formData"style="margin-left:50px;">
			<uni-forms-item label="登录名:" name="name" >
				<uni-easyinput type="text" v-model="formData.name" style="width: 80%;" placeholder="请输入手机号" />
			
			</uni-forms-item>
			<uni-forms-item label="密码:" name="pass" class="lef">
				<uni-easyinput type="text" v-model="formData.pass" style="width: 80%;" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button style="background-color: orange;width: 80%;" @click="submit">登录</button>
		<text style="margin-left:50px;position: absolute;bottom: 20px;">注：登录前需要保证后台地址通讯成功！{{backurl}}</text>
	</view>
	
</template>
<script>
export default {
	data() {
		return {
			// 表单数据
			url:'api.ashx?do=jigou',
			backurl:"",
			array: [],
			index: 0,
			Jname:"",
			formData: {
				name: '',
				pass: ''
			},
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入手机号',
						},
						{
							minLength: 3,
							maxLength: 11,
							errorMessage: '手机号长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对email字段进行必填验证
				email: {
					rules: [{
						format: 'email',
						errorMessage: '请输入正确的邮箱地址',
					}]
				}
			}
		}
	},
	onLoad() {
		var backurl=uni.getStorageSync("backurl");
		this.backurl=backurl;
		if(backurl.length>0){
		
		this.getCom()
			
		}else{
			
			uni.showModal({
				content:"当前后台地址不存在",
				confirmText:"前往设置",
				success(res) {
					console.log(res)
					if(res.confirm==true){
						
						uni.navigateTo({
							url:"/pages/setting/setting"
						})
					}
				}
			})
		}
	
	},
	methods: {
		resg(){
			this.getCom();
		}
		,
		getCom:function(e){
		var that =this;
		uni.request({
		    url: uni.getStorageSync("backurl")+this.url, //仅为示例，并非真实接口地址。
		    data: {
		      
		    },
		    header: {
		        'custom-header': 'hello' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res);
				var dd=[];
				for (let i in res.data) {
					dd.push(res.data[i].DEPARTNAME);
				}
		      that.array =dd;
			  that.Jname=that.array[0];
		    }
		});			
			
		},
		  bindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.detail.value)
		            this.index = e.detail.value
					this.Jname=this.array[this.index];
					uni.showModal({
						content:this.Jname
					})
		        },
				
		submit() {
			var name =this.formData.name;
			var pass =this.formData.pass;
			var Jname =this.Jname;
			
			if(name.length>0&&pass.length>0&&Jname.length>0){
				if(uni.getStorageSync("backurl").length>0){
					
					uni.request({
					    url: uni.getStorageSync("backurl")+"api.ashx?do=login&userid="
						+name+"&password="+pass+"&Jname="+Jname, //仅为示例，并非真实接口地址。
					   	method:"GET",
					    
					    success: (res) => {
						
					      this.data =res.data;
						  uni.showModal({
						  	content:this.data.message
						  })
						  if(this.data.message=="登录成功"){
							  uni.setStorageSync("username",name);
							  uni.reLaunch({
							  	url:"../main/main"
							  })
							  
						  }
						 
					    }
					});		
					
					
				}else{
					
					uni.showModal({
						content:"当前后台地址不存在",
						confirmText:"前往设置",
						success(res) {
							console.log(res)
							if(res.confirm==true){
								
								uni.navigateTo({
									url:"/pages/setting/setting"
								})
							}
						}
					})
				}
				
				
			}
		}
	}
}
</script>

<style lang="scss">
@import '../../common/uni-ui.scss';
</style>
