// ==UserScript==
// @name        （改）百度网盘会员青春版
// @namespace   github.com/hmjz100
// @match       *://pan.baidu.com/*
// @match       *://yun.baidu.com/*
// @icon        data:image/png;base64,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
// @grant       GM_addStyle
// @grant       GM_openInTab
// @grant       unsafeWindow
// @run-at      document-start
// @version     1.2.4
// @license     MIT
// @author      Hmjz100、Gwen
// @description 显示身份信息为会员身份，支持修改视频倍速、生成字幕、关闭AI聊天、修改头像、修改用户名等功能，自定义程度超高！需要修改头部代码来配置显示内容（非常简单！）
// @require     https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==

(function () {
	'use strict';

	var user = {
		// 以下设置项中，常规项目（就是以//开头注释的项目）除非特殊说明，否则一般 0 为关闭，1 为开启
		vip: 1, // 开启会员修改（总开关）
		svip: 1, // 显示为超级会员，建议 1
		previous: 0, // 显示为会员过期，建议 0，变为仅修改历史最高的会员类型、等级

		// 以下的常规项目（就是以//开头注释的项目）均为独立功能，不受总开关控制
		aiChat: 0, // 显示云一朵 AI 聊天的相关功能，建议 0，相关功能大多数都是在右上角的 AI 聊天的右侧边栏入口中
		aiCollect: 0, // 显示百度网盘 AI 看的相关入口，建议 0，作用于左侧边栏
		versionSwitchButton: 1, // 显示百度网盘的新旧版界面切换按钮，建议 0
		feedbackButton: 0, // 显示百度网盘的反馈录屏工具的相关入口，建议 0
		pfileView: 1, // 在线打开文档时，使用新版在线文档查看器，而不是旧版的在线 WPS 文档查看器，建议 1
		analytics: 0, // 允许百度网盘网页分析浏览信息，建议 0，分析原理是以 new Image 或 document.createElement("img") 的形式让浏览器访问特殊的图片来给服务器传递信息
		adTime: 0.0001, // 视频播放时的广告（等待）时间，建议 0.0001
		debug: 0, // 显示本脚本的调试信息到 JavaScript 控制台中，建议 0，另外，1 显示所有，2 仅显示 Hook 修改参数，3 仅显示禁用网页分析

		// 以下是自定义项目（以/*开头注释的项目），修改也非常简单
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

	var originalOpen = XMLHttpRequest.prototype.open;
	unsafeWindow.XMLHttpRequest.prototype.open = function (method, url) {
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
					res.login_info.vip_type && user.vip === 1 && user.previous === 0 ? res.login_info.vip_type = `${user.svip === 1 ? 2 : 1}1` : ""
					res.login_info.vip_identity && user.vip === 1 && user.previous === 0 ? res.login_info.vip_identity = `${user.svip === 1 ? 2 : 1}1` : ""
					res.login_info.vip_level && user.vip === 1 && user.previous === 0 ? res.login_info.vip_level = user.level : ""
					res.login_info.vip_point && user.vip === 1 && user.previous === 0 ? res.login_info.vip_point = user.point : ""
					res.login_info["photo_url"] && user.photo ? res.login_info["photo_url"] = user.photo : ""
					res.login_info.username && user.name ? res.login_info.username = user.name : ""
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					this.responseText = JSON.stringify(res)
					Object.defineProperty(this, "responseText", {
						writable: false,
					});
				}
			})
			originalOpen.apply(this, arguments);
		} else if (url.includes('/user/info')) {
			user.vip === 1 && user.previous === 0 ? this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.user_info.is_vip ? res.user_info.is_vip = user.vip : ""
					res.user_info.is_svip ? res.user_info.is_svip = user.svip : ""
					res.user_info.is_plus_buy ? res.user_info.is_plus_buy = user.svip : ""
					res.user_info.plus_buy_hit ? res.user_info.plus_buy_hit = user.svip : ""
					res.user_info.is_vip_v2 && user.level && user.level >= 2 ? res.user_info.is_vip_v2 = user.vip : "";
					res.user_info.is_vip_v2_new && user.level && user.level >= 2 ? res.user_info.is_vip_v2_new = user.vip : "";
					res.user_info.username && user.name ? res.user_info.username = user.name : "";
					res.user_info.photo && user.photo ? res.user_info.photo = user.photo : "";
					res.user_info.vipsid && user.vip_id ? res.user_info.vipsid = user.vip_id : "";
					res.user_info.phone ? res.user_info.phone = "01095099" : "";
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			}) : ""
			originalOpen.apply(this, arguments);
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

					if (user.vip === 1 && res.privilege_list) {
						[...res.privilege_list].forEach(item => {
							item.free_count = 100
						})
					}

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
					user.vip === 1 && user.previous === 0 && res.product_infos ? res.product_infos = [{
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

					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)

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
			originalOpen.apply(this, arguments);
		} else if (url.includes('/api/streaming') && !url.includes('M3U8_SUBTITLE_SRT')) { //获取视频m3u8接口
			let pureURL = url.replace(/vip=2/, 'vip=0').replace(/_1080&/, '_720&')
			if (user.adToken) {
				pureURL += ('&adToken=' + encodeURIComponent(user.adToken))
				this.adToken = user.adToken
				user.adToken = null
				if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n修改地址:", pureURL)
				originalOpen.call(this, method, pureURL, false);
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
							user.adTime ? (res.ltime = user.adTime) : (res.ltime = 0.0001)
							user.adTime ? (res.adTime = user.adTime) : (res.adTime = 0.0001)
						}

						if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", log || res)

						Object.defineProperty(this, "responseText", {
							writable: true,
						});
						this.responseText = res;
					}
				})
				originalOpen.call(this, method, pureURL);
			}
		} else if (url.includes('/api/streaming') && url.includes('M3U8_SUBTITLE_SRT')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4 && this.responseText.includes('#EXT-X-MEDIA:TYPE=SUBTITLES')) {
					let res = this.response
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", res)

					var nameMatch = this.responseText.match(/NAME="([^"]+)"/);
					var aiSubMatch = this.responseText.match(/AI-SUB=([^,\s]+)/);
					var urlMatch = this.responseText.match(/(https?:\/\/[^\s]+)/);

					if (nameMatch && urlMatch && aiSubMatch && aiSubMatch[1] === 'YES') {
						var subName = nameMatch[1];
						var aiSub = aiSubMatch[1] === 'YES' ? 'AI-' : '';
						var subUrl = urlMatch[0];
						waitForKeyElements(`aside.vp-aside div.vp-tabs div.vp-tabs__content`, function (element) {
							var button = $(`<span id="downloads"><h1>[独家功能] AI字幕均为逐句分割而非整段分割</h1><br/><button class="downloadSubtitle" data-href="${subUrl}" data-name="${aiSub}${subName}.srt"><i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> ${aiSub}${subName} (Blob下载,自动命名)</button><a class="downloadSubtitle" href="${subUrl}" title="默认命名是乱码，别忘了加上后缀 .srt 哦" target="_blank"><i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> ${aiSub}${subName} (打开链接,手动命名)</a></span>`)
							button.find("button").on('click', async function (element) {
								if (!$(this).data('href')) return;
								element.preventDefault();
								element = $(this)
								let ins = {};
								let progress = {};
								let index = element.data('index');

								element.prop('disabled', true);

								ins[index] = setInterval(function () {
									let prog = +progress[index] || 0;
									element.html('<i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> 已下载 ' + prog + "%");
								}, 10);

								try {
									let response = await unsafeWindow.fetch(element.data('href'));
									if (!response.ok) throw new Error('网络响应失败');

									let totalSize = response.headers.get('Content-Length') || 0;
									let reader = response.body.getReader();
									let receivedLength = 0;
									let chunks = [];

									while (true) {
										const { done, value } = await reader.read();
										if (done) break;
										chunks.push(value);
										receivedLength += value.length;
										progress[index] = ((receivedLength / totalSize) * 100).toFixed(1);
									}

									const blob = new Blob(chunks);

									clearInterval(ins[index]);
									progress[index] = 100;
									element.html('<i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> 下载完成,浏览器弹框中')

									const url = URL.createObjectURL(blob);
									const a = document.createElement('a');
									a.href = url;
									a.download = `${element.data('name')}`;
									a.style.display = 'none';
									document.body.appendChild(a);
									a.click();

									setTimeout(() => {
										URL.revokeObjectURL(url);
										document.body.removeChild(a);
									}, 1000);

									setTimeout(function () {
										element.html(`<i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> ${aiSub}${subName} (Blob下载,自动命名)`);
										$(this).prop('disabled', false);
									}.bind(this), 3000);
								} catch (error) {
									clearInterval(ins[index]);
									console.error("下载失败:", error);
									element.html('<i class="u-icon-download-bold" style="vertical-align: text-bottom;"></i> 下载失败,点击重试?');
									$(this).prop('disabled', false).one('click', async function () {
										$(this).trigger('click');
									});
								}
							})
							element.before(button)
						})
					}
				}
			});
			originalOpen.apply(this, arguments);
		} else if (url.includes('/msg/streaming') || url.includes('/share/streaming')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4 && this.responseText[0] == '{') {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					user.adTime ? (res.ltime = user.adTime) : (res.ltime = 0.0001)
					user.adTime ? (res.adTime = user.adTime) : (res.adTime = 0.0001)
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
					Object.defineProperty(this, 'responseText', {
						writable: true,
					})
					this.responseText = JSON.stringify(res)
				}
			})
			originalOpen.apply(this, arguments);
		} else if (url.includes('/api/getsyscfg') && url.includes('huge_upgrade')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.huge_upgrade.cfg_list[1].show_features = (user.feedbackButton === 0 ? "0" : "1")
					res.huge_upgrade.cfg_list[0].new_nav_show = (user.versionSwitchButton === 0 ? "0" : "1")
					res.huge_upgrade.cfg_list[0].new_nav_href = "https://pan.baidu.com/disk/main"
					res.huge_upgrade.cfg_list[0].old_nav_show = (user.versionSwitchButton === 0 ? "0" : "1")
					res.huge_upgrade.cfg_list[0].old_nav_href = "https://pan.baidu.com/disk/home?stayAtHome=true"
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
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
			originalOpen.apply(this, arguments);
		} else if (url.includes('/api/getsyscfg') && url.includes('netdisk_docchat_config')) {
			user.aiChat === 0 ? this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.netdisk_docchat_config.cfg_list[0].is_chat_show = "0"
					res.netdisk_docchat_config.cfg_list[0].is_docview_chat_auto_show = "0"
					res.netdisk_docchat_config.cfg_list[0].is_docview_chat_show = "0"
					res.netdisk_docchat_config.cfg_list[0].is_home_need_out_sug = "0"
					res.netdisk_docchat_config.cfg_list[0].is_main_chat_show = "0"
					res.netdisk_docchat_config.cfg_list[0].is_videoview_chat_auto_show = "0"
					res.netdisk_docchat_config.cfg_list[0].is_videoview_chat_show = "0"
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
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
			originalOpen.apply(this, arguments);
		} else if (url.includes('/api/getsyscfg') && url.includes('ai_collect')) {
			user.aiCollect === 0 ? this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.ai_collect.cfg_list[0].is_ai_collect_show = "0"
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
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
			originalOpen.apply(this, arguments);
		} else if (url.includes('/api/getsyscfg') && url.includes('netdisk_docview_config')) {
			this.addEventListener('readystatechange', function () {
				if (this.readyState == 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}
					res.netdisk_docview_config.cfg_list[0].auto_search_to_ai = (user.aiChat === 0 ? "0" : "1")
					res.netdisk_docview_config.cfg_list[0].use_pfile_for_doc = (user.pfileView === 0 ? "0" : "1")
					res.netdisk_docview_config.cfg_list[0].use_pfile_for_ppt = (user.pfileView === 0 ? "0" : "1")
					res.netdisk_docview_config.cfg_list[0].use_pfile_reader = (user.pfileView === 0 ? "0" : "1")
					res.netdisk_docview_config.cfg_list[0].use_wps_reader = (user.pfileView === 0 ? "1" : "0")
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
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
			originalOpen.apply(this, arguments);
		} else {
			originalOpen.apply(this, arguments);
		}
	}
	var hookedOpen = unsafeWindow.XMLHttpRequest.prototype.open

	GM_addStyle(`
		/* 帮助百度网盘修正错误的会员色 */
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

		span#downloads h1 {
			margin-left: 20px;
			font-size: small;
		}
		a.downloadSubtitle, button.downloadSubtitle {
			border: none;
			border-radius: 5px;
			font-size: 12px;
			background: #0095ff;
			color: #fff;
			padding: 5px;
			margin: 0 0 20px 20px;
			width: fit-content;
		}
		a.downloadSubtitle:hover, a.downloadSubtitle:disabled, button.downloadSubtitle:hover, button.downloadSubtitle:disabled {
			background: #0095ffD0;
		}
	`)

	// 禁止分析网页信息
	unsafeWindow.Image = function () {
		const img = new Image();
		return new Proxy(img, {
			set(target, prop, value) {
				if (prop === 'src' && (value.includes('analytics') || value.includes('ztbox'))) {
					let url = new URL(value, location.origin);
					if (user.debug === 1 || user.debug === 3) console.warn("【百度网盘会员青春版】unAnalytics", '\n类型：new Image\n禁止网页分析信息:', url.toString());
					return true; // 阻止设置
				}
				target[prop] = value; // 设置其他属性
				return true;
			},
			get(target, prop) {
				return target[prop]; // 获取属性值
			}
		});
	};
	const originalCreateElement = document.createElement;
	unsafeWindow.document.createElement = function (tagName) {
		const element = originalCreateElement.call(unsafeWindow.document, tagName);
		if (tagName.toLowerCase() === 'img') {
			Object.defineProperty(element, 'src', {
				set(value) {
					if (value.includes('analytics') || value.includes('ztbox')) {
						let url = new URL(value, location.origin);
						if (user.debug === 1 || user.debug === 3) console.warn("【百度网盘会员青春版】unAnalytics", '\n类型：document.createElement("img")\n禁止网页分析信息:', url.toString())
						return true;
					} else {
						element.setAttribute('src', value)
					}
				},
				get() {
					return element.getAttribute('src');
				}
			});
		}
		return element;
	};

	waitForKeyElements(`.vp-video__control-bar--playback-rates button`, function (element) {
		element.on('click', function () {
			XMLHttpRequest.prototype.open = originalOpen;
			setTimeout(function () {
				XMLHttpRequest.prototype.open = hookedOpen;
			}, 20)
		})
	})

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
				if (oriarg !== args[1]) {
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook Locals", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
				}
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
		if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook", "\nLocals:", locals)
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
				if (JSON.stringify(oriargs) !== JSON.stringify(newargs)) {
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook yunData", "\n原始数据:", oriargs, "\n修改数据:", newargs);
				}
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
				if (oriarg !== args[1]) {
					if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook yunData", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
				}
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
		if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook", "\nyunData:", yunData)
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
					if (oriargs.hasOwnProperty('is_evip')) {
						user.svip === 1 && user.previous === 0 ? newargs.is_evip = 1 : newargs.is_evip = 0;
					}
					if (oriargs.hasOwnProperty('vip_level')) {
						user.level ? newargs.vip_level = user.level : "";
					}
					if (oriargs.hasOwnProperty('v10_id')) {
						user.vip_id ? newargs.v10_id = user.vip_id : "";
					}
					if (oriargs.hasOwnProperty('has_3V1_coupon')) {
						user.svip === 1 && user.previous === 0 ? newargs.has_3V1_coupon = 1 : newargs.has_3V1_coupon = 0;
					}
					if (oriargs.hasOwnProperty('photo')) {
						user.photo ? newargs.photo = user.photo : "";
					}
					if (oriargs.hasOwnProperty('username')) {
						user.name ? newargs.username = user.name : "";
					}
					if (JSON.stringify(oriargs) !== JSON.stringify(newargs)) {
						if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook yunDataModule", "\n原始数据:", oriargs, "\n修改数据:", newargs);
					}
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
					if (oriarg !== args[1]) {
						if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook yunDataModule", "\n原始数据:", args[0], "-", oriarg, "\n修改数据:", args[0], "-", args[1]);
					}
				}
				originalSet.apply(this, args);
			}
			if (user.debug === 1 || user.debug === 2) console.log("【百度网盘会员青春版】Hook", "\nyunDataModule:", yunData)
		})
	}, 1)

	function waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
		function findInShadowRoots(root, selector) {
			let elements = $(root).find(selector).toArray();
			$(root).find('*').each(function () {
				const shadowRoot = this.shadowRoot;
				if (shadowRoot) {
					elements = elements.concat(findInShadowRoots(shadowRoot, selector));
				}
			});
			return elements;
		}
		var targetElements;
		if (iframeSelector) {
			targetElements = $(iframeSelector).contents();
		} else {
			targetElements = $(document);
		}
		let allElements = findInShadowRoots(targetElements, selectorTxt);
		if (allElements.length > 0) {
			allElements.forEach(function (element) {
				var jThis = $(element);
				var alreadyFound = jThis.data('alreadyFound') || false;
				if (!alreadyFound) {
					var cancelFound = actionFunction(jThis);
					if (cancelFound) {
						return false;
					} else {
						jThis.data('alreadyFound', true);
					}
				}
			});
		}
		var controlObj = waitForKeyElements.controlObj || {};
		var controlKey = selectorTxt.replace(/[^\w]/g, "_");
		var timeControl = controlObj[controlKey];
		if (allElements.length > 0 && bWaitOnce && timeControl) {
			clearInterval(timeControl);
			delete controlObj[controlKey];
		} else {
			if (!timeControl) {
				timeControl = setInterval(function () {
					waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
				}, 1000);
				controlObj[controlKey] = timeControl;
			}
		}
		waitForKeyElements.controlObj = controlObj;
	}
})()
