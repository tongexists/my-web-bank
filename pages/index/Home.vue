<template>
	<view class="container">
		<view class="search_bar">
			<view class="message  iconfont icon-scan search_bar_item"></view>
			<view class="search search_bar_item">
				<text class="iconfont icon-search"></text>
				<input class="input" type="text" :value="searchValue">
			</view>
			<view class="earphone  iconfont icon-yxy-earphone-lined search_bar_item"></view>
			<view class="message iconfont icon-message search_bar_item"></view>
		</view>

		<view class="content">
			<view class="top_menu">
				<view class="one_menu" v-for="item in topMenuList" :key="item.title">
					<view :class="['iconfont', item.iconClassName]"></view>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
			<view class="main_menu_wrapper">
				<view class="main_menu" v-for="(i, idx) in mainMenuList" :key="idx">
					<view class="one_menu" v-for="item in i" :key="item.title">
						<view :class="['iconfont', item.iconClassName]"></view>
						<view class="title">{{item.title}}</view>
					</view>
				</view>
			</view>
			<view class="message_line">
				<view class="left">
					<view class="loudspeaker iconfont icon-yinliang"></view>
					<view class="word"> 头条</view>
				</view>
				<view class="right">【热门】英伟达概念大火，哪些公募早有...</view>
			</view>
			<view class="swiper_wrapper">
				<swiper class="swiper" circular :indicator-dots="false" :autoplay="true"
					:interval="5000" :duration="500">
					<swiper-item class="item" v-for="(i,idx) in swiperList" :key="idx.imageSrc">
							<image class="img" :src="i.imageSrc"></image>							
					</swiper-item>
				</swiper>
			</view>
			<view class="quick_loan_container">
				<view class="quick_loan_wrapper">
					<view class="top">
						<view class="lighting_loan">
							闪电贷
						</view>
						<view class="quick_loan">
							极速放款
						</view>
					</view>
					<view class="bottom">
						<view class="left">
							<view class="text">
								最高可借贷款
							</view>
							<view class="number">
								300,000.00
							</view>
						</view>
						<view class="right">
							获得额度
						</view>
					</view>
				</view>
				
			</view>
			<view class="wealth_carefully_selected">
				<view class="top_line">
					<view class="left">
						财富精选
					</view>
					<view class="right">
						更多
					</view>
				</view>
				<view class="middle">
					<view class="left">
						<view class="one">
							<view class="up">可实时到账</view>
							<view class="down">日日宝</view>
						</view>
						<view class="two">
							<view class="up">
								2.56
							</view>
							<view class="down">最高七日年化</view>
						</view>
						<view class="three">
							<view class="up">超102万人已购买</view>
							<view class="down">去体验</view>
						</view>
					</view>
					<view class="right">
						<view class="top">
							<view class="one">
								<view class="l">稳健低波</view>
								<view class="r">代销</view>
							</view>
							<view class="two">
								月月宝 丰和30天持有
							</view>
							<view class="three">
								<view class="l">成立以来年化</view>
								<view class="r">2.79%</view>
							</view>
							
						</view>
						<view class="bottom">
							<view class="one">
								<view class="l">稳健低波</view>
								<view class="r">代销</view>
							</view>
							<view class="two">
								季季宝 鑫得利3个月
							</view>
							<view class="three">
								业务比较基准 2.60%-2.80%
							</view>
						</view>
					</view>
				</view>
				<view class="bottom_line">
					业务比较基准不代表产品的未来表现和实际收益。季季宝...
				</view>
			</view>
			<view class="featured_list_wrapper">
				<view class="top_line">
					<view class="left">
						特色榜单
					</view>
					<view class="right">
						更多
					</view>
				</view>
				<view class="featured_list">
					<view class="one block">
						<view class="left iconfont icon-medal">长期<br>绩优</view>
						<view class="right">
							<view class="top">
								5年长跑尖子生
							</view>
							<view class="bottom">
								<view class="l">近5年累计收益率高达</view>
								<view class="r">269.4%</view>
							</view>
						</view>
					</view>
					<view class="two line one-pixel-line"></view>
					<view class="three block">
						<view class="left iconfont icon-medal">择时<br>不愁</view>
						<view class="right">
							<view class="top">
								绩优定投榜
							</view>
							<view class="bottom">
								<view class="l">近3年定投收益率高达</view>
								<view class="r">64.1%</view>
							</view>
						</view>
					</view>
					<view class="four line one-pixel-line" ></view>
					<view class="five block">
						<view class="left iconfont icon-medal">固收<br>优选</view>
						<view class="right">
							<view class="top">
								稳健省心好选择
							</view>
							<view class="bottom">
								<view class="l">历史3个月盈利概率</view>
								<view class="r">99%</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				swiperList: [
					{
						imageSrc: '../../static/image/home_swipe_1.png',
						text: '1'
					},
					{
						imageSrc: '../../static/image/home_swipe_2.png',
						text: '2'
					},
					{
						imageSrc: '../../static/image/home_swipe_1.png',
						text: '3'
					},
					{
						imageSrc: '../../static/image/home_swipe_2.png',
						text: '4'
					}
				],
				searchValue: '',
				topMenuList: [{
						iconClassName: 'icon-qianbao',
						title: '朝朝宝',
						iconUnicode: '&#xe625;'
					},
					{
						iconClassName: 'icon-qian',
						title: '收支明细',
						iconUnicode: '&#xe662;'
					},
					{
						iconClassName: 'icon-zhuanzhang',
						title: '转账',
						iconUnicode: '&#xe663;'
					},
					{
						iconClassName: 'icon-yidongyunkongzhitaiicon01',
						title: '总览',
						iconUnicode: '&#xe73f;'
					},
				],
				mainMenuList: [
					[{
							iconClassName: 'icon-qianbao',
							title: '申请信用卡',
							iconUnicode: '&#xe625;'
						},
						{
							iconClassName: 'icon-qian',
							title: '他行卡转入',
							iconUnicode: '&#xe662;'
						},
						{
							iconClassName: 'icon-zhuanzhang',
							title: '借钱',
							iconUnicode: '&#xe663;'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '城市服务',
							iconUnicode: '&#xe73f;'
						},
						{
							iconClassName: 'icon-qian',
							title: '热门活动',
							iconUnicode: '&#xe662;'
						}
					],
					[{
							iconClassName: 'icon-zhuanzhang',
							title: '养老金融',
							iconUnicode: '&#xe625;'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '话费流量',
							iconUnicode: '&#xe662;'
						},
						{
							iconClassName: 'icon-zhuanzhang',
							title: '理财产品',
							iconUnicode: '&#xe663;'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '银行卡',
							iconUnicode: '&#xe73f;'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '全部',
							iconUnicode: '&#xe662;'
						},
					]
				]
			}
		},
		
		mounted() {
			
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	@import url("../../static/css/variables.less");
	.container {
		background-color: @main-color;
		width: 100%;
		height: 100%;

		.search_bar {
			background-color: @main-color;
			position: fixed;
			top: 0;
			z-index: 3;
			height: 117/@rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.iconfont {
				color: white;
				font-size: 51/@rpx;
			}

			.search {
				width: 635/@rpx;
				height: 82/@rpx;
				border: 1rpx solid #eee;
				border-radius: 50/@rpx;
				display: flex;
				align-items: center;
				padding: 0 35/@rpx;

				.icon-search {}

				.input {
					outline-style: none;
					font-size: 36/@rpx;
					color: white;
					margin-left: 10/@rpx;
					flex-grow: 1;
					background: rgba(0, 0, 0, 0);
					border: rgba(0, 0, 0, 0);
				}
			}
		}

		.content {
			margin-top: 117/@rpx;
			width: 100%;
			flex-grow: 1;

			.top_menu {
				height: 215/@rpx;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				color: white;

				.one_menu {
					display: flex;
					flex-direction: column;
					align-items: center;

					.iconfont {
						font-size: 94/@rpx;
					}

					.title {
						margin-top: 33/@rpx;
						font-size: 36/@rpx;
					}
				}
			}

			.main_menu_wrapper {
				background: white;
				border-radius: 20/@rpx 20/@rpx 0 0;
				width: 100%;
				height: 440/@rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.main_menu {
					display: flex;
					justify-content: space-around;
					align-items: center;

					.one_menu {
						width: 180/@rpx;
						height: 140/@rpx;
						display: flex;
						flex-direction: column;
						align-items: center;

						.iconfont {
							font-size: 75/@rpx;
						}

						.title {
							font-size: 33/@rpx;
						}
					}
				}
			}

			.message_line {
			
				background: white;
				display: flex;
				align-items: center;
				padding: 0 10/@rpx;

				.left {
					display: flex;
					align-items: center;
					margin-left: 30/@rpx;
					margin-right: 30/@rpx;
					font-size: 36/@rpx;
					border-radius: 30/@rpx;
					background: @light-background-color;
					padding: 10/@rpx 20/@rpx;

					.loudspeaker {
						margin-right: 14/@rpx;
					}
				}

				.right {
					font-size: 42/@rpx;
				}
			}
			.swiper_wrapper {
				background: white;			
				padding-top: 43/@rpx;
				.swiper {
					height: 250/@rpx;
					.item {
							.img{
								display: block;
								margin: 0 auto;
								width: 980/@rpx;
								height: 240/@rpx;
							}
					}
				}

			}
			.quick_loan_container {
				background: @light-background-color;
				padding: 40/@rpx 40/@rpx;			
				.quick_loan_wrapper{
					margin: auto;
					width: calc(100vw - 80/@rpx);				
					background: white;					
					border-radius: 50/@rpx;		
					padding: 46/@rpx 43/@rpx 70/@rpx 43/@rpx;										
					.top {
						height: 51/@rpx;
						display: flex;
						margin-bottom: 68/@rpx;
						.lighting_loan{
							font-size: 40/@rpx;
						}
						.quick_loan{
							margin-left: 20/@rpx;
							font-size: 30/@rpx;							
						}
					}
					.bottom{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left {
							.text{
								font-size: 36/@rpx;
							}
							.number{
								color: @main-color;
								font-size: 63/@rpx;
							}
						}
						.right{
							height: 86/@rpx;
							width: 250/@rpx;
							border: 1rpx solid black;
							border-radius: 80/@rpx;
							font-size: 39/@rpx;
							// text-align: center;
							// line-height: 86/@rpx;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
				
			}
			.wealth_carefully_selected{
				padding: 64/@rpx 36/@rpx 0 36/@rpx;
				background: @light-background-color;
				.top_line{
					display: flex;
					justify-content: space-between;
					.left{
						font-size: 50/@rpx;
					}
					.right{
						font-size: 36/@rpx;
						color: @gray;
					}
				}
				.middle{
					margin-top: 40/@rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						background: #fff3eb;
						width: 477/@rpx;
						height: 608/@rpx;
						padding: 41/@rpx 0 39/@rpx 40/@rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.one{
							.up{
								font-size: 43/@rpx;
							}
							.down{
								margin-top: 23/@rpx;
								font-size: 35/@rpx;
							}
						}
						.two {
							.up{
								color: @main-color;
								font-size: 53/@rpx;
								&::after{
									content: '%';
									color: @light-main-color;
									font-size: 37/@rpx;
								}
								
							}
							.down{
								margin-top: 24/@rpx;
								font-size: 33/@rpx;
							}
						}
						.three{
							.up{
								font-size: 33/@rpx;
							}
							.down{
								border-radius: 40/@rpx;
								margin-top: 30/@rpx;
								background-color: @main-color;
								color: white;
								width: 204/@rpx;
								height: 85/@rpx;
								font-size: 38/@rpx;
								// text-align: center;
								// line-height: 85/@rpx;
								display: flex;
								justify-content: center;
								align-items: center;
							}
						}
					}
					.right{						
						width: 477/@rpx;
						height: 608/@rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.top{
							background: white;
							border-radius: 30/@rpx;
							height: 286/@rpx;
							padding: 41/@rpx 0 39/@rpx 40/@rpx;
							.one{
								display: flex;
								align-items: center;
								.l{
									font-size: 38/@rpx;
								}
								.r{
									margin-left: 15/@rpx;
									width: 67/@rpx;
									height: 38/@rpx;
									font-size: 27/@rpx;	
									border-radius: 20/@rpx;
									color: @gray;
									border: 1rpx solid @gray;
									// text-align: center;
									// line-height: 38/@rpx;
									display: flex;
									justify-content: center;
									align-items: center;
								}
							}
							.two{
								margin-top: 24/@rpx;
								font-size: 31/@rpx;	
							}
							.three {
								margin-top: 63/@rpx;
								display: flex;
								.l{
									font-size: 31/@rpx;	
								}
								.r{
									margin-left: 12/@rpx;
									font-size: 36/@rpx;
									color: @light-main-color;
								}
							}
						}
						.bottom{
							background: white;
							border-radius: 30/@rpx;
							height: 286/@rpx;
							padding: 41/@rpx 0 39/@rpx 40/@rpx;
							.one{
								display: flex;
								align-items: center;
								.l{
									font-size: 38/@rpx;
								}
								.r{
									margin-left: 15/@rpx;
									width: 67/@rpx;
									height: 38/@rpx;
									font-size: 27/@rpx;	
									display: flex;
									justify-content: center;
									align-items: center;
									border-radius: 20/@rpx;
									color: @gray;
									border: 1rpx solid @gray;
								}
							}
							.two{
								margin-top: 24/@rpx;
								font-size: 31/@rpx;	
							}
							.three {
								margin-top: 63/@rpx;
								font-size: 31/@rpx;	
								color: #836354;
							}
						}
						
					}
				}
				.bottom_line{
					// 1000x120
					background-color: white;
					margin-top: 26/@rpx;
					width: 1000/@rpx;
					height: 120/@rpx;
					font-size: 31/@rpx;
					text-align: center;
					line-height: 120/@rpx;
					border-radius: 30/@rpx;
					
				}
			}
			.featured_list_wrapper{
				background-color: @light-background-color;
				padding: 60/@rpx 40/@rpx 0 40/@rpx;
				.top_line{
					display: flex;
					justify-content: space-between;
					.left{
						font-size: 50/@rpx;
					}
					.right{
						font-size: 36/@rpx;
						color: @gray;
					}
				}
				.featured_list{
					border-radius: 40/@rpx;
					margin: 40/@rpx auto 0 auto;
					background-color: white;
					// width: 1000/@rpx;
					height: 760/@rpx;
					padding: 66/@rpx 0 71/@rpx 26/@rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.block {
						display: flex;
						align-items: center;
						.left{
							position: relative;
							width: 150/@rpx;
							height: 122/@rpx;
							background-color: #fbeede;
							font-size: 37/@rpx;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							&:before{
								position: absolute;
								font-size: 57/@rpx;
								left: -25/@rpx;
								top: -10/@rpx;
							}
						}
						.right{
							margin-left: 43/@rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							height: 122/@rpx;
							.top{
								font-size: 46/@rpx;
							}
							.bottom{								
								font-size: 35/@rpx;
								display: flex;
								.l{
									color: @gray;
								}
								.r{
									color: @main-color;
								}
							}
						}
					}
					.line {
						
						background-color: @gray;
					}
					
				}
			}
			
		}
	}
</style>
