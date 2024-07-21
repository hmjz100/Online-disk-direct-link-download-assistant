// ==UserScript==
// @name        （改）百度网盘会员青春版
// @namespace   github.com/hmjz100
// @match       *://pan.baidu.com/*
// @match       *://yun.baidu.com/*
// @icon        data:image/png;base64,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
// @grant       GM_addStyle
// @grant       unsafeWindow
// @run-at      document-start
// @version     1.2
// @license     MIT
// @author      Hmjz100、Gwen
// @description 修改身份信息为会员身份，支持修改视频倍速、字幕等功能，需要修改代码来配置显示内容。
// ==/UserScript==

(function () {
	'use strict';

	var user = {
		vip: 1, // 开启修改（总开关）
		svip: 1, // 显示为超级会员，默认1
		previous: 0, // 显示为会员过期，默认0，变为仅修改历史最高的会员类型、等级
		/*
		自定义用户名与头像，留空则使用已登录账号数据
		*/
		name: "百湿不得其解",
		photo: "https://bkimg.cdn.bcebos.com/pic/cdbf6c81800a19d8bc3e5cfd95ab958ba61ea9d3e8b3",
		/*
		会员等级与成长值，可留空为""
		普通会员等级最高为 10 (以前是 8)
		超级会员等级最高为 10
		超级会员 1~10 的成长值分别为 0 1000 3000 7000 15000 27000 43000 56000 88000 152000，后两个值为猜测
		*/
		level: 10,
		point: 152000,
		/*
		自定义会员ID，留空则使用已登录账号数据
		据网上观察应为六位数，没找到显示的地方，改不改无所谓
		*/
		vip_id: "000001 - What's your problem?",
		/* 
		会员过期时间 格式为Unix时间戳，可留空为""
		1562118175 - 2019-07-03 09:42:55 (宏彦获水时)
		2147483648 - 2038-01-19 11:14:08 (2038问题时)
		253402185600 - 9999-12-31 00:00:00 (终极时)
		*/
		endtime: 253402185600,

		// 以下是关键参数，不能修改
		adToken: null,
	}

	GM_addStyle(`
		/* 修正错误的会员色 */
		dt.level-1 {
			background: #fd6d65 !important;
		}
		dt.level-2 {
			background: #f3a723 !important;
		}
		dt.level-1 i.desc-arrow {
			border-bottom: 10px solid #dd6966 !important;
		}
		dt.level-2 i.desc-arrow {
			border-bottom: 10px solid #d29633 !important;
		}
	`)

	var originOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function (method, url) {
		url = new URL(url, window.location.origin).toString()
		if (url.includes('/api/loginStatus')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					user.vip === 1 && user.previous === 0 ? res.login_info.vip_type = `${user.svip === 1 ? 2 : 1}1` : ""
					user.vip === 1 && user.previous === 0 ? res.login_info.vip_identity = `${user.svip === 1 ? 2 : 1}1` : ""
					user.vip === 1 && user.previous === 0 ? res.login_info.vip_level = user.level : ""
					user.vip === 1 && user.previous === 0 ? res.login_info.vip_point = user.point : ""
					user.photo ? res.login_info["photo_url"] = user.photo : ""
					user.name ? res.login_info.username = user.name : ""
					console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					this.responseText = JSON.stringify(res)
				}
			})
			originOpen.apply(this, arguments);
		} else if (url.includes('/user/info')) {
			user.vip === 1 && user.previous === 0 ? this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.user_info.is_vip = user.vip
					res.user_info.is_svip = user.svip
					res.user_info.is_plus_buy = user.vip
					user.name ? res.user_info.username = user.name : "";
					user.photo ? res.user_info.photo = user.photo : "";
					user.vip_id ? res.user_info.vipsid = user.vip_id : "";
					user.endtime ? res.user_info.phone = user.endtime.toString() : "";
					console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			}) : ""
			originOpen.apply(this, arguments);
		} else if (url.includes('/membership/user') && !url.includes('method=rights')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					// 决定网页显示会员标识
					user.vip === 1 && user.previous === 0 ? res.current_product = {
						"cluster": "vip",
						"detail_cluster": user.svip === 1 ? "svip" : "vip", // 决定修改会员标签
						"product_type": user.svip === 1 ? `vip2_1m_auto` : `vip_1m_auto`,
						"product_id": "12187135090581539740"
					} : ""
					user.vip === 1 && user.previous === 0 ? res.current_product_v2 = {
						"cluster": "vip",
						"detail_cluster": user.svip === 1 ? "svip" : "vip", // 决定修改会员标签
						"product_type": user.svip === 1 ? `vip2_1m_auto` : `vip_1m_auto`,
						"product_id": "12187135090581539740"
					} : ""

					// 决定网页显示会员等级
					user.vip === 1 ? res.level_info = {
						...res.level_info,
						"current_value": user.point, // 决定所有会员标签
						"current_level": user.level, // 决定所有会员标签
						"history_value": user.point,
						"history_level": user.level,
						"v10_id": user.vip_id ? user.vip_id : "",
						"last_manual_collection_time": 0
					} : ""

					// 决定网页展示会员剩余时间
					user.vip === 1 && user.previous === 0 && user.svip === 0 ? res.reminder = {
						...res.reminder,
						"vip": {
							"leftseconds": ((user.endtime ? user.endtime : 2147483648) * 1000 - Date.now()) / 1000,
							"nextState": "normal"
						}
					} : user.svip === 1 && user.previous === 0 ? res.reminder = {
						...res.reminder,
						"svip": {
							"leftseconds": ((user.endtime ? user.endtime : 2147483648) * 1000 - Date.now()) / 1000,
							"nextState": "normal"
						}
					} : ""

					// 其它（已有套餐、之前套餐）
					user.vip === 1 && user.previous === 0 ? res.product_infos = [{
						"product_id": "12187135090581539740",
						"buy_time": "946656000",
						"start_time": 946656000,
						"end_time": user.endtime ? user.endtime : 2147483648,
						"cluster": "vip",
						"detail_cluster": user.svip === 1 ? "svip" : "vip",
						"product_name": user.svip === 1 ? "svip2_nd" : "vip1_nd",
						"cur_svip_type": "year",
						"function_num": 8,
						"status": 0,
						"buy_description": "超级SVIP套餐(永久)",
						"product_description": "自打百度一诞生我就买了！"
					}, ...res.product_infos] : ""
					user.vip === 1 ? res.previous_product = {
						"cluster": "vip",
						"detail_cluster": user.svip === 1 ? "svip" : "vip", // 决定之前会员标签
						"product_type": user.svip === 1 ? `vip2_1m_auto` : `vip_1m_auto`,
						"expired_time": 946656000
					} : ""
					user.vip === 1 ? res.previous_product_v2 = {
						"cluster": "vip",
						"detail_cluster": user.svip === 1 ? "svip" : "vip", // 决定之前会员标签
						"product_type": user.svip === 1 ? `vip2_1m_auto` : `vip_1m_auto`,
						"expired_time": 946656000
					} : ""

					console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)

					Object.defineProperty(this, "response", {
						writable: true,
					});
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			})
			originOpen.apply(this, arguments);
		} else if (url.includes('/api/streaming') && !url.includes('M3U8_SUBTITLE_SRT')) { //获取视频m3u8接口
			let pureURL = url.replace(/vip=2/, 'vip=0').replace(/_1080&/, '_720&')
			if (user.adToken) {
				pureURL += ('&adToken=' + encodeURIComponent(user.adToken))
				this.adToken = user.adToken
				user.adToken = null
				console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n修改地址:", pureURL)
				originOpen.call(this, method, pureURL, false);
			} else {
				this.addEventListener('readystatechange', function () {
					if (this.readyState == 4 && this.responseText[0] == '{') {
						let res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText), log
						user.adToken = res.adToken

						let m3uRequest = new XMLHttpRequest();
						m3uRequest.open(method, pureURL, false);
						m3uRequest.send();
						let m3uText = m3uRequest.responseText

						Object.defineProperty(this, "status", {
							writable: true,
						});
						this.status = m3uRequest.status;

						if (m3uText.startsWith('#EXTM3U')) {
							log = "M3U8预览\n" + m3uText.split('\n').slice(0, 5).join('\n')
							res = m3uText
						} else {
							res = JSON.parse(m3uText)
							res.errno = 133
							res.ltime = 100
							res.adTime = 100
						}

						console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", log || res)

						Object.defineProperty(this, "responseText", {
							writable: true,
						});
						this.responseText = res;
					}
				})
				originOpen.call(this, method, pureURL);
			}

		} else if (url.includes('/msg/streaming') || url.includes('/share/streaming')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4 && this.responseText[0] == '{') {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.ltime = 0.00001
					res.adTime = 0.00001
					console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, 'responseText', {
						writable: true,
					})
					this.responseText = JSON.stringify(res)
				}
			})
			originOpen.apply(this, arguments);
		} else {
			originOpen.apply(this, arguments);
		}
	}

	let localsTimer = setInterval(() => {
		if (!unsafeWindow.locals) return
		clearInterval(localsTimer)
		let locals = unsafeWindow.locals
		let originalSet = locals.set
		locals.set = function (...args) {
			if (typeof args[1] == 'number' || typeof args[1] == 'string') {
				let oriarg = args[1]
				if (args[0].includes('is_vip')) {
					args[1] = user.vip === 1 && user.previous === 0 ? 1 : 0
				} else if (args[0].includes('is_svip')) {
					args[1] = user.svip === 1 && user.previous === 0 ? 1 : 0;
				} else if (args[0] === 'vip_level') {
					user.level ? args[1] = user.level : "";
				} else if (args[0] === 'v10_id') {
					user.vip_id ? args[1] = user.vip_id : "";
				} else if (args[0] === 'username') {
					user.name ? args[1] = user.name : "";
				} else if (args[0] === 'photo') {
					user.photo ? args[1] = user.photo : "";
				}
				if (oriarg !== args[1]) console.log("【百度网盘会员青春版】Hook Locals", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
			}
			originalSet.apply(this, args);
		}
		user.level ? locals.vip_level = user.level : ""
		locals.is_vip = user.vip === 1 && user.previous === 0 ? 1 : 0
		locals.is_svip = user.svip === 1 && user.previous === 0 ? 1 : 0
		user.vip === 1 && user.previous === 0 ? locals.show_vip_ad = 0 : ""
		user.photo ? locals.photo = user.photo : ""
		user.name ? locals.username = user.name : ""
		if (/\/s\/.*?\?fid=.*?/.test(location.href)) unsafeWindow.locals.self = 1
		if (locals.userInfo) {
			user.level ? locals.userInfo.vip_level = user.level : ""
			user.vip === 1 && user.previous === 0 ? locals.userInfo.vip_identity = `${user.svip === 1 ? 2 : 1}1` : ""
			user.photo ? locals.userInfo["photo_url"] = user.photo : ""
			user.name ? locals.userInfo.username = user.name : ""
		}
		if (locals.mset && user.vip === 1 && user.previous === 0) locals.mset({
			'is_vip': user.vip === 1 && user.previous === 0 ? 1 : 0,
			'is_svip': user.svip === 1 && user.previous === 0 ? 1 : 0,
			'vip_level': user.level ? user.level : "",
			'show_vip_ad': 0
		})
		console.log("【百度网盘会员青春版】Hook", "\nLocals:", locals)
	}, 1)

	let yunDataTimer = setInterval(() => {
		if (!unsafeWindow.yunData) return;
		clearInterval(yunDataTimer)
		let yunData = unsafeWindow.yunData

		let originalSet = yunData.setData;
		yunData.setData = function (...args) {
			if (typeof args[0] === 'object') {
				let oriargs = { ...args[0] }
				let newargs = args[0]
				if (oriargs.hasOwnProperty('is_vip')) {
					newargs.is_vip = user.vip === 1 && user.previous === 0 ? 1 : 0;
				}
				if (oriargs.hasOwnProperty('is_svip')) {
					newargs.is_svip = user.svip === 1 && user.previous === 0 ? 1 : 0;
				}
				if (oriargs.hasOwnProperty('vip_level')) {
					user.level ? newargs.vip_level = user.level : "";
				}
				if (oriargs.hasOwnProperty('v10_id')) {
					user.vip_id ? newargs.v10_id = user.vip_id : "";
				}
				if (oriargs.hasOwnProperty('photo')) {
					user.photo ? newargs.photo = user.photo : "";
				}
				if (oriargs.hasOwnProperty('username')) {
					user.name ? newargs.username = user.name : "";
				}
				if (JSON.stringify(oriargs) !== JSON.stringify(newargs)) console.log("【百度网盘会员青春版】Hook yunData", "\n原始数据:", oriargs, "\n修改数据:", newargs);
			} else {
				let oriarg = args[1]
				if (args[0].includes('is_vip')) {
					args[1] = user.vip === 1 && user.previous === 0 ? 1 : 0
				} else if (args[0].includes('is_svip')) {
					args[1] = user.svip === 1 && user.previous === 0 ? 1 : 0;
				} else if (args[0] === 'vip_level') {
					user.level ? args[1] = user.level : "";
				} else if (args[0] === 'v10_id') {
					user.vip_id ? args[1] = user.vip_id : "";
				} else if (args[0] === 'username') {
					user.name ? args[1] = user.name : "";
				} else if (args[0] === 'photo') {
					user.photo ? args[1] = user.photo : "";
				}
				if (oriarg !== args[1]) console.log("【百度网盘会员青春版】Hook yunData", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
			}
			originalSet.apply(this, args);
		}
		user.name ? yunData.username = user.name : ""
		user.name ? yunData.MYNAME = user.name : ""
		user.photo ? yunData.MYAVATAR = user.photo : ""
		user.photo ? yunData.photo = user.photo : ""
		user.level ? yunData.vip_level = user.level : ""
		yunData.ISVIP = user.vip === 1 && user.previous === 0 ? 1 : 0
		yunData.ISSVIP = user.svip === 1 ? 1 : 0
		user.vip ? yunData.ISYEARVIP = 1 : ""
		yunData.is_vip = user.vip === 1 && user.previous === 0 ? 1 : 0
		yunData.is_svip = user.svip === 1 ? 1 : 0
		yunData.is_vip_v2 = user.vip === 1 && user.previous === 0 ? 1 : 0
		yunData.is_svip_v2_new = user.svip === 1 ? 1 : 0
		user.vip ? yunData.show_vip_ad = 0 : ""
		console.log("【百度网盘会员青春版】Hook", "\nyunData:", yunData)
	}, 1)

	let yunDataRequireTimer = setInterval(() => {
		if (!unsafeWindow.require) return;
		clearInterval(yunDataRequireTimer)
		require.async('pan-center:widget/data/yunData', function (yunData) {
			let originalSet = yunData.setData;
			yunData.setData = function (...args) {
				if (typeof args[0] === 'object') {
					let oriargs = { ...args[0] }
					let newargs = args[0]
					if (oriargs.hasOwnProperty('is_vip')) {
						user.vip === 1 && user.previous === 0 ? newargs.is_vip = 1 : newargs.is_vip = 0;
					}
					if (oriargs.hasOwnProperty('is_svip')) {
						user.svip === 1 && user.previous === 0 ? newargs.is_svip = 1 : newargs.is_svip = 0;
					}
					if (oriargs.hasOwnProperty('vip_level')) {
						user.level ? newargs.vip_level = user.level : "";
					}
					if (oriargs.hasOwnProperty('v10_id')) {
						user.vip_id ? newargs.v10_id = user.vip_id : "";
					}
					if (oriargs.hasOwnProperty('photo')) {
						user.photo ? newargs.photo = user.photo : "";
					}
					if (oriargs.hasOwnProperty('username')) {
						user.name ? newargs.username = user.name : "";
					}
					if (JSON.stringify(oriargs) !== JSON.stringify(newargs)) console.log("【百度网盘会员青春版】Hook yunDataModule", "\n原始数据:", oriargs, "\n修改数据:", newargs);
				} else {
					let oriarg = args[1]
					if (args[0].includes('is_vip')) {
						args[1] = user.vip === 1 && user.previous === 0 ? 1 : 0
					} else if (args[0].includes('is_svip')) {
						args[1] = user.svip === 1 && user.previous === 0 ? 1 : 0;
					} else if (args[0] === 'vip_level') {
						user.level ? args[1] = user.level : "";
					} else if (args[0] === 'v10_id') {
						user.vip_id ? args[1] = user.vip_id : "";
					} else if (args[0] === 'username') {
						user.name ? args[1] = user.name : "";
					} else if (args[0] === 'photo') {
						user.photo ? args[1] = user.photo : "";
					}
					if (oriarg !== args[1]) console.log("【百度网盘会员青春版】Hook yunDataModule", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
				}
				originalSet.apply(this, args);
			}
			console.log("【百度网盘会员青春版】Hook", "\nyunDataModule:", yunData)

		})
	}, 1)
})()