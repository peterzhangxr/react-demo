//规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function throttle(func, delay) {
	let last, deferTimer
	return function () {
		let that = this
		let _args = arguments
		let now = +new Date()
		if (last && now < last + delay) {
			deferTimer && clearTimeout(deferTimer)
			deferTimer = setTimeout(() => {
				last = now
				func.apply(that, _args)
			}, delay)
		} else {
			last = now
			func.apply(that, _args)
		}
	}
}