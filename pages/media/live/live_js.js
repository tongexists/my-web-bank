export default {
	data() {
		return {
			scrollTop: 9999,
			dumanInputValue: '',
			socketTask: {},
			currentInputLength: 0,
			inputing: true,
			dumuList: [
				{
					name: '富国基金',
					text: '楼上的客官，今天的直播是我们富国基金每月一次的一起投专场策略会哟~券商首席携手富国绩优基金经理，共话2023热点话题及投资机遇。',
					isHost: true,
					color: '#ff0000',
					time: 3
				},
				
				{
					name: '心喙',
					text: '66',
					color: '#ff0000',
					time: 4
				},
				{
					name: '**阳',
					text: '666',
					color: '#ff0000',
					time: 5
				},
				{
					name: '心喙',
					text: '66'
				},
				{
					name: 'xyzr',
					text: '666'
				},
				{
					name: '东篱把酒醉夕阳',
					text: '啊'
				},
				{
					name: '统一部署',
					text: '有活动吗'
				},
				{
					name: '我的好妈妈',
					text: '666！'
				},
				{
					name: '千里之行始干足下',
					text: '666'
				},
				{
					name: '烤番薯',
					text: '我亏的底裤都没了'
				}
			]
		};
	}
	,
	mounted() {
		let vedioId= "2";
		this.socketTask = uni.connectSocket({
			url: 'ws://127.0.0.1:8080/danmu/' + vedioId,
			complete: ()=> {}
		});
		this.socketTask.onMessage((msg) => {
			console.log("receive from server: ", msg);
			let obj = JSON.parse(msg.data);
			this.dumuList.push({
				name: obj.userId,
				text: obj.text,
				color: '#ff0000',
				time: obj.danmuTime
			});
			this.scrollTop = this.scrollTop + 1;
			
			
		})

		
	},
	methods: {

		danmuInput(e) {
			// console.log(e);
			this.currentInputLength = e.detail.value.length;
			this.dumanInputValue = e.detail.value;
		},
		
		sendDanmu() {
			// this.inputing = false;
			let obj = {
					userId: 1,
					vedioId: 2,
					text: this.dumanInputValue,
					danmuTime: 2
			};
			this.socketTask.send({
				data: JSON.stringify(obj)
			});
		}
	}
}