<template>
	<view class="container">
		<!-- 
		<view class="top_line">
			<view class="left">
				<image src="" class="profile"></image>
				<view class="text">
					哪些赚钱的基金经理，都买了啥？
				</view>
			</view>
			<view class="right">
				<view class="live">
					<view class="iconfont icon-live"></view>
					<view class="live-text">
						直播
					</view>
				</view>
				<view class="search icon-search iconfont"></view>
			</view>
		</view>	
		<view class="market">
			<view class="one">
				<view class="left">
					行情君
				</view>
				<view class="right">
					大盘正在努力，你怎么看<text class="iconfont icon-arrow-right"></text>
				</view>
			</view>
			<view class="two">
				<view class="left">
					<view class="a">
						<view class="l">
							上证指数
						</view>
						<view class="r iconfont icon-shuangxiang"></view>
					</view>
					<view class="b">
						3231.41
					</view>
					<view class="c">
						+0.55%
					</view>
				</view>
				<view class="block">
					<view class="half-block">
						<view class="hb-left">
							传媒
						</view>
						<view class="hb-right">
							+3.04%
						</view>
					</view>
					<view class="half-block">
						<view class="hb-left">
							新能源车
						</view>
						<view class="hb-right">
							+1.58%
						</view>
					</view>
				</view>
				<view class="block">
					<view class="half-block">
						<view class="hb-left">
							计算机
						</view>
						<view class="hb-right">
							+1.73%
						</view>
					</view>
					<view class="half-block">
						<view class="hb-left">
							光伏
						</view>
						<view class="hb-right">
							+1.21%
						</view>
					</view>
				</view>
			</view>
			<view class="three">
				<swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="3000"
								:duration="500" :vertical="true">
					<swiper-item class="s-item" v-for="{imgSrc,text} in marketCommentList" :key="text">
						<image :src="imgSrc" class="img"></image>
						<view class="text">
							{{text}}
						</view>
					</swiper-item>
				</swiper>
			
			</view>
			<view class="four">
				<view class="f-left">
					本月战况如何？
				</view>
				<view class="f-right">
					分享本月战绩
				</view>
			</view>
		</view>
		<view class="ai_manager">
			<view class="one">
				AI经理
			</view>
			<view class="two">
				<view class="iconfont icon-robot_1"></view>
				<view class="button">
					咨询
				</view>
			</view>

		</view>
		 <view class="wealth_top">
			<view class="title">
				财富头条
			</view>
			<view class="block" v-for="(item, idx) in wealthTopList" :key="item.text">
				<view class="left" :style="{
					'background-color': idx%2==0 ? '#fff0f5':'#fcf9ea',
					'color': idx%2==0 ? '#e16772':'#d27c5a'
				}">
					{{item.prefixText}}
				</view>
				<view class="right">
					{{item.text}}
				</view>
			</view>
		</view> 
		
		<view class="organization_talk">
			<view class="one">
				<view class="left">
					机构说
				</view>
				<view class="right">
					一周看点
				</view>
			</view>
			<view class="two">
				<view class="left">
					<image class="img" src="/static/image/mbank.png"></image>
				</view>
				<view class="right">
					<text class="organizationName">招商银行研究：</text>
					<text class="text">市场呈俯卧撑行情，不具备持续下跌基础，大方向震荡向上，建议股票中...</text>
				</view>
			</view>
		</view>
		-->
		<view class="frequent_look">
			<view class="title">
				我常访问
			</view>

			<scroll-view class="scroll-view" scroll-x="true" show-scrollbar="false">
				<view class="block_wrapper" v-for="(item, idx) in frequentLookList" :key="item.type">
					<view class="block">
						<view class="top">
							<view class="left" v-if="item.type == 'user'">
								<view class="icon iconfont icon-user"></view>
								<view class="text">用户</view>
							</view>
							<view class="left" v-if="item.type == 'discussionArea'">
								<view class="icon iconfont icon-quote-left"></view>
								<view class="text">讨论区</view>
							</view>
							<view class="left" v-if="item.type == 'circle'">
								<view class="icon iconfont icon-circle1"></view>
								<view class="text">圈子</view>
							</view>
							<view class="left" v-if="item.type == 'topic'">
								<view class="icon iconfont icon-hashjinghao"></view>
								<view class="text">话题</view>
							</view>
							<view class="right iconfont icon-arrow-right"></view>
						</view>
						<view class="bottom">
							<view class="type_user" v-if="item.type == 'user'">
								<view class="to-top">
									我的关注
								</view>
								<view class="to-bottom">
									<image class="tb-img" src="/static/image/mbank2.png"></image>
									<view class="tb-text">
										广州华强路...
									</view>
								</view>
							</view>
							<view class="type_discussion_area" v-if="item.type == 'discussionArea'">
								<view class="tda-top">
									<view class="tdat-left">
										+1.36%
									</view>
									<view class="tdat-right">
										06-09
									</view>
								</view>
								<view class="tda-bottom">
									国联安半导体...
								</view>
							</view>
							<view class="type_circle" v-if="item.type == 'circle'">
								<view class="tc-top-101">
									<view class="left-103">
										白酒
									</view>
									<view class="right-104">
										+2.47%
									</view>
								</view>
								<view class="tc-bottom-102">
									大消费调整了很久...
								</view>
							</view>
							<view class="type_topic" v-if="item.type == 'topic'">
								<view class="text-108">
									“红”就晒出来
								</view>
							</view>
						</view>
					</view>
				</view>
	
			</scroll-view>
			
		</view>
		<view class="square-109">
			<view class="one-110">
				广场
			</view>
			<view class="two-111">
				<view class="left-112">
					<swiper class="swiper" autoplay="true" interval="3200" duration="1000" circular="true">
						<swiper-item class="item" v-for="(item, idx) in fundManagerSquareSwipeList" :key="item.imgSrc">
							<image :src="item.imgSrc" class="img"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="right-113">
					<view class="a-114">
						<view class="left-120">
							<view class="iconfont icon-arrows_anticlockwise_dashed"></view>
							<view class="text-122">
								回看
							</view>
							
						</view>
						<view class="right-121">
							<view class="iconfont icon-eye"></view>
							<view class="text-123">
								7635
							</view>
						</view>
					</view>
					<view class="b-115">
						又到高考季，学霸基金经理现场做题
					</view>
					<view class="c-116">
						<view class="left-124">
							中金基金
						</view>
						<view class="right-125">
							<image src="/static/image/female-fund-manager.png" class="img-126"></image>
						</view>
					</view>
					<view class="d-117">
						<view class="left-130 iconfont icon-live"></view>
						<view class="middle-131">
							更多精彩直播
						</view>
						<view class="right-132 iconfont icon-arrow-right">
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script src="./fund_manager_js">
	
</script>

<style scoped lang="less" src="./fund_manager_less.less">

</style>
