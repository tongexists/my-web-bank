<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
@import './static/css/iconfont/iconfont.css';
page {
	width: 100vw;
	height: calc(50vh - 50px);
}
</style>
