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
				<view class="one_menu" v-for="item in topMenuList">
					<view :class="['iconfont', item.iconClassName]"></view>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
			<view class="main_menu_wrapper">
				<view class="main_menu" v-for="i in mainMenuList">
					<view class="one_menu" v-for="item in i">
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
					<swiper-item class="item" v-for="i in swiperList">
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
						title: '朝朝宝'
					},
					{
						iconClassName: 'icon-qian',
						title: '收支明细'
					},
					{
						iconClassName: 'icon-zhuanzhang',
						title: '转账'
					},
					{
						iconClassName: 'icon-yidongyunkongzhitaiicon01',
						title: '总览'
					},
				],
				mainMenuList: [
					[{
							iconClassName: 'icon-qianbao',
							title: '申请信用卡'
						},
						{
							iconClassName: 'icon-qian',
							title: '他行卡转入'
						},
						{
							iconClassName: 'icon-zhuanzhang',
							title: '借钱'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '城市服务'
						},
						{
							iconClassName: 'icon-qian',
							title: '热门活动'
						}
					],
					[{
							iconClassName: 'icon-zhuanzhang',
							title: '养老金融'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '话费流量'
						},
						{
							iconClassName: 'icon-zhuanzhang',
							title: '理财产品'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '银行卡'
						},
						{
							iconClassName: 'icon-yidongyunkongzhitaiicon01',
							title: '全部'
						},
					]
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	@rpx: 1080/750rpx;

	.container {
		background-color: #f25c65;
		width: 100%;
		height: 100%;

		.search_bar {
			background-color: #f25c65;
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
				border: 1px solid #eee;
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
					background: #f9f9f9;
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
				background: #f8f8f8;
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
								color: #e44b59;
								font-size: 63/@rpx;
							}
						}
						.right{
							height: 86/@rpx;
							border: 1rpx solid black;
							border-radius: 80/@rpx;
							padding: 0 40/@rpx;
							font-size: 43/@rpx;
							line-height: 86/@rpx;
						}
					}
				}
				
			}
		}
	}
</style>
