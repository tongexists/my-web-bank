<template>
	<view class="container">
		<view class="top_block">
			<view class="top_100">
				<view class="back_btn btn_103 iconfont icon-ico-left-arrow">
					
				</view>
				<view class="main_b">
					<view class="wrapper_119">
						<view class="left_120">
							
						</view>
						<view class="middle_121">
							<view class="name">
								景顺长城基金
							</view>
							<view class="bottom_123">
								<view class="live_label">
									直播
								</view>
								<view class="num">
									1242观看
								</view>
							</view>
						</view>
						<view class="right_122">
							关注
						</view>
					</view>
					
				</view>
				<view class="dot_btn btn_103 iconfont icon-more">
					
				</view>
				<view class="share_btn btn_103 iconfont icon-share">
					
				</view>
			</view>
			<view class="middle_101">
				<view class="left_201">
					景顺长城多资产策略会 刘...
				</view>
				<view class="right_202">
					<view class="fire iconfont icon-Fire">
						
					</view>
					<view class="text">
						更多直播
					</view>
				</view>
			</view>
			<view class="bottom_102">
				<view class="text">
					招行直播ID 840339
				</view>
			</view>
		</view>
		<view class="video">
	<!-- 		<video class="player" src="http://192.168.241.3:8080/live/livestream.m3u8" autoplay="true" danmu-btn="true" 	
			enable-danmu="true" :danmu-list="dumuList"></video> -->
		</view>
		<view class="middle_block">
			<view class="left_210 ">
				<view class="one_212 iconfont icon-editmedia">
					
				</view>
				<view class="two_213">
					节目单
				</view>
				<view class="three_214 iconfont icon-arrow-right">
					
				</view>
			</view>
			<view class="right_211">
				<view class="human iconfont icon-user">
					
				</view>
				<view class="desc">
					小助手
				</view>
			</view>
		</view>
		<view class="comment_block">
			<scroll-view scroll-y="true" class="scroll-v" :scroll-top="scrollTop" >
				<view class="item" v-for="(item, idx) in dumuList" :key="idx">
					<text class="text_area">
						<text class="name" :style="{'color': item.isHost?'#715735':'#89daf5'}">
							{{item.name}}：
						</text>
						<text class="text">
							{{item.text}}
						</text>
					</text>

				</view>
			</scroll-view>
		</view>
		<view class="action_block"  v-if="!inputing">
			<view class="letf_131">
				<view class="text_133" @click="inputing = true;">
					一起来交流吧~
				</view>
			</view>
			<view class="fresh_btn iconfont icon-refresh">
				
			</view>
			<view class="gift_btn iconfont icon-gift">
				
			</view>
			<view class="heart_btn iconfont icon-heart">
				
			</view>
		</view>
		<view class="input_block" v-if="inputing">
			<view class="wrapper">
				
				<textarea type="text" class="input" @input="danmuInput"
				placeholder="写下你的精彩评论" maxlength="60">
					
				</textarea>
				<view class="num">
					<text>
						<text>{{currentInputLength}}</text>
						<text class="divison">/</text>
						<text>60</text>
						
					</text>
					
				</view>
			</view>
			<view class="send" @click="sendDanmu">
				发送
			</view>
		</view>
	</view>
	
</template>

<script src="./live_js">
	
</script>

<style lang="less" scoped src="./live_less.less">

</style>
