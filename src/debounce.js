//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce(func, delay) {
	return function(args) {
		let that = this
		let _args = args
		func.id && clearTimeout(func.id)
		func.id = setTimeout(function () {
			func.call(that, _args)
		}, delay)
	}
}

export default debounce