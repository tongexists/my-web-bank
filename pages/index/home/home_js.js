	import {getTopNewsList} from '@/resource/js/api/unname.js';
	export default {
		name: 'Home',
		data() {
			return {
				topNewsList: [
					"hello1",
					"hello2",
					"hello3"
				],
				swiperList: [
					{
						imageSrc: '/static/image/home_swipe_1.png',
						text: '1'
					},
					{
						imageSrc: '/static/image/home_swipe_2.png',
						text: '2'
					},
					{
						imageSrc: '/static/image/home_swipe_1.png',
						text: '3'
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
		
		async mounted() {
			// load home page top news
			let res = await getTopNewsList();		
			if (res != null && res.statusCode == 200) {
				this.topNewsList = res.data.records; 				
			}
		},
		methods: {

		}
	}
