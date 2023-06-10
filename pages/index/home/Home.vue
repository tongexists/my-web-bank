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
				<swiper class="right" circular :indicator-dots="false" :autoplay="true"
					:interval="4000" :duration="500" :vertical="true" :disable-touch="true" :touchable="false">
					<swiper-item class="item" v-for="(i,idx) in topNewsList" :key="i">
						<view class="news">
							{{i}}
						</view>															
					</swiper-item>
				</swiper>
				<!-- <view class="right">【热门】英伟达概念大火，哪些公募早有...</view> -->
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

<script src="./home_js.js">
</script>

<style scoped lang="less" src="./home_less.less">

</style>
