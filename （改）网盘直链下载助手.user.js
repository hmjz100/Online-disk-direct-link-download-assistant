// ==UserScript==
// @name              （改）网盘直链下载助手
// @namespace         https://github.com/syhyz1990/baiduyun
// @version           1.0.9.4
// @author            Hmjz100、油小猴
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTAzLjYgMTA3LjRjMy41LTIuMiA4LjktNi4xIDEzLjgtMTIuNXM3LjMtMTIuNSA4LjUtMTYuNWMuNS0xLjcgMi4yLTcuNSAyLjItMTQuNyAwLTEwLjEtMy4zLTI1LjEtMTUuNC0zNi44LTE0LjUtMTQtMzIuMS0xNC4zLTM1LjctMTQuMy04IDAtMTUuNyAxLjktMjIuNiA1LjJDNDQgMjMgMzUuNyAzMS40IDMwLjggNDEuN2MtMS4zIDIuOC00IDQuNy03LjEgNS00IC4zLTcuNSA0LjQtOC45IDkuNi0uNSAxLjktMS42IDMuNS0zLjEgNC43QzQuNCA2Ni44IDAgNzUuNyAwIDg1YzAgNi44IDIuMyAxMy4xIDYuMSAxOC4yIDUuNSA3LjQgMTQuMiAxMi4yIDI0IDEyLjJoNDcuMWM0LjQgMCAxMS0uNSAxOC4zLTMuNSAzLjItMS40IDUuOS0zIDguMS00LjV6IiBmaWxsPSIjQTA5OUYwIi8+PHBhdGggZD0iTTExOS44IDY0LjNjLjEtMTcuMS0xMC40LTI4LTEyLjUtMzAuMUM5NSAyMi4xIDc5LjkgMjEuOCA3Ni45IDIxLjhjLTE3LjYgMC0zMy4zIDEwLjUtMzkuOSAyNi43LS42IDEuMy0xLjggMi4zLTMuNCAyLjNoLS40Yy01LjggMC0xMC42IDQuOC0xMC42IDEwLjd2LjVjMCAxLjQtLjggMi42LTEuOSAzLjNDMTMuNCA2OSA4LjggNzYuOCA4LjggODVjMCAxMi4yIDkuOSAyMi4zIDIyLjIgMjIuM2g0NS4yYzMuNi0uMSAxNy42LS45IDI5LjYtMTIgMi45LTIuOCAxMy45LTEzLjcgMTQtMzF6IiBmaWxsPSIjNTc0QUI4Ii8+PHBhdGggZD0iTTExMC44IDU3LjRsLjIgMy4zYzAgMS4zLTEuMSAyLjQtMi4zIDIuNC0xLjMgMC0yLjMtMS4xLTIuMy0yLjRsLS4xLTIuOHYtLjNjMC0xLjIuOS0yLjIgMi4xLTIuM2guM2MuNyAwIDEuMy4zIDEuNy43LS4yLjEuMy41LjQgMS40em0tMy4zLTEwLjNjMCAxLjItMSAyLjMtMi4yIDIuM2gtLjFjLS44IDAtMS42LS41LTItMS4yLTQuNi04LjMtMTMuMy0xMy41LTIyLjgtMTMuNS0xLjIgMC0yLjMtMS0yLjMtMi4ydi0uMWMwLTEuMiAxLTIuMyAyLjItMi4zaC4xYTMwLjM3IDMwLjM3IDAgMCAxIDE1LjggNC40YzQuNiAyLjggOC40IDYuOCAxMS4xIDExLjUuMS4zLjIuNy4yIDEuMXpNODguMyA3My44TDczLjUgOTMuMmMtMS41IDEuOS0zLjUgMy4xLTUuNyAzLjVoLS4yYy0uNC4xLS44LjEtMS4yLjEtLjYgMC0xLjEtLjEtMS42LS4yLTIuMi0uNC00LjItMS43LTUuNi0zLjVMNDQuMyA3My45Yy0yLTIuNi0yLjUtNS40LTEuNC03LjcuMS0uMS4xLS4yLjItLjIgMS4yLTIgMy41LTMuMiA2LjQtMy4yaDYuNnYtNS43YzAtNi44IDQuNy0xMiAxMC45LTEyIDQuOCAwIDguNSAyLjYgMTAuMyA3LjIuNSAxLjMtLjIgMi43LTEuNSAzLjJzLTIuOC0uMS0zLjMtMS40Yy0xLjEtMi43LTIuOS00LTUuNS00LTMuNSAwLTYgMy02IDd2OC4xYzAgLjUtLjIgMS0uNiAxLjQtLjYuNy0xLjcgMS4xLTIuNiAxLjFoLTguNGMtMS4zIDAtMiAuNC0yLjEuNy0uMi40IDAgMS4zLjkgMi40TDYzLjEgOTBjLjkgMS4yIDIuMSAxLjggMy4zIDEuOHMyLjMtLjYgMy4xLTEuN2wxNC44LTE5LjNjLjktMS4xIDEuMS0yIC45LTIuNC0uMi0uMy0uOS0uNy0yLjEtLjdoLTcuNmMtLjkgMC0xLjctLjUtMi4xLTEuMi0uMy0uNC0uNC0uOC0uNC0xLjMgMC0xLjQgMS4xLTIuNSAyLjUtMi41aDcuNmMzLjEgMCA1LjUgMS4zIDYuNiAzLjVsLjMuN2MuNyAyLjEuMSA0LjYtMS43IDYuOXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=
// @description       一个基于 JavaScript 的网盘文件下载地址获取工具，支持 百度网盘/阿里云盘/天翼云盘/迅雷云盘/夸克网盘/移动网盘 六大网盘 | 基于【网盘直链下载助手】修改自6.2.7版本 | 开源 - 自用 - 去广 | 改界面 - 添功能 - 修Bug | 不仅能够精简网盘界面 还支持修改网盘界面主题颜色!
// @license           AGPL-3.0-or-later
// @homepage          https://github.com/hmjz100/Online-disk-direct-link-download-assistant/
// @supportURL        https://github.com/hmjz100/Online-disk-direct-link-download-assistant/issues
// @compatible	      Chrome
// @compatible	      Edge
// @compatible	      Firefox
// @compatible	      Safari
// @compatible	      Opera
// @require           https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @require           https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.js
// @require           https://unpkg.com/js-md5@0.7.3/build/md5.min.js
// @resource Swal     https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.css
// @resource SwalDark https://unpkg.com/@sweetalert2/theme-dark@5/dark.min.css
// @match             *://pan.baidu.com/disk/home*
// @match             *://yun.baidu.com/disk/home*
// @match             *://pan.baidu.com/disk/timeline*
// @match             *://yun.baidu.com/disk/timeline*
// @match             *://pan.baidu.com/disk/main*
// @match             *://yun.baidu.com/disk/main*
// @match             *://pan.baidu.com/youth/pan/main*
// @match             *://yun.baidu.com/youth/pan/main*
// @match             *://pan.baidu.com/disk/base*
// @match             *://yun.baidu.com/disk/base*
// @match             *://pan.baidu.com/s/*
// @match             *://pan.baidu.com/aipan/*
// @match             *://yun.baidu.com/s/*
// @match             *://yun.baidu.com/aipan/*
// @match             *://pan.baidu.com/share/*
// @match             *://yun.baidu.com/share/*
// @match             *://openapi.baidu.com/*
// @match             *://www.aliyundrive.com/s/*
// @match             *://www.aliyundrive.com/drive*
// @match             *://www.alipan.com/s/*
// @match             *://www.alipan.com/drive*
// @match             *://cloud.189.cn/web/*
// @match             *://pan.xunlei.com/*
// @match             *://pan.quark.cn/*
// @match             *://yun.139.com/*
// @match             *://caiyun.139.com/*
// @match             *://*.youxiaohou.com/*
// @connect           baidu.com
// @connect           baidupcs.com
// @connect           aliyundrive.com
// @connect           aliyundrive.net
// @connect           alipan.com
// @connect           alicloudccp.com
// @connect           189.cn
// @connect           xunlei.com
// @connect           quark.cn
// @connect           youxiaohou.com
// @connect           greasyfork.org
// @connect           gcore.jsdelivr.net
// @connect           localhost
// @connect           *
// @run-at            document-body
// @grant             unsafeWindow
// @grant             window.close
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_deleteValue
// @grant             GM_openInTab
// @grant             GM_info
// @grant             GM_registerMenuCommand
// @grant             GM_cookie
// @grant             GM_getResourceText
// ==/UserScript==

(function Panlinker() {
	'use strict';

	/*
	防止代码因其他原因被执行多次
	这段代码出自 Via轻插件，作者谷花泰
	*/
	const key = encodeURIComponent('（改）网盘直链下载助手:主代码');
	if (window[key]) return;
	window[key] = true;

	/*
	网盘直链下载助手
	以下代码均改自 网盘直链下载助手，作者油小猴
	*/
	/* 全局参数 */
	let pt = '', selectList = [], params = {}, mode = '', width = '', pan = {}, color = '',
		doc = $(document), progress = {}, request = {}, ins = {}, idm = {}, colored = false,
		scriptInfo = GM_info.script,
		realauthor = scriptInfo.author,
		realname = scriptInfo.name,
		realversion = scriptInfo.version,
		manageHandler = GM_info.scriptHandler,
		manageVersion = GM_info.version;


	/* 设置选项 */
	// Shell类型（用于curl下载）
	let terminalType = {
		wc: "Microsoft Windows 命令提示符",
		wp: "Microsoft Windows PowerShell",
		lt: "Linux 终端",
		ls: "Linux Shell",
		mt: "Apple MacOS 终端",
	};

	// 使用油小猴服务器
	let monkeyServer = {
		v1: "使用 [用油小猴服务器 V1 接口]",
		v2: "使用 [用油小猴服务器 V2 接口]",
		no: "不使用 [用 jsdelivr 连接本项目 Github 仓库]"
	};

	// 更换 百度网盘新界面/阿里云盘/迅雷云盘/移动云盘 主题颜色
	let assistantTheme = {
		yes: "更换主题颜色",
		no: "不更换主题颜色"
	};

	/* Sweet Alert 2 */
	// 自定义元素 Class 名（于 showMainDialog() 中）
	let customClass = {
		popup: 'pl-popup',
		header: 'pl-header',
		title: 'pl-title',
		closeButton: 'pl-close',
		content: 'pl-content',
		input: 'pl-input',
		footer: 'pl-footer'
	};

	// Toast 提示配置
	let toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3500,
		timerProgressBar: true,
		showCloseButton: true,
		didOpen: function (toast) {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		}
	});

	// Toast 简易调用
	let message = {
		success: function (text) {
			toast.fire({ title: text, icon: 'success' });
		},
		error: function (text) {
			toast.fire({ title: text, icon: 'error' });
		},
		warning: function (text) {
			toast.fire({ title: text, icon: 'warning' });
		},
		info: function (text) {
			toast.fire({ title: text, icon: 'info' });
		},
		question: function (text) {
			toast.fire({ title: text, icon: 'question' });
		}
	};

	/* 基础函数 */
	let base = {
		// 创建 GreaseMonkey 菜单
		registerMenuCommand() {
			GM_registerMenuCommand('⚙️ 设置', function () {
				base.showSetting();
			});
			GM_registerMenuCommand('🍃️ 美化', function () {
				base.showBeautify();
			});
			GM_registerMenuCommand('📃 更新', function () {
				base.showUpdateLog();
			});
			GM_registerMenuCommand('🛠️ 调试', function () {
				base.showDebug();
			});
		},

		// 取消注册
		unRegisterInit(value) {
			message.warning("正在注入设置项目...");
			base.setValue('setting_init_code', value);
			base.setValue('license', value);
			history.go(0)
		},

		/*-- 对象类型判断
		示例：
			isType([]) // 输出"array"
			isType(123) // 输出"number"
			isType(null) // 输出"null"
			isType(new Date()) // 输出"date"
		*/
		isType(obj) {
			return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
		},


		// 获取本地保存的数值（仅用于 Greasemonkey）
		getValue(name) {
			return GM_getValue(name);
		},

		// 增改本地保存的数值（仅用于 Greasemonkey）
		setValue(name, value) {
			GM_setValue(name, value);
		},

		// 删除本地保存的数值（仅用于 Greasemonkey）
		deleteValue(name) {
			GM_deleteValue(name);
		},

		// 获取本地保存的数值
		getStorage(key) {
			try {
				return JSON.parse(localStorage.getItem(key));
			} catch (e) {
				return localStorage.getItem(key);
			}
		},

		// 修改本地保存的数值
		setStorage(key, value) {
			if (this.isType(value) === 'object' || this.isType(value) === 'array') {
				return localStorage.setItem(key, JSON.stringify(value));
			}
			return localStorage.setItem(key, value);
		},

		// 设置剪贴板
		setClipboard(text) {
			GM_setClipboard(text, 'text');
		},

		// 加密成base64（先转换成URL编码）
		encode(str) {
			return btoa(unescape(encodeURIComponent(str)));
		},

		// 从base64解密
		decode(str) {
			return decodeURIComponent(escape(atob(str)));
		},

		// 数字补零
		repairTimer(i) {
			if (i >= 0 && i <= 9) {
				return "0" + i;
			} else {
				return i;
			}
		},

		// 接受文件名并返回大写扩展名
		getExtension(name) {
			const reg = /(?!\.)\w+$/;
			if (reg.test(name)) {
				let match = name.match(reg);
				return match[0].toUpperCase();
			}
			return '';
		},

		// 文件大小转换（以字节为单位）
		sizeFormat(value) {
			if (value === +value) {
				let unit = ["字节(B)", "千字节(KB)", "兆字节(MB)", "吉字节(GB)", "太字节(TB)", "拍字节(PB)", "艾字节(EB)", "泽字节(ZB)", "尧字节(YB)"];
				if (value === 0) {
					return "0字节(B)";
				} else {
					let index = Math.floor(Math.log(value) / Math.log(1024));
					let size = value / Math.pow(1024, index);
					size = size.toFixed(1);
					return size + unit[index];
				}
			}
			return '';
		},

		// 根据数组中的每个文件名进行排序，使用 localeCompare 方法来比较中文字符串的顺序。
		sortByName(arr) {
			const handle = function () {
				return (a, b) => {
					const p1 = a.filename ? a.filename : a.server_filename;
					const p2 = b.filename ? b.filename : b.server_filename;
					return p1.localeCompare(p2, "zh-CN");
				};
			};
			arr.sort(handle());
		},

		// 替换特殊字符为下划线
		fixFilename(name) {
			let replace = /[!?&|`"'*\/:<>\\]/g
			return name.replace(replace, '_');
		},

		// 传递 Document Cookie
		getCookie(name) {
			let cname = name + "=";
			let ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i].trim();
				if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
			}
			return "";
		},

		// 接受Blob对象和文件名，然后创建临时链接指向blob对象，之后创建a标签指向临时链接和设置文件名，最后模拟点击a标签实现下载和释放临时链接
		blobDownload(blob, filename) {
			if (blob instanceof Blob) {
				const url = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = filename;
				a.click();
				URL.revokeObjectURL(url);
			}
		},

		/* 请求 */
		// 使用 Post 发送请求
		post(url, data, headers, type, maxRetries = 3, currentRetry = 0) {
			if (this.isType(data) === 'object') {
				data = JSON.stringify(data);
			}
			return new Promise((resolve, reject) => {
				const sendRequest = function () {
					GM_xmlhttpRequest({
						method: "POST", url, headers, data,
						responseType: type || 'json',
						onloadstart() {
							console.log('【（改）网盘直链下载助手】Post(start)\n请求地址：' + url + '\n请求头部：', headers);
						},
						onload: function (res) {
							// 尝试格式化请求结果以方便调试
							if (res.response) {
								try {
									res.decodedResponse = JSON.parse(res.response);
								} catch (e) { }
								try {
									res.decodedResponse = JSON.parse(base.decode(res.response));
								} catch (e) { }
							}
							if (res.responseText) {
								try {
									res.decodedResponseText = JSON.stringify(res.responseText);
								} catch (e) { }
								try {
									res.decodedResponseText = JSON.stringify(base.decode(res.responseText));
								} catch (e) { }
							}
							console.log('【（改）网盘直链下载助手】Post(load)\n请求地址：' + url + '\n请求头部：', headers, '\n请求数据：' + JSON.stringify(data) + '\n请求结果：', res);
							type === 'blob' ? resolve(res) : resolve(res.response || res.responseText);
						},
						onerror: function (err) {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【（改）网盘直链下载助手】Post(error)\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`, err);
								setTimeout(function () {
									console.log(`【（改）网盘直链下载助手】Post(error)\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								}, 5000)
							} else {
								reject('【（改）网盘直链下载助手】Post(error)\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};
				sendRequest(); // 初始请求
			});
		},

		// 使用 Get 发送请求
		get(url, headers, type, extra, maxRetries = 3, currentRetry = 0) {
			return new Promise((resolve, reject) => {
				const sendRequest = function () {
					let requestObj = GM_xmlhttpRequest({
						method: "GET", url, headers,
						responseType: type || 'json',
						onload: function (res) {
							if (res.status === 204) {
								console.log('【（改）网盘直链下载助手】Get(load)\n\x1B[31m该请求已被某个下载工具捕获。' + (res.statusText ? ("\n\x1B[0m工具提示：\x1B[31m" + res.statusText) : "") + '\x1B[0m\n请求地址：' + url + '\n请求头部：', headers, '\n请求结果：', res);
								requestObj.abort();
								idm[extra.index] = true;
								return;
							}
							if (type === 'blob') {
								console.log('【（改）网盘直链下载助手】Get(load) Blob\n请求地址：' + url + '\n请求头部：', headers, '\n请求结果：', res);
								res.status === 200 && base.blobDownload(res.response, extra.filename);
								resolve(res);
							} else {
								// 尝试格式化请求结果以方便调试
								if (res.response) {
									try {
										res.decodedResponse = JSON.parse(res.response);
									} catch (e) { }
									try {
										res.decodedResponse = JSON.parse(base.decode(res.response));
									} catch (e) { }
								}
								if (res.responseText) {
									try {
										res.decodedResponseText = JSON.stringify(res.responseText);
									} catch (e) { }
									try {
										res.decodedResponseText = JSON.stringify(base.decode(res.responseText));
									} catch (e) { }
								}
								console.log('【（改）网盘直链下载助手】Get(load)\n请求地址：' + url + '\n请求头部：', headers, '\n请求结果：', res);
								resolve(res.response || res.responseText);
							}
						},
						onprogress: function (res) {
							if (res.status === 204) {
								console.log('【（改）网盘直链下载助手】Get(progress)\n\x1B[31m该请求已被某个下载工具捕获。' + (res.statusText ? ("\n\x1B[0m工具提示：\x1B[31m" + res.statusText) : "") + '\x1B[0m\n请求地址：' + url + '\n请求头部：', headers, '\n请求结果：', res);
								requestObj.abort();
								idm[extra.index] = true;
								return;
							}
							if (extra && extra.filename && extra.index) {
								res.total > 0 ? progress[extra.index] = (res.loaded * 100 / res.total).toFixed(2) : progress[extra.index] = 0.00;
								console.log('【（改）网盘直链下载助手】Get(progress)\n\x1B[31m该请求正在进行中。' + (progress[extra.index] ? ("\n\x1B[0m下载进度：\x1B[31m" + progress[extra.index]) : "") + '\x1B[0m');
							}
						},
						onloadstart(res) {
							if (res.status === 204) {
								console.log('【（改）网盘直链下载助手】Get(start)\n\x1B[31m该请求已被某个下载工具捕获。' + (res.statusText ? ("\n\x1B[0m工具提示：\x1B[31m" + res.statusText) : "") + '\x1B[0m\n请求地址：' + url + '\n请求头部：', headers, '\n请求结果：', res);
								requestObj.abort();
								idm[extra.index] = true;
								return;
							}
							console.log('【（改）网盘直链下载助手】Get(start)\n请求地址：' + url + '\n请求头部：', headers);
							extra && extra.filename && extra.index && (request[extra.index] = requestObj);
						},
						onerror: function (err) {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【（改）网盘直链下载助手】Get(error)\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`, err);
								setTimeout(function () {
									console.log(`【（改）网盘直链下载助手】Get(error)\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								}, 5000)
							} else {
								reject('【（改）网盘直链下载助手】Get(error)\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};

				sendRequest(); // 初始请求
			});
		},

		// 使用 Get 发送请求获取跳转后的链接
		getFinalUrl(url, headers, maxRetries = 3, currentRetry = 0) {
			return new Promise((resolve, reject) => {
				const sendRequest = function () {
					let requestObj = GM_xmlhttpRequest({
						method: "GET", url, headers,
						onloadstart() {
							console.log('【（改）网盘直链下载助手】Get(start) FinalUrl\n请求地址：' + url + '\n请求头部：', headers);
						},
						onload: function (res) {
							console.log('【（改）网盘直链下载助手】Get(load) FinalUrl\n请求地址：' + url + '\n请求头部：', headers, '\n返回结果：', res);
							resolve(res.finalUrl)
						},
						onerror: function (err) {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【（改）网盘直链下载助手】Get(error) FinalUrl\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`);
								setTimeout(function () {
									console.log(`【（改）网盘直链下载助手】Get(error) FinalUrl\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								}, 5000)
							} else {
								reject('【（改）网盘直链下载助手】Get(error) FinalUrl\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};
				sendRequest(); // 初始请求
			});
		},

		// RPC测试
		async rpcTest(domain, port, path, token) {
			return new Promise((resolve, reject) => {
				let rpc = { domain, port, path, token };
				let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
				let rpcData = {
					id: new Date().getTime(),
					jsonrpc: '2.0',
					method: 'system.listMethods',
					params: [`token:${rpc.token}`],
				};
				GM_xmlhttpRequest({
					method: "POST", url, headers: {}, data: JSON.stringify(rpcData),
					responseType: 'json',
					onloadstart() {
						console.log('【（改）网盘直链下载助手】Post(start) RPCTest\n请求地址：' + url + '\n请求内容：', rpcData);
					},
					onload: function (res) {
						console.log('【（改）网盘直链下载助手】Post(load) RPCTest\n请求地址：' + url + '\n请求结果：', res);
						if (res.response) {
							resolve("success");
						} else {
							resolve("fail");
						}
					},
					onerror: function (err) {
						console.error('【（改）网盘直链下载助手】Post(error) RPCTest\n请求失败', err);
						resolve("fail");
					},
				});
			});
		},

		// 将对象转换为 URL 加密
		stringify(obj) {
			let str = '';
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var value = obj[key];
					if (Array.isArray(value)) {
						for (var i = 0; i < value.length; i++) {
							str += encodeURIComponent(key) + '=' + encodeURIComponent(value[i]) + '&';
						}
					} else {
						str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
					}
				}
			}
			return str.slice(0, -1); // 去掉末尾的 "&"
		},

		// 动态添加样式
		addStyle(id, tag, css, element, position) {
			tag = tag || 'style';
			element = element || 'body';
			let styleDom = document.getElementById(id);
			if (styleDom) styleDom.remove();
			let style = document.createElement(tag);
			style.rel = 'stylesheet';
			style.id = id;
			tag === 'style' ? style.innerHTML = css : style.href = css;
			if (position === "before") {
				$(element).prepend($(style));
			} else {
				$(element).append($(style));
			}
		},

		hexToRgba(hex) {
			// 去掉 # 号
			hex = hex.replace(/^#/, '');
			// 如果是四位十六进制颜色值，转换为八位
			if (hex.length === 4) {
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
			}
			// 解析 RGB 分量
			var r = parseInt(hex.substring(0, 2), 16);
			var g = parseInt(hex.substring(2, 4), 16);
			var b = parseInt(hex.substring(4, 6), 16);
			var a = '';
			// 如果是八位十六进制颜色值，解析 alpha 通道
			if (hex.length === 8) {
				var a = 1;
				a = parseInt(hex.substring(6, 8), 16) / 255; // 将 alpha 值转换为 0 到 1 之间的小数
				a = ',' + a
			}
			// 返回 rgba 格式字符串
			return r + ', ' + g + ', ' + b + a;
		},

		replaceColors(cssText, baseURI, type, colorMap) {
			if (!cssText) return '';
			var colorList = ['#09AAFF', '#cc3235', '#518c17', '#ed944b', '#f969a5', '#bca280', '#574AB8', '#b673ab', '#1d2327', '#18a497', '#637dff', '#0d53ff', '#3181f9', '#f8d800', '#0396ff', '#32ccbc', '#f6416c', '#2271b1', '#59524c', '#ff679a', '#f44236', '#fec107', '#8bc24a', '#2594ed', '#9c28b1']
			colorList.forEach(function (oldColor) {
				cssText = cssText.replace(new RegExp(base.hexToRgba(oldColor), 'ig'), base.hexToRgba(color));
				cssText = cssText.replace(new RegExp(oldColor, 'ig'), color);
			});
			if (type === 'other') {
				// 遍历颜色映射数组，将旧颜色替换为新颜色，并添加过渡效果
				colorMap.forEach(function (colorPair) {
					var oldColor = colorPair[0];
					var newColor = colorPair[1];
					// 判断新颜色是否为 color
					cssText = cssText.replace(new RegExp(oldColor, 'ig'), newColor);
				});
				return cssText;
			}
			if (colorMap) {
				// 遍历颜色映射数组，将旧颜色替换为新颜色，并添加过渡效果
				colorMap.forEach(function (colorPair) {
					var oldColor = colorPair[0];
					var newColor = colorPair[1];
					// 判断新颜色是否为 color
					if (oldColor.includes("#")) {
						cssText = cssText.replace(new RegExp(oldColor + '(.*?)}', 'ig'), newColor + '$1; ' + 'transition: all 0.1s ease;}');
					} else {
						cssText = cssText.replace(new RegExp(oldColor, 'ig'), newColor);
					}
				});
			};
			if (baseURI) {
				// 替换相对路径资源为绝对路径
				cssText = cssText.replace(/url\((?!['"]?(?:data|https?):)['"]?([^'"\)]*)['"]?\)/ig, function (match, p1) {
					// 如果URL是相对路径，则将其转换为绝对路径
					var absoluteURL = new URL(p1, baseURI).href;
					return 'url(' + absoluteURL + ')';
				});
			};
			return cssText;
		},

		setColors(colorMap, type) {
			let cssText
			document.querySelectorAll('link[rel="stylesheet"]').forEach(function (tag) {
				if (!tag.parentElement) return;
				// 对于link标签，异步获取其CSS内容
				fetch(tag.href)
					.then(response => response.text())
					.then(responseText => {
						let id = 'Panlinker-ColorUI-' + tag.href
						// 替换颜色并添加样式
						cssText = base.replaceColors(responseText, tag.href, type, colorMap);
						if (responseText === base.replaceColors(responseText, '', type, colorMap)) return;
						let newStyle = document.createElement('style');
						newStyle.id = id;
						newStyle.textContent = responseText;
						if (location.pathname.includes("youth/pan")) {
							base.addStyle(id, 'style', cssText, 'body', "before");
							tag.remove()
						} else {
							base.addStyle(id, 'style', cssText, tag.parentElement.tagName || 'body');
						}
						console.log(`【（改）网盘直链下载助手】UI\n修改 <link> 元素 转 <style> 元素 样式\n元素：`, tag, `\n样式：`, newStyle);
					});
			})
			document.querySelectorAll('[id^="Panlinker-ColorUI-"]').forEach(function (tag) {
				if (!tag.parentElement) return;
				// 替换颜色并添加样式
				if (
					tag.innerText === base.replaceColors(tag.innerText, '', type, colorMap)
				) return;
				cssText = base.replaceColors(tag.innerText, '', type, colorMap);
				tag.innerText = cssText;
				console.log(`【（改）网盘直链下载助手】UI\n修改 Panlinker-ColorUI <style> 元素 样式\n元素：`, tag);
			});
			let count = 0;
			if (!colored) {
				base.waitForKeyElements('style:not([id^="Panlinker-"],[id^="swal-pub"],[class^="darkreader"])', function (tag) {
					if (!tag.parent()) return;
					let id = tag[0].id;
					// 替换颜色并添加样式
					if (
						tag.innerText === base.replaceColors(tag.innerText, '', type, colorMap)
					) return;
					id = id ? id : `Panlinker-ColorUI-${count++}`
					cssText = base.replaceColors(tag.text(), '', type, colorMap);
					tag.attr("id", id)
					tag.text(cssText)
					console.log(`【（改）网盘直链下载助手】UI\n修改 <style> 元素 样式\n元素：`, tag[0]);
				})
				colored = true;
			}
		},

		// 延迟
		sleep(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		},

		// 获取大版本
		getMajorVersion(version) {
			const [major] = (version || '').split('.');
			return /^\d+$/.test(major) ? major : null;
		},

		// 查找 React 组件实例
		findReact(dom, traverseUp = 0) {
			const key = Object.keys(dom).find(key => {
				return key.startsWith("__reactFiber$")
					|| key.startsWith("__reactInternalInstance$");
			});
			const domFiber = dom[key];
			if (domFiber == null) return null;

			if (domFiber._currentElement) {
				let compFiber = domFiber._currentElement._owner;
				for (let i = 0; i < traverseUp; i++) {
					compFiber = compFiber._currentElement._owner;
				}
				return compFiber._instance;
			}

			const GetCompFiber = fiber => {
				let parentFiber = fiber.return;
				while (typeof parentFiber.type == "string") {
					parentFiber = parentFiber.return;
				}
				return parentFiber;
			};
			let compFiber = GetCompFiber(domFiber);
			for (let i = 0; i < traverseUp; i++) {
				compFiber = GetCompFiber(compFiber);
			}
			return compFiber.stateNode || compFiber;
		},

		// 初始化设置项目
		initDefaultConfig() {
			let value = [
				// RPC 设置
				{
					name: 'setting_rpc_domain',
					value: 'http://localhost'
				}, {
					name: 'setting_rpc_port',
					value: '16800'
				}, {
					name: 'setting_rpc_path',
					value: '/jsonrpc'
				}, {
					name: 'setting_rpc_token',
					value: ''
				}, {
					name: 'setting_rpc_dir',
					value: 'D:\\Downloads\\'
				},
				// 杂项
				{
					name: 'setting_terminal_type',
					value: 'wc'
				}, {
					name: 'setting_theme_color',
					value: '#574AB8'
				}, {
					name: 'setting_init_code',
					value: ''
				}, {
					name: 'license',
					value: ''
				},
				// 额外
				{
					name: 'setting_youxiaohou_server',
					value: 'v2'
				}, {
					name: 'setting_baidu_theme',
					value: 'no'
				}, {
					name: 'setting_ali_theme',
					value: 'no'
				}, {
					name: 'setting_tianyi_theme',
					value: 'no'
				}, {
					name: 'setting_xunlei_theme',
					value: 'no'
				}, {
					name: 'setting_quark_theme',
					value: 'no'
				}, {
					name: 'setting_yidong_theme',
					value: 'no'
				}];

			value.forEach(function (v) {
				// 没有对应的项目就添加上项目
				if (!base.getValue(v.name)) base.setValue(v.name, v.value);
			});
		},

		// 设置界面
		showSetting() {
			let dom = ''
			dom += `<div style="text-align: center;">带星号的设置项目将在网页刷新后生效</div>`
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC主机</div><input type="text"  placeholder="主机地址，需带上http(s)://，但不需要写端口与路径" class="swal2-input pl-input listener-rpc-domain" value="${base.getValue('setting_rpc_domain')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC端口</div><input type="text" placeholder="端口号，例如：Motrix下载器为16800" class="swal2-input pl-input listener-rpc-port" value="${base.getValue('setting_rpc_port')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC路径</div><input type="text" placeholder="路径，默认为/jsonrpc" class="swal2-input pl-input listener-rpc-path" value="${base.getValue('setting_rpc_path')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC密钥</div><input type="text" placeholder="无密钥无需填写" class="swal2-input pl-input listener-rpc-token" value="${base.getValue('setting_rpc_token')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC保存</div><input type="text" placeholder="文件下载后保存路径，例如：D:\\Downloads\\" class="swal2-input pl-input listener-rpc-dir" value="${base.getValue('setting_rpc_dir')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">当前RPC</div><div><span id="pl-rpcDomain">${base.getValue('setting_rpc_domain')}</span>:<span id="pl-rpcPort">${base.getValue('setting_rpc_port')}</span><span id="pl-rpcPath">${base.getValue('setting_rpc_path')}</span><button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test">测试</button></div></label>`;
			dom += `<label class="pl-setting-label" style="padding-top:0;flex-direction:row-reverse;text-align:right;"><span><a href="https://www.youxiaohou.com/zh-cn/motrix.html#使用指南" target="_blank" class="pl-a" data-no-instant="1">RPC配置说明</a>，适用于RPC下载👆</span></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">终端类型</div><select class="swal2-select pl-input listener-terminal">`;
			Object.keys(terminalType).forEach(k => {
				dom += `<option value="${k}" ${base.getValue('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
			});
			dom += `</select></label>`;
			dom += `<label class="pl-setting-label" style="padding-top:0;flex-direction:row-reverse;text-align:right;"><span><a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" class="pl-a" data-no-instant="1">cURL使用教程</a>，适用于cURL下载👆</span></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">使用油小猴服务器*</div><select class="swal2-select pl-input listener-youxiaohou-server">`;
			Object.keys(monkeyServer).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_youxiaohou_server') === value ? 'selected' : ''}>${monkeyServer[value]}</option>`; });
			dom += `</select></label>`;

			dom += `<button type="button" style="margin-top: 30px;" class="pl-button-mini swal2-deny swal2-styled listener-register">熄灭已经点亮的按钮*</button>`

			dom = '<div>' + dom + '</div>';

			Swal.fire({
				title: '助手设置',
				html: dom,
				icon: 'info',
				iconHtml: '⚙︎',
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				footer: pan.footer,
			});
			doc.on('click', '.listener-register', async function (e) {
				base.unRegisterInit(111111);
			});
			doc.on('click', '.listener-rpc-test', async function (e) {
				e.preventDefault();
				let domain = base.getValue('setting_rpc_domain'),
					port = base.getValue('setting_rpc_port'),
					path = base.getValue('setting_rpc_path'),
					token = base.getValue('setting_rpc_token');
				if (e.target.innerHTML !== "测试") return;
				e.target.innerHTML = "等待";
				e.target.style.opacity = 0.9;
				let result = await base.rpcTest(domain, port, path, token);
				if (result === "success") {
					e.target.innerHTML = "成功";
					e.target.style.backgroundColor = "#52c41a";
				} else {
					e.target.innerHTML = "失败";
					e.target.style.backgroundColor = "#cb1616";
				}
				e.target.style.opacity = "";
				setTimeout(function () {
					e.target.innerHTML = "测试";
					e.target.style.backgroundColor = "";
				}, 3000)
			});
			doc.on('input', '.listener-rpc-domain', async function (e) {
				base.setValue('setting_rpc_domain', e.target.value);
				document.getElementById("pl-rpcDomain").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-rpc-port', async function (e) {
				base.setValue('setting_rpc_port', e.target.value);
				document.getElementById("pl-rpcPort").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-rpc-path', async function (e) {
				base.setValue('setting_rpc_path', e.target.value);
				document.getElementById("pl-rpcPath").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-rpc-token', async function (e) {
				base.setValue('setting_rpc_token', e.target.value);
			});
			doc.on('input', '.listener-rpc-dir', async function (e) {
				base.setValue('setting_rpc_dir', e.target.value);
			});
			doc.on('change', '.listener-terminal', async function (e) {
				base.setValue('setting_terminal_type', e.target.value);
			});
			doc.on('change', '.listener-youxiaohou-server', async function (e) {
				base.setValue('setting_youxiaohou_server', e.target.value);
			});
		},

		// 美化界面
		showBeautify() {
			let dom = '',
				btn = '',
				colorList = ['#09AAFF', '#cc3235', '#518c17', '#ed944b', '#f969a5', '#bca280', '#b673ab', '#574AB8', '#1d2327', '#18a497', '#637dff', '#0d53ff', '#3181f9', '#f8d800', '#0396ff', '#32ccbc', '#f6416c', '#2271b1', '#59524c', '#ff679a', '#f44236', '#fec107', '#8bc24a', '#2594ed', '#9c28b1'],
				colorNameList = ['度盘<br/>经典蓝', '度盘<br/>平安红', '度盘<br/>盎然绿', '度盘<br/>周年橙', '度盘<br/>幸会粉', '度盘<br/>午后棕', '度盘<br/>物语紫', '度盘<br/>星空紫', 'OpenAI<br/>默认黑', 'OpenAI<br/>默认青', '里度<br/>霞光紫', '夸克<br/>极简蓝', '移动<br/>彩云蓝', '果核<br/>柠檬黄', '果核<br/>默认蓝', '果核<br/>碧波绿', '果核<br/>玫瑰红', '文派<br/>默认蓝', '文派<br/>咖啡灰', '哔哩<br/>少女粉', '哔哩<br/>高能红', '哔哩<br/>咸蛋黄', '哔哩<br/>早苗绿', '哔哩<br/>宝石蓝', '哔哩<br/>罗兰紫'];
			dom += `<div style="text-align: center;">带星号的美化项目将在网页刷新后生效</div>`

			colorList.forEach((v, i) => {
				btn += `<div style="background: ${v};border: 1px solid ${v}" class="pl-color-box ${v === base.getValue('setting_theme_color') ? 'listener-color' : 'listener-color'}">
				<div data-color="${v}" class="pl-mask">${colorNameList[i]} ${v === base.getValue('setting_theme_color') ? '<span id="pl-thisColor">(当前)</span>' : ''}</div>
			</div>`;
			});

			dom += `<label class="pl-setting-label"><div class="pl-label">主题颜色</div> <div class="pl-color">${btn}</div></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[百度网盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-baidu-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_baidu_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;
			dom += `<label class="pl-setting-label" style="padding-top:0;flex-direction:row-reverse;text-align:right;"><span>旧版页面会美化,新版页面则是更换主题色👆</span></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[阿里云盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-ali-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_ali_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[天翼云盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-tianyi-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_tianyi_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[迅雷云盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-xunlei-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_xunlei_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[夸克网盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-quark-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_quark_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">[移动云盘]<br/>更换界面为主题颜色*</div><select class="swal2-select pl-input listener-yidong-theme">`;
			Object.keys(assistantTheme).forEach(value => { dom += `<option value="${value}" ${base.getValue('setting_yidong_theme') === value ? 'selected' : ''}>${assistantTheme[value]}</option>`; });
			dom += `</select></label>`;

			dom = '<div>' + dom + '</div>';

			Swal.fire({
				title: '助手美化',
				html: dom,
				icon: 'success',
				iconHtml: '🍃︎',
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				footer: '<div style="text-align: center;">感谢您使用本脚本，给我们一个<a href="https://github.com/hmjz100/Online-disk-direct-link-download-assistant" target="_blank" class="pl-a" data-no-instant="1">Star</a>吧~</div>',
			});
			doc.on('click', '.listener-color', async function (e) {
				if (e.target.dataset.color) {
					if (document.getElementById("pl-thisColor")) {
						document.getElementById("pl-thisColor").remove();
					}
					e.target.innerHTML += '<span id="pl-thisColor">(当前)</span>';
					base.setValue('setting_theme_color', e.target.dataset.color);
					base.addPanLinkerStyle();
				}
			});
			doc.on('change', '.listener-baidu-theme', async function (e) {
				base.setValue('setting_baidu_theme', e.target.value);
			});
			doc.on('change', '.listener-ali-theme', async function (e) {
				base.setValue('setting_ali_theme', e.target.value);
			});
			doc.on('change', '.listener-tianyi-theme', async function (e) {
				base.setValue('setting_tianyi_theme', e.target.value);
			});
			doc.on('change', '.listener-xunlei-theme', async function (e) {
				base.setValue('setting_xunlei_theme', e.target.value);
			});
			doc.on('change', '.listener-quark-theme', async function (e) {
				base.setValue('setting_quark_theme', e.target.value);
			});
			doc.on('change', '.listener-yidong-theme', async function (e) {
				base.setValue('setting_yidong_theme', e.target.value);
			});
		},

		// 调试信息界面
		showDebug() {
			let debugInfo = '';
			let server = '';
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				server = `https://api.youxiaohou.com/config/?ver=${version}&a=${author}`;
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				server = `https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`;
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				server = `https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`;
			} else {
				server = `https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`;
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			debugInfo += `<span>以下内容均为脚本自检信息<br/>本页面仅作为调试使用<span>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[外置]<br/>管理器名称</div>${manageHandler ? manageHandler : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[外置]<br/>管理器版本</div>${manageVersion ? manageVersion : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[内置]<br/>信息服务器</div>[${base.getValue('setting_youxiaohou_server')}]${server ? server : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[内置]<br/>脚本名称</div>${realname ? realname : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[内置]<br/>脚本版本</div>${realversion ? realversion : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[内置]<br/>脚本作者</div>${realauthor ? realauthor : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[上报]<br/>脚本版本</div>${version ? version : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-label"><div class="pl-label">[上报]<br/>脚本作者</div>${author ? author : "无法获取"}</label>`;

			if (pan.num) {
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>初始化暗号</div>${pan.num ? pan.num : "无法获取"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>初始化协议</div>${pan.license ? pan.license : "无法获取"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>UA代理</div><code>${pan.ua ? pan.ua : "此网站暂无"}</code></label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>公众号码</div>${pan.img ? `${pan.img}<img src="${pan.img}"></img>` : "无法获取"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>万能助手</div>${pan.assistant ? pan.assistant : "此网站暂无"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>网盘CDN</div>${pan.mirror ? pan.mirror : "此网站暂无"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>RPC管理</div>${pan.d ? pan.d : "无法获取"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>IDM介绍</div>${pan.idm ? pan.idm : "此网盘暂无"}</label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>提示文本</div><code>${JSON.stringify(pan.init) ? JSON.stringify(pan.init) : "无法获取"}</code></label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>网盘接口</div><code>${JSON.stringify(pan.pcs) ? JSON.stringify(pan.pcs) : "无法获取"}</code></label>`;
				debugInfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>Toast页脚</div>${pan.footer ? pan.footer : "此网站暂无"}</label>`;
			} else {
				debugInfo += `<label>上报的服务器请求未完成，部分信息未能显示</label>`;
			}


			debugInfo = '<div>' + debugInfo + '</div>';

			Swal.fire({
				icon: 'info',
				title: '调试信息',
				html: debugInfo,
				allowOutsideClick: false,
				showCloseButton: true,
				heightAuto: false,
				scrollbarPadding: false,
				confirmButtonText: '关闭'
			});
		},

		// 更新日志界面
		showUpdateLog() {
			Swal.fire({
				icon: 'info',
				title: '更新日志',
				html: `<div style="text-align: left;">
				V1.0.9.4<br/>1、修复因百度网盘 AccessToken 过期导致无法获取链接的 Bug。<br/><br/>
				V1.0.9.3<br/>1、若网盘不支持在分享中下载，将仅显示保存网盘按钮；<br/>2、优化下载界面，支持选择 Iframe 或 Blob 的方式来下载文件，增加按钮的提示文本；<br/>3、优化 CSS 样式，统一了 SweetAlert2 按钮样式，同时适配了 Dark Reader 插件，界面更协调；<br/>4、支持修改油小猴网站主题色；<br/>5、原有主题相关设置现已移动至助手美化页面中。<br/><br/>
				V1.0.9.2<br/>1、修复使用API下载时有可能会导致IDM无限弹窗的Bug。<br/><br/>
				V1.0.9.1<br/>1、修复在百度网盘旧版下脚本无法删除元素的Bug。<br/><br/>
				V1.0.9<br/>1、跟进官方V6.2.7，修复因无法进行百度授权而导致获取直链报错 9019 的 Bug。<br/><br/>
				V1.0.8.9<br/>1、跟进官方V6.2.3，优化保存到网盘提示，修复阿里云盘、移动云盘失效的问题；<br/>2、优化修改网盘主题的代码，减少对页面的破坏。<br/><br/>
				V1.0.8.8<br/>1、修复下载菜单字体过小的Bug。<br/><br/>
				V1.0.8.7<br/>1、修复在阿里云盘分享页面下点击“未点亮”按钮时没有任何反应的Bug；<br/>2、更新并优化网盘界面精简规则；<br/>3、支持更换 百度网盘、阿里云盘、迅雷云盘、夸克网盘、移动云盘 界面的主题颜色。<br/><br/>
				V1.0.8.6<br/>1、新增移动云盘会员中心页面，可在网盘中点击“会员中心”按钮查看(但无法使用第三方支付)。<br/><br/>
				V1.0.8.5<br/>1、跟进官方V6.1.6，修复迅雷网盘分享页面无法选中文件，修复移动云盘无法判断页面。<br/><br/>
				V1.0.8.4<br/>1、修复因重复绑定按钮而导致命令重复执行的Bug；<br/>2、优化调试信息界面排版；<br/>3、移除对百度网盘手机网页版的支持。<br/><br/>
				V1.0.8.3<br/>1、适配阿里云盘新域名alipan.com。<br/><br/>
				V1.0.8.2<br/>1、更换新图标。<br/><br/>
				V1.0.8.1<br/>1、修复因重复绑定按钮而导致RPC下载会发送多条下载请求的Bug；<br/>2、选择不使用油小猴服务器时，“用ghproxy连接Github仓库”更换为“用jsdelivr连接Github仓库”；<br/>3、跟进官方V6.1.4版本，修复移动网盘无法获取链接，支持阿里云盘新域名alipan.com。<br/><br/>
				V1.0.8<br/>1、修复迅雷网盘无法勾选文件。<br/><br/>
				V1.0.7.9<br/>1、更新精简网盘元素匹配规则，防止因通知横条而导致不能点到“API下载”以下的按钮。<br/><br/>
				V1.0.7.8<br/>1、跟进官方V6.1.2，加入V2接口。<br/>2、修复百度网盘下载时因为获取不到accessToken而一直转圈。<br/><br/>
				V1.0.7.7<br/>1、修复百度网盘的按钮会因为主题不同而被改变颜色的Bug；<br/>2、更新夸克网盘按钮与界面。<br/><br/>
				V1.0.7.6<br/>1、修复“注入”功能；<br/>2、黑暗模式支持随设置热切换。<br/><br/>
				V1.0.7.5<br/>1、修复阿里云盘下载逻辑；<br/>2、精简代码；<br/>3、支持深色模式；<br/>4、修改部分提示文本；<br/>5、修改部分CSS；<br/>6、设置可测试RPC连接。<br/><br/>
				V1.0.7.4<br/>1、优化下载逻辑；<br/>2、修复阿里云盘无法使用API下载。<br/><br/>
				V1.0.7.3<br/>1、如果出现网络请求错误时支持自动重新请求；<br/>2、可选择是否使用油小猴服务器。<br/><br/>
				V1.0.7.2<br/>1、修复使用RPC下载时会重复发送链接的Bug。<br/><br/>
				V1.0.7.1<br/>1、[实验功能，不影响正常使用]支持百度网盘手机网页版，勾选文件后可在顶栏找到“下载助手”按钮。<br/><br/>
				V1.0.7<br/>1、重构夸克网盘、阿里云盘按钮。<br/><br/>
				V1.0.6.9<br/>1、下载窗口加入关闭按钮。<br/><br/>
				V1.0.6.8<br/>1、修复夸克网盘按钮错位。<br/><br/>
				V1.0.6.7<br/>1、将百度网盘界面修改为主题色，可在设置选择是否修改；<br/>2、增加主题色名称，更改部分内容颜色；<br/>3、移动云盘API下载支持批量复制；<br/>4、优化控制台输出结果；<br/>5、百度网盘API下载不使用IDM时可以显示剩余时间；<br/>6、“取消点亮按钮”按钮的位置现已移动到设置页面。<br/>7、homo特有的彩蛋又回来力(喜)。<br/><br/>
				V1.0.6.6<br/>1、修复暗号错误。<br/><br/>
				V1.0.6.5<br/>1、修复即使输入正确暗号也不能成功点亮按钮的服务器错误。<br/><br/>
				V1.0.6.4<br/>1、跟进官方V6.1.1版本，修复阿里云盘获取下载链接时的问题。<br/><br/>
				V1.0.6.3<br/>1、照顾小屏幕用户，将始终显示复制全部链接的按钮；<br/>2、增加取消下载时的动画。<br/><br/>
				V1.0.6.2<br/>1、修复部分界面错位，实现CSS内置；<br/>2、百度网盘界面将变得更加简洁。<br/><br/>
				V1.0.6.1<br/>1、新增百度云盘API下载支持复制链接；<br/>2、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；<br/>3、修改CSS，界面会出现更多的主题色；<br/>4、支持在游小猴官网查看暗号；<br/>5、修复部分语法错误。<br/><br/>
				V1.0.6<br/>1、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击API下载；<br/>2、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘。<br/><br/>
				V1.0.5.5<br/>1、感谢<a href="https://github.com/Night-stars-1">Night-stars-1</a>的帮助，修复因为原作者服务器导致的初始化暗号识别错误；<br/>2、修改一些文本以及提供给服务器的信息。<br/><br/>
				V1.0.5.4<br/>1、小修小改css，让主题色出现在更多地方；<br/>2、修改下载链接获取失败的提示；<br/>3、增加更多的主题色，可在助手设置查看；<br/>4、homo彩蛋被删去力（悲）。<br/><br/>
				V1.0.5.3<br/>1、修啦修啦，阿里云盘可以摸到下载菜单了。<br/><br/>
				V1.0.5.2<br/>1、增加脚本信息菜单（没有用）；<br/>2、优化阿里云盘显示svg图片；<br/>3、修改弹窗按钮颜色。<br/><br/>
				V1.0.5.1<br/>1、修复在切换按钮主题后夸克网盘不能正常显示按钮。<br/><br/>
				V1.0.5<br/>1、跟进官方V5.0.4版本；<br/>2、小改动，照着官方版本更正文件名称检测；<br/>3、保留彩蛋，但必须舍弃官方暗号。<br/><br/>
				V1.0.4<br/>大改！<br/>1、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；<br/>2、终于来了，在下载菜单增加“助手设置”“更新日志”按钮；<br/>【再也不用点进油猴管理再进设置了(保留油猴管理内设置)】<br/>3、修改阿里云盘和夸克网盘下载助手按钮样式；<br/>4、增加“取消点亮按钮”油猴菜单；<br/>5、修改部分css，使其与选择的主题更贴切。<br/><br/>
				V1.0.3<br/>1、增加一个小彩蛋； 提示：<br/>homo（需在未点亮按钮状态触发）<br/>【需要重新恢复按钮为未点亮状态请进入 已安装脚本->编辑->开发者->重置到出厂->确定】<br/>2、修改/增加默认主题色。<br/><br/>
				V1.0.2<br/>1、修改并加宽界面，调整部分css，使Sweetalert2界面更美观，更与原版相近；<br/>2、修改部分提示文字，使文字更容易复制。 <br/><br/>
				V1.0.1<br/>1、去除更新提示；<br/>2、更新Sweetalert2至11版本；<br/>3、部分CDN节点更换为jsdelivr。<br/><br/>
				V1.0.0<br/>1、增加“注入”功能（bushi）；<br/>2、去除广告。
				</div>`,
				allowOutsideClick: false,
				showCloseButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				confirmButtonText: '我已阅',
			});
		},

		// 创建浮动标签
		createTip() {
			// 添加提示框到 body
			$('body').append('<div class="pl-tooltip"></div>');

			// 监听所有带有 .listener-tip 类的元素的鼠标移动事件
			$(document).on('mousemove', '.listener-tip', function (e) {
				// 获取提示文字
				let tip = e.currentTarget.dataset.title || `${e.currentTarget.innerText} <span style="margin-left: 10px;color: ${color}">${e.currentTarget.dataset.size}</span>`;

				// 设置提示框的位置并使用 fadeIn() 渐变显示
				$('.pl-tooltip').html(tip).css({
					'left': e.pageX + 10 + 'px',
					'top': e.pageY + 20 + 'px' // 增加一些间距
				}).show();
			});

			$(document).on('mouseleave', '.listener-tip, pl-tooltip', function (e) {
				$('.pl-tooltip').hide();
			});
		},


		// 创建加载弹窗
		createLoading() {
			return $('<div class="pl-loading"><div class="pl-loading-box"><div><div></div><div></div></div></div></div>');
		},

		// 创建下载用的隐藏 iframe
		createDownloadIframe() {
			let $div = $('<div style="padding:0;margin:0;display:block"></div>');
			let $iframe = $('<iframe src="javascript:;" id="downloadIframe" style="display:none"></iframe>');
			$div.append($iframe);
			$('body').append($div);
		},

		// 获取镜像列表
		getMirrorList(link, mirror, thread = 2) {
			let host = new URL(link).host;
			let mirrors = [];
			for (let i = 0; i < mirror.length; i++) {
				for (let j = 0; j < thread; j++) {
					let item = link.replace(host, mirror[i]) + '&'.repeat(j);
					mirrors.push(item);
				}
			}
			return mirrors.join('\n');
		},

		// 监听元素出现并执行回调
		listenElement(element, callback) {
			let checkInterval = 1000; // 检查元素的间隔时间（毫秒）
			let wasElementFound = false; // 用于跟踪元素是否之前已经找到

			function checkElement() {
				if (document.querySelector(element)) {
					wasElementFound = true;
					callback();
				} else if (wasElementFound) {
					wasElementFound = false; // 元素消失后重置标志
				}

				setTimeout(checkElement, checkInterval);
			}
			checkElement();
		},

		// 创建基础样式
		addPanLinkerStyle() {
			color = base.getValue('setting_theme_color');

			let swalcss = `
			.swal2-styled{transition: all 0.2s ease;}
			.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:${color} transparent }
			.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:${color};color:#fff;font-size:1em}
			.swal2-styled.swal2-confirm:hover,.swal2-styled.swal2-deny:hover{opacity:0.8;background-image:none!important}
			.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px ${color}80}
			.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px #dc374180}
			.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}
			.swal2-timer-progress-bar{width:100%;height:.25em;background:${color}33 }
			.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:${color};color:#fff;line-height:2em;text-align:center}
			.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:${color} }
			.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:${color}}
			.swal2-popup {padding:1.25em 0 1.25em;flex-direction:column}
			.swal2-close {position:absolute;top:1px;right:1px;transition: all 0.2s ease;}
			div:where(.swal2-container) .swal2-html-container{padding: 1.3em 1.3em 0.3em;}
			div:where(.swal2-container) button:where(.swal2-close):hover {color:${color}!important;font-size:60px!important}
			div:where(.swal2-icon) .swal2-icon-content {font-family: sans-serif;}
			`;

			// 先监听颜色方案变化 Panlinker-SweetAlert2-Default
			window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
				if (e.matches) {
					// 切换到暗色主题
					base.addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
				} else {
					// 切换到浅色主题
					base.addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
				}
				base.addStyle('Panlinker-SweetAlert2-User', 'style', swalcss);
			});
			// 再修改主题 Panlinker-SweetAlert2-Default
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// 切换到暗色主题
				base.addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
			} else {
				// 切换到浅色主题
				base.addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
			}
			base.addStyle('Panlinker-SweetAlert2-User', 'style', swalcss);

			let uicss = `
			::-webkit-scrollbar {
				width: 8px;
				height: 8px;
				transition: all 0.2s ease;
			}

			::-webkit-scrollbar-track {
				border-radius: 10px;
				background: #fff;
			}

			::-webkit-scrollbar-thumb,
			::-webkit-scrollbar-thumb:hover {
				border-radius: 10px;
			}

			::-webkit-scrollbar-thumb {
				background-color: ${color}90 !important
			}

			::-webkit-scrollbar-thumb:hover {
				background-color: ${color}D0 !important
			}

			.swal2-popup {
				font-size: 16px
			}

			.pl-a {
				color: ${color};
			}

			.pl-a:hover {
				color: ${color}90;
			}

			.pl-popup {
				font-size: 12px;
				width: 90%;
			}

			.pl-popup a:not(.pl-btn-primary) {
				color: ${color};
			}

			.pl-popup a:hover:not(.pl-btn-primary) {
				color: ${color}90;
			}

			.pl-header {
				padding: 0;
				align-items: flex-start;
				border-bottom: 1px solid #eee;
				margin: 0 0 10px;
				padding: 0 0 5px;
			}

			.pl-title {
				font-size: 16px;
				line-height: 1;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.pl-content {
				padding: 0;
				font-size: 12px;
			}

			.pl-main {
				background-color:${color}15;
				overflow: auto;
				border-radius: 10px;
				max-height:calc(${document.documentElement.clientHeight}px - 250px);
			}

			.pl-footer {
				font-size: 15px;
				margin-top: 10px;
				padding-top: 5px;
				color: #f56c6c;
				text-align: center;
				display: flex !important;
				align-items: center;
				justify-content: center;
			}

			.pl-item {
				display: flex;
				align-items: center;
				line-height: 22px;
				height: 50px;
				background-color: ${color}30;
				border-radius: 5px;
				margin: 8px 6px;
			}

			.pl-item-name {
				flex: 0 0 170px;
				text-align: left;
				margin: 6px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				cursor: default;
				height: 30px;
			}

			.pl-item-link {
				flex: 1;
				text-align: left;
				white-space: nowrap;
				text-overflow: ellipsis;
				cursor: pointer;
				overflow: hidden;
			}

			.pl-item-tip {
				display: flex;
				justify-content: space-between;
				flex: 1;
			}

			.pl-ext {
				display: inline-block;
				width: 44px;
				background: #999;
				color: #fff;
				height: 16px;
				line-height: 16px;
				font-size: 12px;
				border-radius: 3px;
			}

			.pl-retry {
				padding: 3px 10px;
				background: #cc3235;
				color: #fff;
				border-radius: 3px;
				cursor: pointer;
			}

			.pl-browserdownload {
				padding: 3px 10px;
				background: ${color};
				color: #fff;
				border-radius: 3px;
				cursor: pointer;
			}

			.pl-item-progress {
				display: flex;
				flex: 1;
				align-items: center
			}

			.pl-progress {
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				box-sizing: border-box;
				line-height: 1;
				position: relative;
				height: 20px;
				flex: 1
			}

			.pl-progress-outer {
				height: 20px;
				border-radius: 100px;
				background-color: #c1c1c1a1;
				overflow: hidden;
				position: relative;
				vertical-align: middle;
			}

			.pl-progress-inner {
				position: absolute;
				left: 0;
				top: 0;
				background-color: ${color};
				border-radius: 100px;
				line-height: 1;
				white-space: nowrap;
				transition: width .6s ease;
				height: 20px;
				display: inline-flex;
				text-align: center;
				align-items: center
			}

			.pl-progress-inner-text {
				display: inline-block;
				vertical-align: middle;
				cursor: default;
				color: #ffffff;
				font-size: 12px;
				margin: 0 5px;
				height: 20px;
				width: 100%;
			}

			.pl-progress-tip {
				flex: 1;
				text-align: right
			}

			.pl-progress-how {
				flex: 0 0 100px;
				background: #ddd;
				border-radius: 3px;
				margin-left: 10px;
				cursor: pointer;
				text-align: center;
				color: #000;
			}

			.pl-progress-back {
				background: #717171;
				cursor: pointer;
				margin: 6px 6px;
				font-size: 12px;
				border: 0;
				border-radius: 4px;
				color: #ffffff;
				outline: none;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.625em 1.1em;
			}

			.pl-progress-stop {
				background: #cc3235;
				cursor: pointer;
				margin: 6px 6px;
				font-size: 12px;
				border: 0;
				border-radius: 4px;
				color: #ffffff;
				outline: none;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.625em 1.1em;
			}

			.pl-progress-inner-text:after {
				display: inline-block;
				content: "";
				height: 100%;
				vertical-align: middle;
			}

			.pl-btn-primary {
				background: ${color};
				border: 0;
				border-radius: 4px;
				color: #ffffff;
				cursor: pointer;
				font-size: 12px;
				outline: none;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 6px 6px;
				padding: 0.625em 1.1em;
				transition: 0.3s opacity;
			}

			.pl-btn-primary:hover {
				opacity: 0.8;
				transition: 0.3s opacity;
			}

			.pl-btn-primary:focus{
				box-shadow:0 0 0 3px ${color}80;
			}

			.pl-btn-success {
				background: #55af28;
			}

			.pl-btn-success:focus{
				box-shadow:0 0 0 3px #55af2880;
			}

			.pl-btn-info {
				background: #606266;
			}

			.pl-btn-info:focus{
				box-shadow:0 0 0 3px #60626680;
			}

			.pl-btn-warning {
				background: #da9328;
			}

			.pl-btn-warning:focus{
				box-shadow:0 0 0 3px #da932880;
			}

			.pl-btn-danger {
				background: #cc3235;
			}

			.pl-btn-danger:focus{
				box-shadow:0 0 0 3px #cc323580;
			}

			.pl-btn-opacity {
				animation: easeOpacity 1.2s 2;
				animation-fill-mode: forwards
			}

			.pl-button-mini {
				padding: 5px 10px;
			}

			.pl-dropdown-menu-item {
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				color: ${color};
				transition: all 0.2s ease;
			}

			.pl-dropdown-menu-item:hover {
				background-color: ${color}15;
			}

			.pl-button-mode {
				padding: 0px;
				padding-left: 0px !important;
				color: ${color} !important;
				transition: all 0.2s ease;
			}

			.pl-button-mode:hover {
				background-color: ${color}33 !important;
			}

			.g-button-menu.pl-button-mode {
				padding: 0px !important;
			}

			.pl-button,
			.pl-dropdown-menu {
				transition: all 0.2s ease;
			}

			.pl-button .pl-dropdown-menu {
				display: none;
			}

			.pl-button:hover .pl-dropdown-menu {
				display: block;
			}

			.pl-button-init {
				opacity: 0.5;
				animation: easeInitOpacity 1.2s 3;
				animation-fill-mode: forwards
			}

			@keyframes easeInitOpacity {
				from {
					opacity: 0.5;
				}

				50% {
					opacity: 1
				}

				to {
					opacity: 0.5;
				}
			}

			@keyframes easeOpacity {
				from {
					opacity: 1;
				}

				50% {
					opacity: 0.35
				}

				to {
					opacity: 1;
				}
			}

			.baidu-button {
				background: ${color} !important;
				border-color: ${color} !important;
				border: 1px solid ${color} !important;
				display: inline-flex;
			}

			.baidu-button:hover {
				background: ${color}b0 !important;
				border-color: ${color} !important;
			}

			header[style="display: none;"]~.pl-button {
				display: inline-block;
				position: fixed;
				top: 0.6em;
				left: 65%;
				z-index: 99999;
			}

			.ali-button {
				background: ${color};
				border: 0 solid transparent;
				font-size: 14px;
				margin-left: 20px;
				padding: 8px 16px;
				position: relative;
				height: 32px;
				border-radius: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--basic_white);
				cursor: pointer;
				transition: all .3s ease;
			}

			.ali-button:hover {
				background: ${color}D0
			}

			.ali-btn-icon {
				vertical-align: -0.2em;
			}

			.tianyi-button {
				margin-right: 20px;
				padding: 4px 12px;
				border-radius: 4px;
				color: #fff;
				font-size: 12px;
				border: 1px solid ${color};
				background: ${color};
				cursor: pointer;
				position: relative;
			}

			.tianyi-button:hover {
				border-color: ${color}b0;
				background: ${color}b0;
			}

			.yidong-button {
				float: left;
				position: relative;
				margin: 20px 24px 20px 0;
				width: 110px;
				height: 36px;
				background: ${color};
				border-radius: 2px;
				font-size: 14px;
				color: #fff;
				line-height: 39px;
				text-align: center;
				cursor: pointer;
			}

			.yidong-share-button {
				display: inline-block;
				position: relative;
				font-size: 14px;
				line-height: 36px;
				height: 36px;
				text-align: center;
				color: #fff;
				border: 1px solid ${color};
				border-radius: 2px;
				padding: 0 24px;
				background: ${color};
			}

			.yidong-share-button:hover {
				background: ${color}b0;
			}

			.yidong-button:hover {
				background: ${color}b0;
			}

			.yidong-btn {
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGNQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mkUNoAAAACF0Uk5TAAbHPP9AMRtr9PwrV8zqXfmNgDODHTLD4iJxhGJJ8Z269m0aDgAAAMZJREFUeJzd0ssOgyAQBVDUK74rWq0PFP3/ryxqTMdGqJtuvGHD5CTDTGDs3nFc17kEPcC7BH3At/Tjvk5AYbBU+NcrwghL4uQDk3gtRSF1KWCCQEpghkd+3jp/ICNQoDANU0AQCJQmWAJ3h8+q3mFdvSywQdttsGvRWGAPLReoHXrbG6WWAzBoJ+3DaCnWI39NLbcvszvLeuTB2fYoqbNBNo7sGjzk31BhMsEJitxmiKk8zSQwE8gFjBGcNuCzOmdqPrib5A2JRQ7qK9g+hQAAAABJRU5ErkJggg==);
				height: 20px;
				line-height: 20px;
				display: inline-block;
				background-repeat: no-repeat;
				background-size: 20px 20px;
				text-indent: 25px;
			}

			.xunlei-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				border: 0 solid transparent;
				border-radius: 5px;
				box-shadow: 0 0 0 0 transparent;
				width: fit-content;
				white-space: nowrap;
				flex-shrink: 0;
				font-size: 14px;
				line-height: 1.5;
				outline: 0;
				touch-action: manipulation;
				transition: background .3s ease, color .3s ease, border .3s ease, box-shadow .3s ease;
				color: #fff;
				background: ${color};
				margin-left: 12px;
				padding: 0px 12px;
				position: relative;
				cursor: pointer;
				height: 36px;
			}

			.xunlei-button:hover {
				background: ${color}b0;
			}

			.quark-button {
				background: ${color} !important;
				background-color:${color} !important;
			}

			.quark-button:hover {
				background: ${color}b0 !important;
				background-color:${color}b0 !important;
			}

			.quark-btn-icon {
				width: 20px;
				height: 20px;
				vertical-align: -0.3em;
			}

			.element-clicked {
				opacity: 0.5;
			}

			.pl-extra {
				margin-top: 10px;
				background-color:${color}15;
				border-radius: 10px;
				display: flex
			}

			.pl-extra button {
				flex: 1
			}

			.pointer {
				cursor: pointer
			}

			.pl-setting-label {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 10px;
			}

			.pl-label {
				flex: 0 0 100px;
				text-align: left;
			}

			.pl-input {
				flex: 1;
				padding: 8px 10px !important;
				border: 1px solid #c2c2c2;
				border-radius: 5px;
				font-size: 14px !important;
				min-width: 300px;
				margin: 0;
				darktheme
			}

			.init-input {
				width: 400px;
				margin: 1em 1em 3px;
				font-size: 20px;
				text-align: center;
				font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
				font-weight: 300;
			}

			.pl-color {
				flex: 1;
				display: flex;
				flex-wrap: wrap
			}

			.pl-color-box {
				width: 55px;
				height: 55px;
				margin: 10px 10px 0 0;
				box-sizing: border-box;
				border: 1px solid #fff;
				cursor: pointer
			}

			.pl-mask {
				width: 53px;
				height: 53px;
				opacity: 0;
				transition: opacity 0.3s;
				color: #fff;
				font-size: 13px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}

			.pl-color-box:hover .pl-mask {
				opacity: 1;
			}

			.pl-close:focus {
				outline: 0;
				box-shadow: none;
			}

			.tag-danger {
				color: #cc3235;
				margin: 0 5px;
			}

			.pl-tooltip {
				position: absolute;
				color: #ffffff;
				max-width: 600px;
				font-size: 12px;
				padding: 5px 10px;
				background: #333;
				border-radius: 5px;
				z-index: 110000;
				line-height: 1.3;
				display: none;
				word-break: break-all;
			}

			@keyframes load {
				0% {
					transform: rotate(0deg)
				}

				100% {
					transform: rotate(360deg)
				}
			}

			.pl-loading-box>div>div {
				position: absolute;
				border-radius: 50%;
			}

			.pl-loading-box>div>div:nth-child(1) {
				top: 9px;
				left: 9px;
				width: 82px;
				height: 82px;
				background: #ffffff;
			}

			.pl-loading-box>div>div:nth-child(2) {
				top: 14px;
				left: 38px;
				width: 25px;
				height: 25px;
				background: #666666;
				animation: load 1s linear infinite;
				transform-origin: 12px 36px;
			}

			.pl-loading {
				width: 16px;
				height: 16px;
				display: inline-block;
				overflow: hidden;
				background: none;
			}

			.pl-loading-box {
				width: 100%;
				height: 100%;
				position: relative;
				transform: translateZ(0) scale(0.16);
				backface-visibility: hidden;
				transform-origin: 0 0;
			}

			.pl-loading-box div {
				box-sizing: content-box;
			}

			.pl-dropdown-menu {
				position: absolute;
				padding: 5px 0;
				color: ${color};
				background: themecolor;
				z-index: 999;
				width: 110px;
				border-radius: 5px;
				box-shadow: 0 1px 6px ${color}33;
				-webkit-box-shadow: 0 1px 6px ${color}33;
				text-align: center;
				border: none;
				transition: all 0.2s ease;
			}

			.pl-button-save {
				background-color: ${color} !important;
				color:#fff !important;
			}

			.pl-button-save:hover {
				background-color: ${color}D0 !important;
				color:#fff !important;
			}

			.swal2-container {
				z-index: 100000;
			}

			body.swal2-height-auto {
				height: inherit;
			}

			svg.icon-rpc-devices {
				width: 13px;
				height: 13px;
			}

			[class^="swal2-"], [class*="pl-btn"] {
				transition:all 0.3s ease;
			}

			@media (prefers-color-scheme: dark) [data-theme=system] * {
				color-scheme: dark;
			}

			/* RGB! */
			@keyframes hue-rotate {
				0% {
					filter: hue-rotate()
				}

				to {
					filter: hue-rotate(-360deg)
				}
			}

			/* Webkit, Opera, IE9, Chrome*/
			::selection {
				background-color: ${color} !important;
				background: ${color} !important;
				color: white !important;
			}

			/* Mozilla Firefox */
			::-moz-selection {
				background-color: ${color} !important;
				background: ${color} !important;
				color: white !important;
			}

			/* 百度网盘 */
			:not([class*="rwl-exempt"]) ::selection {
				background-color: ${color} !important;
				background: ${color} !important;
				color: white !important;
			}
			`;
			// 先监听颜色方案变化
			window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
				if (e.matches) {
					// 切换到暗色主题
					let dark = uicss.replace("themecolor", "#19191a").replace("darktheme", "color-scheme: dark;");
					base.addStyle('Panlinker-UI', 'style', dark);
				} else {
					// 切换到浅色主题
					let light = uicss.replace("themecolor", "#fff").replace("darktheme", "");
					base.addStyle('Panlinker-UI', 'style', light);
				}
			});
			// 再修改主题
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				let dark = uicss.replace("themecolor", "#19191a").replace("darktheme", "color-scheme: dark;");
				base.addStyle('Panlinker-UI', 'style', dark);
			} else {
				// 切换到浅色主题
				let light = uicss.replace("themecolor", "#fff").replace("darktheme", "");
				base.addStyle('Panlinker-UI', 'style', light);
			}

			if (/(pan|yun).baidu.com/.test(location.host) && location.pathname !== '/disk/home' && base.getValue('setting_baidu_theme') === 'yes') {
				base.setColors([
					['#717fff', `${color}`],
					['#717FFF', `${color}`],
					['#06a8ff', `${color}`],
					['#06A8FF', `${color}`],
					['#06a7ff', `${color}`],
					['#06A7FF', `${color}`],
					['#dcdfe6', `${color}`],
					['#DCDFE6', `${color}`],
					['#0095ff', `${color}`],
					['#0095FF', `${color}`],
					['#09aaff', `${color}`],
					['#09AAFF', `${color}`],
					['#0ca6ff', `${color}`],
					['#0CA6FF', `${color}`],
					['#5040ff', `${color}`],
					['#5040FF', `${color}`],
					['#454d5a', `${color}`],
					['#454D5A', `${color}`],
					['#a2abbd', `${color}`],
					['#A2ABBD', `${color}`],
					['#030b1a', `${color}`],
					['#030B1A', `${color}`],
					['#afb3bf', `${color}`],
					['#AFB3BF', `${color}`],
					['#ff436a', `${color}`],
					['#FF436A', `${color}`],
					['#03081a', `${color}`],
					['#03081A', `${color}`],
					['#2974b6', `${color}`],
					['#2974B6', `${color}`],
					['#0596e6', `${color}`],
					['#0596E6', `${color}`],

					['#C3EAFF', `${color}`],
					['#c0d9fe', `${color}50`],
					['#0098EA', `${color}D0`],

					['#38b9ff', `${color}D0`],
					['#38B9FF', `${color}D0`],
					['#42d8ff', `${color}D0`],
					['#42D8FF', `${color}D0`],
					['#a48dff', `${color}D0`],
					['#A48DFF', `${color}D0`],
					['#6b79f2', `${color}D0`],
					['#6B79F2', `${color}D0`],

					['#9c86f2', `${color}90`],
					['#9C86F2', `${color}90`],
					['#83d3ff', `${color}90`],
					['#83D3FF', `${color}90`],
					['#C4D8F4', `${color}90`],

					['#fafafc', `${color}20`],
					['#FAFAFC', `${color}20`],
					['#f5fbff', `${color}20`],
					['#F5FBFF', `${color}20`],
					['#b4e5ff', `${color}20`],
					['#B4E5FF', `${color}20`],
					['#f0faff', `${color}20`],
					['#F0FAFF', `${color}20`],
					['#c4d8f4', `${color}20`],

					['#f1f3f8', `${color}15`],
					['#F1F3F8', `${color}15`],

					['#f2faff', `${color}10`],
					['#F2FAFF', `${color}10`],
					['#eef9fe', `${color}10`],
					['#EEF9FE', `${color}10`],
					['#f7f9fc', `${color}10`],
					['#F7F9FC', `${color}10`],
					['#f5f6fa', `${color}10`],
					['#F5F6FA', `${color}10`],
					['#b4e5ff', `${color}10`],
					['#B4E5FF', `${color}10`],
					['#e6f6ff', `${color}10`],
					['#E6F6FF', `${color}10`],

					['6,167,255,.1', base.hexToRgba(`${color}15`)],
					['6,167,255,.23', base.hexToRgba(`${color}3b`)],
					['164,141,255,.2', base.hexToRgba(`${color}30`)],
					['196,182,255,.2', base.hexToRgba(`${color}20`)],
					['113,127,255,.2', base.hexToRgba(`${color}40`)],
					['3,8,26,.6', base.hexToRgba(`${color}D0`)],
					['255,32,102,.4', base.hexToRgba(`${color}66`)],
				]);
			};
			if (/(pan|yun).baidu.com/.test(location.host) && base.getValue('setting_baidu_theme') === 'yes') {
				base.addStyle('Panlinker-UI-Baidu', 'style', `
				#layoutMain,
				.DxdbeCb {
					border-radius: 10px;
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
					background: #ffffffA0 !important
				}
				.KPDwCE,
				.DxdbeCb .OFaPaO .tanwePYr,
				.xGLMIab .fufHyA:hover,
				.module-search-timeline .form-box {
					background: #ffffffA0 !important;
				}
				.KPDwCE .JDeHdxb,
				.NHcGw .AuPKyz,
				.xGLMIab .tvPMvPb,
				.xGLMIab .FcQMwt,
				.cazEfA .yfHIsP,
				.hscjZ4QL .bbxnZ0Bq .ehnyLxWZ span,
				.module-topToolBar,
				.module-timeline-view .timeline-title-curday {
					background: transparent !important;
					border-bottom: 0;
				}
				.MdLxwM {
					background :#fff !important;
				}
				.aside-absolute-container .QGOvsxb .remainingSpaceUi_span {
					/*background: ${color} !important;*/
					background: #8af248 !important;
					border-radius: 10px 0 0 10px;
					border-right: #fff 1px solid;
					border-bottom: #fff 1px solid;
				}
				.xtJbHcb .CDaavKb .KQcHyA {
					background: rgb(244,207,0) !important;
					padding: 8px 15px;
				}
				.xtJbHcb .web-header-nav-new-version-inner {
					background: ${color} !important;
					padding: 8px 15px;
					line-height: 15px;
					width: auto;
					height: auto;
				}
				a {
					transition: all 0.2s ease !important;
				}
				#bd-main .bd-left {
					margin: auto !important;
				}
				.verify-input input {
					padding-left: 0 !important;
					text-align: center !important;
				}
				.verify-input input:focus {
					border: 2px solid ${color} !important;
				}
				`, 'body');
				base.setColors([
					['#717fff', `${color}`],
					['#717FFF', `${color}`],
					['#06a8ff', `${color}`],
					['#06A8FF', `${color}`],
					['#06a7ff', `${color}`],
					['#06A7FF', `${color}`],
					['#dcdfe6', `${color}`],
					['#DCDFE6', `${color}`],
					['#0095ff', `${color}`],
					['#0095FF', `${color}`],
					['#09aaff', `${color}`],
					['#09AAFF', `${color}`],
					['#0ca6ff', `${color}`],
					['#0CA6FF', `${color}`],
					['#5040ff', `${color}`],
					['#5040FF', `${color}`],
					['#454d5a', `${color}`],
					['#454D5A', `${color}`],
					['#a2abbd', `${color}`],
					['#A2ABBD', `${color}`],
					['#030b1a', `${color}`],
					['#030B1A', `${color}`],
					['#afb3bf', `${color}`],
					['#AFB3BF', `${color}`],
					['#ff436a', `${color}`],
					['#FF436A', `${color}`],
					['#03081a', `${color}`],
					['#03081A', `${color}`],
					['#2974b6', `${color}`],
					['#2974B6', `${color}`],
					['#0596e6', `${color}`],
					['#0596E6', `${color}`],

					['#C3EAFF', `${color}`],
					['#c0d9fe', `${color}50`],
					['#0098EA', `${color}D0`],

					['#38b9ff', `${color}D0`],
					['#38B9FF', `${color}D0`],
					['#42d8ff', `${color}D0`],
					['#42D8FF', `${color}D0`],
					['#a48dff', `${color}D0`],
					['#A48DFF', `${color}D0`],
					['#6b79f2', `${color}D0`],
					['#6B79F2', `${color}D0`],

					['#9c86f2', `${color}90`],
					['#9C86F2', `${color}90`],
					['#83d3ff', `${color}90`],
					['#83D3FF', `${color}90`],
					['#C4D8F4', `${color}90`],

					['#fafafc', `${color}20`],
					['#FAFAFC', `${color}20`],
					['#f5fbff', `${color}20`],
					['#F5FBFF', `${color}20`],
					['#b4e5ff', `${color}20`],
					['#B4E5FF', `${color}20`],
					['#f0faff', `${color}20`],
					['#F0FAFF', `${color}20`],
					['#c4d8f4', `${color}20`],

					['#f1f3f8', `${color}15`],
					['#F1F3F8', `${color}15`],

					['#f2faff', `${color}10`],
					['#F2FAFF', `${color}10`],
					['#eef9fe', `${color}10`],
					['#EEF9FE', `${color}10`],
					['#f7f9fc', `${color}10`],
					['#F7F9FC', `${color}10`],
					['#f5f6fa', `${color}10`],
					['#F5F6FA', `${color}10`],
					['#b4e5ff', `${color}10`],
					['#B4E5FF', `${color}10`],
					['#e6f6ff', `${color}10`],
					['#E6F6FF', `${color}10`],

					['6,167,255,.1', base.hexToRgba(`${color}15`)],
					['6,167,255,.23', base.hexToRgba(`${color}3b`)],
					['164,141,255,.2', base.hexToRgba(`${color}30`)],
					['196,182,255,.2', base.hexToRgba(`${color}20`)],
					['113,127,255,.2', base.hexToRgba(`${color}40`)],
					['3,8,26,.6', base.hexToRgba(`${color}D0`)],
					['255,32,102,.4', base.hexToRgba(`${color}66`)],
				], "other");
			};
			if (/www.(aliyundrive|alipan).com/.test(location.host) && base.getValue('setting_ali_theme') === 'yes') {
				base.setColors([
					['#3763ff', `${color}`],
					['#8664ff', `${color}D0`],
					['99, 125, 255', base.hexToRgba(`${color}`)],
					['132, 133, 141', base.hexToRgba(`${color}`)],
					['112, 136, 255', base.hexToRgba(`${color}`)],
					['97, 122, 250', base.hexToRgba(`${color}`)],
					['68, 109, 255', base.hexToRgba(`${color}`)],
					['82, 110, 250', base.hexToRgba(`${color}20`)],
					['122, 144, 255', base.hexToRgba(`${color}D0`)],
					['138, 157, 255', base.hexToRgba(`${color}D0`)],
					['49, 49, 54', base.hexToRgba(`${color}`)],
				]);
			};
			if (/cloud.189.cn/.test(location.host) && base.getValue('setting_tianyi_theme') === 'yes') {
				base.setColors([
					['#2b89ea', `${color}`],
					['#1874d3', `${color}F0`],
					['#1890ff', `${color}`],
					['#388fc9', `${color}`],
					['#0087ff', `${color}`],
					['#255697', `${color}`],
					['#3ea6ff', `${color}80`],
					['#1d52f2', `${color}`],
					['#3699ff', `${color}D0`],
					['#f4f9fe', `${color}10`],
					['#eaf5ff', `${color}20`],
				], "other");
			}
			if (/pan.xunlei.com/.test(location.host) && base.getValue('setting_xunlei_theme') === 'yes') {
				base.setColors([
					['#3f85ff', `${color}`],
					['63,133,255,.1', base.hexToRgba(`${color}20`)],
					['#2670ea', `${color}D0`],
					['#619bff', `${color}D0`],
					['#ecf3ff', `${color}10`],
					['#f6faff', `${color}10`],
					['#1a2845', `${color}20`],
					['#eee', `${color}20`],
				], "other");
				base.addStyle('Panlinker-UI-Xunlei', 'style', `
					.web-header {
						background: linear-gradient(0deg,${color}D0,${color})
					}
				`);
			};
			if (/pan.quark.cn/.test(location.host) && base.getValue('setting_quark_theme') === 'yes') {
				base.setColors([
					['#0d53ff', `${color}`],
					['#e6f1ff', `${color}20`],
					['#f0faff', `${color}20`],
					['#7da3ff', `${color}D0`],
					['#ddd', `${color}D0`],
					['17,17,17,.9', base.hexToRgba(`${color}D0`)],
					['40,40,255,.04', base.hexToRgba(`${color}20`)],
					['#f7f7ff', 'transparent'],
					['238,247,255,0', base.hexToRgba(`${color}00`)],
				]);
				base.addStyle('Panlinker-UI-Quark', 'style', `
				.file-list .hover-oper .hover-transparent-bg {
					background: transparent !important;
				}
				`);
			};
			if (/(yun|caiyun).139.com/.test(location.host) && base.getValue('setting_yidong_theme') === 'yes') {
				base.setColors([
					['#3181f9', `${color}`],
					['#5a9afa', `${color}`],
					['#98c0fc', `${color}D0`],
					['#2d76e5', `${color}D0`],
					['49,129,249,.08', base.hexToRgba(`${color}20`)],
				]);
			};
			if (/.*.youxiaohou.com/.test(location.host)) {
				base.setColors([
					['#00aefe', `${color}`],
					['#4e6e8e', `${color}`],
					['#009fe8', `${color}`],
					['#008fd1', `${color}`],
					['#05b0ff', `${color}D0`],
				], "other");
				base.addStyle('Panlinker-UI-Youxiaohou', 'style', `
					a[aria-label="View source on GitHub"] svg[style^="fill"] {
						fill: ${color} !important;
					}
				`);
			};
		},

		// 暗号界面
		async initDialog() {
			let secret = ""
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				secret = "当前暗号是‘" + pan.num + "’";
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				secret = "当前开源协议是‘" + pan.license + "’,暗号是‘" + pan.num + "’";
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				secret = "当前暗号是‘" + pan.num + "’";
			} else {
				base.setValue('setting_youxiaohou_server', 'v2');
				secret = '<span style="color:red">检测到当前配置不正确，已自动修复<br/>请在刷新页面后再继续输入</span>';
			}
			let dialog = await Swal.fire({
				title: `请阅读完以下全文再继续`,
				allowOutsideClick: false,
				showCloseButton: true,
				showDenyButton: true,
				confirmButtonText: '确定',
				heightAuto: false,
				scrollbarPadding: false,
				html: `<div><img style="width: 250px;margin-bottom: 10px;" src="${pan.img}" alt="${pan.img}">
				<input class="swal2-input init-input" id="init" type="text" placeholder="${pan.init[1]}"></div>
				<div><span>服务器说道: “${pan.init[0]}”；</span></div>
				<div><span>脚本说道: “${secret}”。</span></div>
				<div>↓</div>
				<div><span>但史丹利不知道的是,他可以按下<span style="color:red;font-style:italic;vertical-align:unset;">红色按钮</span>来点亮按钮</span></div>
				<div><span>或者有仪式感地 输入以上暗号/开源协议 点亮</span></div>
				<div><span>输入一些<span style="font-style:italic;vertical-align:unset;">恶臭的数字</span>以及<span style="font-style:italic;vertical-align:unset;">特殊的时间戳</span>甚至有彩蛋</span></div>
				<div>↓</div>
				<div><span><a target="_blank" href="https://www.youxiaohou.com" style="vertical-align:unset;">原作者</a>开发很辛苦,所以请有能力的你请支持下他的公众号</span></div>
				<div><span>实在不行的话,那就来给这个改版点个<a href="https://github.com/hmjz100/Online-disk-direct-link-download-assistant/" style="vertical-align:unset;">Star</a>吧...</span></div>
				<div><span>点亮后不仅能精简网盘界面 还能改变众多网盘主题色哦!</span></div>
				`,
				denyButtonText: '我就不输入,点我“注入”直接点亮'
			});
			if (dialog.isDenied) {
				console.log("【（改）网盘直链下载助手】\n正在注入点亮按钮设置项目...");
				message.warning("正在注入设置项目...");
				setTimeout(function () {
					base.setValue('setting_init_code', pan.num);
					base.setValue('license', pan.license);
					message.success("注入成功了!");
					setTimeout(function () {
						message.success(pan.init[2]);
						setTimeout(function () {
							location.reload();
						}, 1500);
					}, 1500);
				}, 2500);
			};
			if (dialog.isConfirmed) {
				if (pan.num === $('#init').val() || pan.license === $('#init').val()) {
					console.log("【（改）网盘直链下载助手】\n暗号或协议正确")
					message.success(pan.init[2]);
					setTimeout(function () {
						base.setValue('setting_init_code', pan.num);
						base.setValue('license', pan.license);
						location.reload();
					}, 3000)
				} else if ($('#init').val() === '114514' || $('#init').val() === '1919810' || $('#init').val() === '1145141919810') {
					/*---
						homo彩蛋又回来力（喜）
						imageUrl: 'https://pic4.zhimg.com/80/v2-1b97a088e156c015108dec663bba8b04.jpg',
						imageUrl: 'https://lh1.hetaousercontent.com/img/7d4c1c0b4adb0e95.jpg',
					*/
					await Swal.fire({
						icon: 'error',
						title: '1145141919810',
						html: '<span>homo特有的数字当然不行啦<br/>哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>',
						timer: 4000,
						imageUrl: 'https://pic1.zhimg.com/v2-1b97a088e156c015108dec663bba8b04.avis',
						allowOutsideClick: false,
						timerProgressBar: true,
						showConfirmButton: false,
						showDenyButton: true,
						heightAuto: false,
						scrollbarPadding: false,
						denyButtonText: '哼哼哼啊啊啊啊啊啊啊啊啊啊',
					});
					message.info("成就：你触发了一个homo特有的彩蛋！");
					setTimeout(function () {
						Swal.fire({
							title: '1145141919810',
							text: 'homo特有的数字当然不行啦...吗？',
							icon: 'question',
							imageUrl: 'https://lh1.hetaousercontent.com/img/7d4c1c0b4adb0e95.jpg',
							showConfirmButton: false,
							allowOutsideClick: false,
						});
						setTimeout(function () {
							base.setValue('setting_init_code', pan.num);
							base.setValue('license', pan.license);
							message.success("成就：哼哼哼啊啊啊啊啊啊啊啊地注入成功(喜)");
							location.reload();
						}, 3000)
					}, 4000)
				} else if ($('#init').val() === '1562118175') {
					await Swal.fire({
						icon: 'error',
						title: "What's your problem?",
						html: '<span>那天AI开发者大会上，有人给AI‘泼冷水’。<br/>我们想说，AI前进的道路上会有各种各样想象不到的事情发生，但我们添加会员制的决心不会改变。</span>',
						timer: 5000,
						imageUrl: 'https://pic1.zhimg.com/v2-5fef2a8993a3fff57c6381dfb3a0f577.avis',
						allowOutsideClick: false,
						timerProgressBar: true,
						showConfirmButton: false,
						showDenyButton: true,
						heightAuto: false,
						scrollbarPadding: false,
						denyButtonText: '怡宝',
					});
					message.info("成就：你触发了宏彦获水彩蛋！");
					setTimeout(function () {
						base.setValue('setting_init_code', pan.num);
						base.setValue('license', pan.license);
						message.success("成就：你靠一瓶怡宝注入成功");
						location.reload();
					}, 4000)
				} else {
					console.log("【（改）网盘直链下载助手】\n暗号错误")
					await Swal.fire({
						imageUrl: pan.img,
						title: pan.init[3],
						heightAuto: false,
						scrollbarPadding: false,
						html: `<div><span>${pan.init[4]}<br/>你可以在返回后选择“注入”立即点亮按钮，<br/>或者在输入框键入以下暗号：“${pan.num}”。</span></div>`,
						confirmButtonText: '重新输入',
					});
					await this.initDialog();
					return;
				};
			}
		},
		/*--- waitForKeyElements(): 一个实用函数，用于 Greasemonkey 脚本，
		它可以检测和处理AJAX加载的内容。
		使用示例：
			base.waitForKeyElements (
				"div.comments"
				, commentCallbackFunction
			);
			// 页面特定的函数，用于在找到节点时执行我们想要的操作。
			function commentCallbackFunction (jNode) {
				jNode.text ("waitForKeyElements() 更改了这段注释。");
			}
		重要提示：这个函数需要你的脚本加载了jQuery。
		*/
		waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
			var targetNodes, btargetsFound;

			if (typeof iframeSelector == "undefined")
				targetNodes = $(selectorTxt);
			else
				targetNodes = $(iframeSelector).contents()
					.find(selectorTxt);

			if (targetNodes && targetNodes.length > 0) {
				btargetsFound = true;
				targetNodes.each(function () {
					var jThis = $(this);
					var alreadyFound = jThis.data('alreadyFound') || false;

					if (!alreadyFound) {
						//--- 调用载荷函数。
						var cancelFound = actionFunction(jThis);
						if (cancelFound) {
							btargetsFound = false;
						} else {
							jThis.data('alreadyFound', true);
						}
					}
				});
			} else {
				btargetsFound = false;
			}

			//--- 获取这个选择器的定时器控制变量。
			var controlObj = base.waitForKeyElements.controlObj || {};
			var controlKey = selectorTxt.replace(/[^\w]/g, "_");
			var timeControl = controlObj[controlKey];

			//--- 现在根据情况设置或清除定时器。
			if (btargetsFound && bWaitOnce && timeControl) {
				//--- 唯一需要清除定时器的情况。
				clearInterval(timeControl);
				delete controlObj[controlKey]
			} else {
				//--- 如果需要的话，设置一个定时器。
				if (!timeControl) {
					timeControl = setInterval(function () {
						base.waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
					}, 1000);
					controlObj[controlKey] = timeControl;
				}
			}
			base.waitForKeyElements.controlObj = controlObj;
		},
	};
	// 用于油小猴服务器检测的脚本信息,防止服务器返回更新信息
	let author = base.getValue('setting_script_author'),
		version = base.getValue('setting_script_version')

	//百度网盘
	let baidu = {

		_getExtra() {
			let seKey = decodeURIComponent(base.getCookie('BDCLND'));
			return '{' + '"sekey":"' + seKey + '"' + "}";
		},

		_getSurl() {
			let reg = /(?<=s\/|surl=)([a-zA-Z0-9_-]+)/g;
			if (reg.test(location.href)) {
				return location.href.match(reg)[0];
			}
			return '';
		},

		_getFidList() {
			let fidlist = [];
			for (const v of selectList) {
				if (+v.isdir !== 1) {
					fidlist.push(v.fs_id);
				}
			}
			return '[' + fidlist + ']';
		},

		_resetData() {
			progress = {};
			$.each(request, function (key) {
				(request[key]).abort();
			});
			$.each(ins, function (key) {
				clearInterval(ins[key]);
			});
			idm = {};
			ins = {};
			request = {};
		},

		setBDUSS() {
			try {
				GM_cookie && GM_cookie('list', { name: 'BDUSS' }, (cookies, error) => {
					if (!error) {
						let BDUSS = cookies?.[0]?.value;
						if (BDUSS) {
							base.setStorage("baiduyunPlugin_BDUSS", { BDUSS });
						}
					}
				});
			} catch (e) {
				console.error("【（改）网盘直链下载助手】\nsetBDUSS\n错误信息：", e)
				try {
					let BDUSS = document.cookie.match(/BDUSS=(.*?)(;|$)/);
					base.setStorage("baiduyunPlugin_BDUSS", { BDUSS: BDUSS });
				} catch (e) {
					console.error("【（改）网盘直链下载助手】\nsetBDUSS\n错误信息：", e)
				}
			}
		},

		getBDUSS() {
			let baiduyunPlugin_BDUSS = base.getStorage('baiduyunPlugin_BDUSS') ? base.getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}';
			return baiduyunPlugin_BDUSS.BDUSS || '';
		},

		convertLinkToAria(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				filename = base.fixFilename(filename);
				return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${ua}" --header "Cookie: BDUSS=${BDUSS}"`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		convertLinkToBC(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				let cookie = `BDUSS=${BDUSS}`;
				let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(cookie)}&user_agent=${encodeURIComponent(ua)}ZZ`;
				return encodeURIComponent(`bc://http/${base.encode(bc)}`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		convertLinkToCurl(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				let terminal = base.getValue('setting_terminal_type');
				filename = base.fixFilename(filename);
				return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${ua}" -b "BDUSS=${BDUSS}"`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:百度网盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			doc.on('mouseenter mouseleave click', '.pl-button.g-dropdown-button', function (e) {
				if (e.type === 'mouseleave') {
					$(e.currentTarget).removeClass('button-open');
				} else {
					$(e.currentTarget).addClass('button-open');
					$(e.currentTarget).find('.pl-dropdown-menu').show();
				}
			});
			doc.on('mouseleave', '.pl-button.g-dropdown-button .pl-dropdown-menu', function (e) {
				$(e.currentTarget).hide();
			});

			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				baidu.getPCSLink();
			});
			doc.on('click', '.pl-button-save', async function (e) {
				e.preventDefault();
				selectList = baidu.getSelectedList();
				if (selectList.length === 0) {
					return message.error('提示：<br/>请勾选要保存到网盘的文件哦~');
				}
				message.info('提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~');
				await base.sleep(500);
				document.querySelector('.tools-share-save-hb').click();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				base.get(o.link[0].dataset.link, { "User-Agent": pan.ua }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					let isIDM = idm[index] || false;

					if (isIDM) {
						// 处理IDM的代码
						o.tip.hide();
						o.progress.hide();
						o.copy.show();
						o.directLink.show()
						o.link.text('链接已被IDM捕获~请查看IDM下载窗口哦!').animate({ opacity: '0.5' }, "slow").show();
						clearInterval(ins[index]);
						setTimeout(function () {
							o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
						}, 2000)
						idm[index] = false;
					} else {
						// 处理普通下载的情况...
						let currentTime = Date.now();
						let elapsedTime = currentTime - startTime;
						let totalProgress = prog / 100;
						let totalElapsedSeconds = elapsedTime / 1000;
						let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
						let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

						// 将剩余时间转换为天、时、分、秒
						let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
						remainingTimeSeconds %= (60 * 60 * 24);

						let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
						remainingTimeSeconds %= (60 * 60);

						let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
						let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

						// 计算下载速度
						let loaded = prog * size / 100; // 已下载数据量
						let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
						let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
						let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

						// 更新上一次的数据
						prevLoaded = loaded;
						prevTime = currentTime;

						// 更改界面
						o.link.hide();
						o.directLink.hide();
						o.tip.hide();
						o.stop.show();
						o.copy.hide();
						o.progress.show();

						// 更新进度条
						$width.css('width', prog + '%');

						// 更新进度条文本
						let timeText = '';
						if (Number.isFinite(remainingDays) && remainingDays > 0) {
							timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
							timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
							timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
							timeText = remainingSeconds + '秒';
						} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
							timeText = '即将完成';
						} else {
							timeText = '计算中...';
						}

						let speedText = '';
						speedText = base.sizeFormat(downloadSpeed)
						$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

						if (prog === 100) {
							setTimeout(function () {
								clearInterval(ins[index]);
								progress[index] = 0;
								o.item.find('.pl-progress-stop').hide();
								o.howidm.hide();
								$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
								o.back.show()
								setTimeout(function () {
									o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
								}, 3000)
							}, 3000)
						}
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-download-all', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				if (!e.target.dataset.link) {
					$(e.target).removeClass('listener-copy-all').addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					base.setClipboard(decodeURIComponent(e.target.dataset.link));
					$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
					setTimeout(
						function () {
							$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
						}, 2000
					)
				}
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await baidu.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function (e) {
				e.preventDefault();
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
			document.documentElement.addEventListener('mouseup', function (e) {
				if (e.target.nodeName === 'A' && ~e.target.className.indexOf('pl-a')) {
					e.stopPropagation();
				}
			}, true);
		},

		removeAD() {
			base.waitForKeyElements(".wp-s-header-user__vip-center", function (tag) {
				tag.remove();
			});
			base.waitForKeyElements(".wp-s-header-user__create-team-content", function (tag) {
				tag.remove();
			});
			base.waitForKeyElements(".app-user-vip-center-box.vip-center-type-2", function (tag) {
				tag.remove();
			}, true);
			base.waitForKeyElements(".wp-s-header__vip-btn-tip", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".app-user-vip-center-tip", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements("#web-header-text-s-45", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header__vip-btn", function (tag) {
				tag[0].innerText = "会员中心";
			}, true);
			base.waitForKeyElements(".KQcHyA", function (tag) {
				tag[0].innerText = "会员中心";
			}, true);
			base.waitForKeyElements(".gOIbzPb", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header-user__create-team-title", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".web-header-ad-item", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".wp-s-header__game-entry", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".bd-aside-ad", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".btn-img-tips", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".nd-operate-guidance", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".module-operation-content", function (tag) {
				tag[0].remove()
				document.querySelector(".module-canvas").click();
			}, true)
			base.waitForKeyElements(".newIcon", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".u-badge__content.is-dot", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-side-options.g-clearfix", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header-user__drop-channel", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".app-download", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('.g-button[title*="手机"]', function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements('.yike-entrance', function (tag) {
				tag.remove();
			})
			base.waitForKeyElements("p.wp-s-aside-nav__main-item-text", function (tag) {
				if (tag[0].innerHTML.match(/(插件|相册|笔记)/) && tag[0].closest('a') && tag[0].closest('a').getAttribute('target') !== "_blank") {
					$(tag[0].closest('a')).fadeOut();
				} else {
					tag[0].innerHTML = tag[0].innerHTML.replace("百度", "");
				}
			}, true);
			base.waitForKeyElements('dd[node-type="header-link"]', function (tag) {
				tag.children().each(function () {
					let tag = $(this);
					if (!tag.attr("node-type")) return;
					let type = tag.attr("node-type");
					if (
						type !== "disk-home" &&
						type !== "mbox-homepage" &&
						type !== "find-apps"
					) {
						tag.fadeOut();
					}
				});
			}, true);
			base.waitForKeyElements(".__yunguanjia", function (tag) {
				tag[0].innerHTML = `
				<div class="yunguanjia-list __yunguanjia row g-clearfix _item sel">
					<span type="radio" class="radio-box _radioInput __yunguanjiaRadio">
						<span class="device-name">添加我的电脑</span>
					</span>
					<div class="__yunguanjiaTips radio-tips" style="display: block;">
						用电脑下载并登录最新百度网盘客户端，即自动完成添加。
						<a href="//pan.baidu.com/download" target="_blank">下载百度网盘客户端</a>
						<br/>
						由 <a>(改)网盘直链下载助手</a> 修复该选项
					</div>
				</div>`;
			}, true)
			// 美化分享页面
			if (pt === 'share') {
				base.waitForKeyElements(`iframe[src^="/buy/ad"]`, function (tag) {
					tag.fadeOut();
				}, true)
				base.waitForKeyElements(`.theme-white.init-new`, function (tag) {
					tag[0].style.background = '#DCEFFE url(https://nd-static.bdstatic.com/m-static/disk-share/widget/pageModule/init-new/image/init-bg_1708266.png) no-repeat center center'
				}, true)
				base.waitForKeyElements(`#layoutApp`, function (tag) {
					tag[0].style.background = '#DCEFFE url(https://nd-static.bdstatic.com/m-static/disk-share/widget/pageModule/init-new/image/init-bg_1708266.png) no-repeat center center'
					document.body.style.background = '#DCEFFE url(https://nd-static.bdstatic.com/m-static/disk-share/widget/pageModule/init-new/image/init-bg_1708266.png) no-repeat center center'
				}, true)
				base.waitForKeyElements(`#bd-main .bd-left`, function (tag) {
					tag[0].style.background = '#ffffffC0';
					tag[0].style.borderRadius = '10px';

				}, true)
				base.waitForKeyElements(`.KPDwCE`, function (tag) {
					tag[0].style.setProperty('background', 'transparent');
				}, true)
				base.waitForKeyElements('.share-list .KPDwCE .AuPKyz', function (tag) {
					tag[0].style.setProperty('background', 'transparent');
				}, true)
			}
		},

		addButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`
				<div class="g-dropdown-button pointer pl-button">
					<div class="baidu-button g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width: 60px;">下载助手</span></span></div>
					<div class="menu" style="color: ${color};border-color: ${color};width:auto;z-index:41;">
						<div class="g-button-menu pl-button-mode" data-mode="api">API下载</div>
						<div class="g-button-menu pl-button-mode" data-mode="aria">Aria下载</div>
						<div class="g-button-menu pl-button-mode" data-mode="rpc">RPC下载</div>
						<div class="g-button-menu pl-button-mode" data-mode="curl">cURL下载</div>
						<div class="g-button-menu pl-button-mode" data-mode="bc">BC下载</div>
						<div class="g-button-menu pl-button-mode listener-open-setting">助手设置</div>
						<div class="g-button-menu pl-button-mode listener-open-beautify">助手美化</div>
						<div class="g-button-menu pl-button-mode listener-open-updatelog">更新日志</div>
					</div>
				</div>
			`);
			if (pt === 'home') $toolWrap = pan.btn.home;
			if (pt === 'main') {
				$toolWrap = pan.btn.main;
				$button = $(`
				<div class="wp-s-agile-tool-bar__h-group pl-button">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button baidu-button">
							<i class="u-icon u-icon-download"></i>
							<span>下载助手</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
							<li class="sub cursor-p pl-button-mode" data-mode="api">API下载</li>
							<li class="sub cursor-p pl-button-mode" data-mode="aria">Aria下载</li>
							<li class="sub cursor-p pl-button-mode" data-mode="rpc">RPC下载</li>
							<li class="sub cursor-p pl-button-mode" data-mode="curl">cURL下载</li>
							<li class="sub cursor-p pl-button-mode" data-mode="bc">BC下载</li>
							<li class="sub cursor-p pl-button-mode listener-open-setting">助手设置</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify">助手美化</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog">更新日志</li>
						</ul>
					</div>
				</div>`);
			}
			if (pt === 'youth') {
				$toolWrap = pan.btn.main;
				$button = $(`
				<div class="wp-s-agile-tool-bar__h-group pl-button">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button baidu-button" style="font-size:14px;font-weight:700">
							<i class="u-icon u-icon-more"></i>
							<span>网盘助手</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
							<li class="sub cursor-p pl-button-mode listener-open-setting">助手设置</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify">助手美化</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog">更新日志</li>
						</ul>
					</div>
				</div>`);
			}
			if (pt === 'share') {
				$toolWrap = pan.btn.share;
				$button = $(`
					<a class="g-button tools-share-save-hb tools-share-V20-btn save_btn" data-button-id="b5" data-button-index="8" href="javascript:;" title="保存到网盘" node-type="shareSave">
						<span class="g-button-right">
							<em class="icon noicon-zhuancun_bai" title="保存到网盘"></em>
							<span class="text" style="width: auto;">保存到网盘</span>
						</span>
					</a>`);
				$button = $(`
					<div class="g-dropdown-button pointer pl-button">
						<div class="baidu-button g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width: 60px;">下载助手</span></span></div>
						<div class="menu" style="color: ${color};border-color: ${color};width:auto;z-index:41;">
							<div class="g-button-menu pl-button-mode pl-button-save"><em class="icon icon-save-disk" title="保存到网盘"></em><span style="margin-left: 3px;">保存后下载</span></div>
							<div class="g-button-menu pl-button-mode listener-open-setting">助手设置</div>
							<div class="g-button-menu pl-button-mode listener-open-beautify">助手美化</div>
							<div class="g-button-menu pl-button-mode listener-open-updatelog">更新日志</div>
						</div>
					</div>
				`);
				base.listenElement($toolWrap, function () {
					$toolWrap = $($toolWrap);
					$('.pl-button').length === 0 && $toolWrap.append($button);
				})
			} else {
				base.listenElement($toolWrap, function () {
					$toolWrap = $($toolWrap);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			this.setBDUSS();
			base.createDownloadIframe();
		},

		addInitButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="g-dropdown-button pointer pl-button-init" style="opacity:0.5"><div style="color:#fff;" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width: 60px;">点我点亮</span></span></div></div>`);
			if (pt === 'home') {
				$toolWrap = pan.btn.home;
			}
			if (pt === 'main' || pt === 'youth') {
				$toolWrap = pan.btn.main;
				$button = $(`
				<div class="wp-s-agile-tool-bar__h-group pl-button-init">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button baidu-button" style="font-size:14px;font-weight:700">
							<i class="u-icon u-icon-download"></i>
							<span>点我点亮</span>
						</button>
					</div>
				</div>`);
			}
			if (pt === 'share') $toolWrap = pan.btn.share;
			$button.click(function () { base.initDialog() });
			base.listenElement($toolWrap, function () {
				$toolWrap = $($toolWrap);
				$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
			})
		},

		async getToken() {
			function openTab() {
				GM_openInTab(pan.pcs[3], { active: true, insert: true, setParent: true });
				base.deleteValue('baidu_access_token');
			};

			const waitForToken = function () {
				new Promise((resolve) => {
					let attempts = 0;
					const interval = setInterval(function () {
						const token = base.getValue('baidu_access_token');
						if (token) {
							clearInterval(interval);
							resolve(token);
						}
						attempts++;
						if (attempts > 120) {
							clearInterval(interval);
							resolve('');
						}
					}, 1000);
				})
			};

			if (manageHandler === 'Tampermonkey' && base.getMajorVersion(manageVersion) >= 5) {
				openTab();
				return waitForToken();
			}

			let res = await base.getFinalUrl(pan.pcs[3]);

			if (res.indexOf('authorize') === -1 && res.indexOf('access_token=') === -1) {
				openTab();
				return waitForToken();
			}

			if (res.includes('authorize')) {
				// 使用await关键字等待base.get函数的返回结果，获取网页内容
				let html = await base.get(pan.pcs[3], {}, 'text');

				// 使用正则表达式匹配html中的'bdstoken'和'client_id'
				let bdstoken = html.match(/name="bdstoken"\s+value="([^"]+)"/)?.[1];
				let client_id = html.match(/name="client_id"\s+value="([^"]+)"/)?.[1];

				// 构建一个包含所需参数的数据对象，包含百度授权所需参数
				let data = {
					grant_permissions_arr: 'netdisk',
					bdstoken: bdstoken,
					client_id: client_id,
					response_type: "token",
					display: "page",
					grant_permissions: "basic,netdisk"
				};

				// 向服务器发送POST请求，实现自动授权
				await base.post(pan.pcs[3], base.stringify(data), {
					'Content-Type': 'application/x-www-form-urlencoded',
				});

				// 授权完后再次获取'access_token'
				let res2 = await base.getFinalUrl(pan.pcs[3]);
				let accessToken = res2.match(/access_token=([^&]+)/)?.[1];
				accessToken && base.setValue('baidu_access_token', accessToken);
				return accessToken;
			};
			// 如果已有'access_token'，则获取新的'access_token'
			let accessToken = res.match(/access_token=([^&]+)/)?.[1];
			accessToken && base.setValue('baidu_access_token', accessToken);
			return accessToken;
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			let fidList = this._getFidList(), url, res;
			let BDUSS = this.getBDUSS();

			if (pt === 'home' || pt === 'main') {
				if (selectList.length === 0) {
					return message.error('提示：<br/>先勾选要下载的文件哦~');
				}
				if (fidList.length === 2) {
					return message.error('提示：<br/>请打开文件夹后再勾选文件~');
				}
				fidList = encodeURIComponent(fidList);
				let accessToken = base.getValue('baidu_access_token')
				if (!accessToken || accessToken === undefined) {
					message.error('提示：<br/>稍后请在新标签页中授权助手获取信息~');
					return setTimeout(async function () {
						await baidu.getToken();
					}, 1500)
				}
				url = `${pan.pcs[0]}&fsids=${fidList}&access_token=${accessToken}`;
				if (!!BDUSS) {
					let cookie = `BDUSS=${BDUSS}`;
					res = await base.get(url, { "User-Agent": pan.ua, "cookie": cookie });
				}
			} else {
				return message.error('提示：<br/>页面错误~');
			}
			if (res.list && res.list[0] && (res.errno === 0 || res.errmsg === "succ")) {
				let html = this.generateDom(res.list);
				this.showMainDialog(pan[mode][0], html, pan[mode][1]);
			} else if (res.errno === 112) {
				return message.error('提示：<br/>页面过期了，刷新重试下吧~<br/>代码：' + res.errno);
			} else if (res.errno === 9019) {
				base.deleteValue('baidu_access_token');
				return message.error('提示：<br/>AccessToken 已过期，刷新网页后再获取一次吧~<br/>代码：' + res.errno);
			} else {
				base.deleteValue('baidu_access_token');
				if (res.errno) {
					return message.error('提示：<br/>获取下载链接失败，刷新网页后再试试吧~<br/>代码：' + res.errno);
				} else {
					return message.error('提示：<br/>获取下载链接失败，刷新网页后再试试吧~');
				}
			}
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			base.sortByName(list);
			list.forEach((v, i) => {
				if (v.isdir === 1) return;
				let filename = v.server_filename || v.filename;
				let ext = base.getExtension(filename);
				let size = base.sizeFormat(v.size);
				let dlink = v.dlink + '&access_token=' + base.getValue('baidu_access_token');
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary listener-link-api blob" data-title="推荐使用本功能，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载有可能会被 IDM 捕获下载链接" data-filename="${filename}" data-size="${v.size}" data-link="${dlink}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="不建议使用本功能，若使用后长时间没有弹出下载提示则代表请求失败，请换用“增强下载”，基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，此方式下载有可能会被 IDM 捕获下载链接" data-filename="${filename}" data-link="${dlink}">直接下载(基于浏览器链接)</button>
								<button class="pl-item-copy listener-tip pl-btn-primary listener-copy-all" href="${dlink}" data-title="不建议使用本功能，在本网盘单独复制链接并粘贴下载可能会导致服务器回报 403 错误" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content += `</div></div>`
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, pan.ua);
					if (typeof (alink) === 'object') {
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br/>复制 ${filename} 下载命令行</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
					}
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, pan.ua);
					if (typeof (alink) === 'object') {
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br/>复制 ${filename} 下载命令行</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
					}
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, pan.ua);
					if (typeof (alink) === 'object') {
						alinkAllText += decodeURIComponent(alink.text) + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" href="${decodeURIComponent(alink.link)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink.text)}<br/>下载 ${filename}</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a> </div>`;
					}
				}
			});

			content += '</div>';

			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">全部增强下载</button><button class="pl-btn-primary listener-tip listener-copy-all" data-link="${alinkAllText}" data-title="不建议使用本功能，在本网盘单独复制链接并粘贴下载可能会导致服务器回报 403 错误">复制全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};
			let BDUSS = this.getBDUSS();
			if (!BDUSS) return 'assistant';

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`User-Agent: ${pan.ua}`, `Cookie: BDUSS=${BDUSS}`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, { "User-Agent": pan.ua }, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			var List, selectList
			try {
				List = require("system-core:context/context.js").instanceForSystem.list;
				selectList = List.getSelected();
				/*if (!selectList.length) {
					selectList = List.getCurrentList();
				}*/
				return selectList;
			} catch (e) { }
			try {
				List = unsafeWindow.document.querySelector('.wp-s-core-pan');
				if (List && List.__vue__.selectedList) {
					selectList = List.__vue__.selectedList;
					return selectList;
				}
			} catch (e) { }
			try {
				List = unsafeWindow.document.querySelector('.file-list');
				if (List && List.__vue__.allFileList) {
					selectList = List.__vue__.allFileList.filter(function (item) { return !!item.selected; });
					return selectList;
				}
			} catch (e) { }
		},

		getLogid() {
			let ut = require("system-core:context/context.js").instanceForSystem.tools.baseService;
			return ut.base64Encode(base.getCookie("BAIDUID"));
		},

		getShareData() {
			let res = locals.dump();
			params.shareType = 'secret';
			params.sign = '';
			params.timestamp = '';
			params.bdstoken = res.bdstoken.value;
			params.channel = 'chunlei';
			params.clienttype = 0;
			params.web = 1;
			params.app_id = 250528;
			params.encrypt = 0;
			params.product = 'share';
			params.logid = this.getLogid();
			params.primaryid = res.shareid.value;
			params.uk = res.share_uk.value;
			params.shareType === 'secret' && (params.extra = this._getExtra());
			params.surl = this._getSurl();
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/disk\/home/.test(path)) return 'home';
			if (/^\/disk\/main/.test(path)) return 'main';
			if (/^\/youth\/pan\/main/.test(path)) return 'youth';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				heightAuto: false,
				scrollbarPadding: false,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			}).then(function () {
				baidu._resetData();
			});
		},

		async initAuthorize() {
			base.registerMenuCommand();
			Swal.fire({
				heightAuto: false,
				scrollbarPadding: false,
				showConfirmButton: false,
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				html: `请稍后`,
				willOpen: function () {
					Swal.showLoading();
				},
			});
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				let url = new URL(location.href)
				let auth = new URL(pan.pcs[3])
				// https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=&scope=basic,netdisk,mobile&display=page&redirect_uri=
				if (
					/openapi.baidu.com\/oauth\/2.0\/authorize/.test(location.href) &&
					(location.href.includes('basic+netdisk') || location.href.includes('basic,netdisk')) &&
					(
						url.searchParams.get("client_id") === auth.searchParams.get("client_id")/* ||
						url.searchParams.get("client_id") === 'L6g70tBRRIXLsY0Z3HwKqlRE' || // pcstest_oauth
						url.searchParams.get("client_id") === 'fSds3K4w43rw37tOqlQmTa2kDwaczK4U' || // 小度智能词典笔专业版
						url.searchParams.get("client_id") === 'TFwtw8uwHxpdkvVqVKdIlx1XqXUnr1zG' || // 印象笔记
						url.searchParams.get("client_id") === '9dgBV9yesuBVOXaxls7aVHbLBLqU8yyg' || // WPS文档
						url.searchParams.get("client_id") === 'l9DdBOG4RYroMscmzK5OChdaGelgd92M' || // 小猴云印PC版
						url.searchParams.get("client_id") === 'IlLqBbU3GjQ0t46TRwFateTprHWl39zF' // 百度手机助手 */
					)
				) {
					let dialog = await Swal.fire({
						icon: 'info',
						title: `提示`,
						html: '你好呀，为了获取百度网盘文件的下载直链<br/>我们需要您的授权来使 “下载助手” 读取您的网盘数据<br/><br/>由于使用了别的应用ID，所以授权的应用名称会有不同<br/>获取到的数据仅用于生成直链，请放心授权ヾ(≧▽≦*)o',
						showConfirmButton: true,
						showDenyButton: true,
						allowOutsideClick: false,
						allowEscapeKey: false,
						allowEnterKey: false,
						confirmButtonText: '授权',
						denyButtonText: '再想想',
						position: 'center'
					});
					if (dialog.isConfirmed) {
						base.waitForKeyElements("button#auth-allow", function (element) {
							element[0].click();
						})
						return;
					}
					if (dialog.isDenied) {
						let dialog = await Swal.fire({
							icon: 'question',
							title: `好吧(*￣3￣)╭`,
							html: '那就再想一想<br/>想好了就按下 “授权” 按钮吧~',
							timer: 180000,
							toast: true,
							timerProgressBar: true,
							showConfirmButton: false,
							showDenyButton: false,
							position: 'bottom-end',
						})
						return;
					}
				} else if (/openapi.baidu.com\/oauth\/2.0\/login_success/.test(location.href)) {
					let int = setInterval(async function () {
						if (location.href.includes('access_token') && (location.href.includes('basic+netdisk') || location.href.includes('basic,netdisk'))) {
							clearInterval(int)
							let token = location.href.match(/access_token=(.*?)&/)[1];
							base.setValue('baidu_access_token', token);
							let dialog = await Swal.fire({
								icon: 'success',
								title: `成功啦`,
								html: '你已 成功授权/授权过 脚本读取您的网盘数据<br/>等待 <span id="second">3</span> 秒之后将关闭此页面',
								timer: 3000,
								timerProgressBar: true,
								showConfirmButton: true,
								showDenyButton: false,
								allowOutsideClick: false,
								allowEscapeKey: false,
								allowEnterKey: false,
								confirmButtonText: '关闭页面',
								position: 'center',
								willOpen: function () {
									let sec = 3.1;
									setInterval(() => {
										sec -= 0.1;
										document.getElementById("second").innerText = sec.toFixed(1);
									}, 100);
									setTimeout(() => {
										window.close()
									}, 3100);
								},
							});
							if (dialog.isConfirmed) {
								window.close()
								return;
							}
						} else {
							clearInterval(int)
							Swal.close()
						}
					}, 1)
				} else {
					Swal.close()
				}
			} else {
				Swal.close()
			}
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
		},
	};

	//阿里云盘
	let ali = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "Referer: https://${location.host}/"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&refer=${encodeURIComponent(`https://${location.host}/`)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -e "https://${location.host}/"`);
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:阿里云盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}
			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				ali.getPCSLink();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				//let url = await this.getRealLink(dataset.did, dataset.fid);
				//if (url) href = url;
				base.get(href, { "Referer": `https://${location.host}/` }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.directLink.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText = '';
					speedText = base.sizeFormat(downloadSpeed)

					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function () {
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function () {
								o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
							}, 3000)
						}, 3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-copy-filename', async function (e) {
				base.setClipboard(e.target.dataset.filename);
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await ali.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-download-all.blob', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function () {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
			document.documentElement.addEventListener('mouseup', function (e) {
				if (e.target.nodeName === 'A' && ~e.target.className.indexOf('pl-a')) {
					e.stopPropagation();
				}
			}, true);
		},

		async getRealLink(d, f) {
			let authorization = `${base.getStorage('token').token_type} ${base.getStorage('token').access_token}`;
			let res = await base.post(pan.pcs[1], {
				drive_id: d,
				file_id: f
			}, {
				authorization,
				"content-type": "application/json;charset=utf-8",
				"referer": "https://www.aliyundrive.com/",
				"x-canary": "client=windows,app=adrive,version=v6.0.0"
			});
			if (res.code === 'AccessTokenInvalid') {
				return message.error('提示：<br/>Token过期了，请刷新网页后再试');
			}
			if (res.url) {
				return res.url;
			}
			return '';
		},

		removeAD() {
			base.waitForKeyElements('[class*="share-list-banner"]', function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('[class*="to-app"]', function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('[class*="btn-mobile-save"]', function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements('div[class*="text"]', function (tag) {
				if (tag[0].innerHTML.match("SVIP"))
					tag.fadeOut();
			}, true);
			base.waitForKeyElements('[class*="SplashScreenImg--close"]', function (tag) {
				tag[0].click();
			}, true);
			base.waitForKeyElements('[class*="container"]', function (tag) {
				tag.find('[class^="icon-close"]').click();
			}, true);
			base.waitForKeyElements('[class*="popup_main_close"]', function (tag) {
				tag[0].click();
			}, true);
		},

		addButton() {
			if (!pt) return;
			let $toolWrap;
			let svg = `<svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>`
			let $button = $(`<div class="ali-button pl-button"><span data-role="icon" data-render-as="svg" class="icon">${svg}下载助手</span><ul class="pl-dropdown-menu" style="top: 30px; right: 0;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.append($button);
				})
			}
			if (pt === 'share') {
				$button = $(`<div class="ali-button pl-button"><span data-role="icon" data-render-as="svg" class="icon">${svg}下载助手</span><ul class="pl-dropdown-menu" style="top: 30px; right: 16px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
				$button.css({ 'margin-right': '10px', "height": "36px", "width": "auto", "padding": "1px 30px" });
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			base.createDownloadIframe();
		},

		addInitButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>点我点亮</span></div>`);
			$button.css({ "width": "auto" });
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.append($button);
				})
			}
			if (pt === 'share') {
				$button = $(`<div class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>点我点亮</span></div>`);
				$button.css({ 'margin-right': '10px', "height": "36px", "padding": "1px 30px", "width": "auto" });
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(function () { base.initDialog() });
		},

		async getPCSLink() {
			let reactDomGrid = document.querySelector(pan.dom.grid);
			if (reactDomGrid) {
				let dialog = await Swal.fire({
					title: '提示',
					html: '<div style="display: flex;align-items: center;justify-content: center;">请切换到&nbsp;&nbsp;<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20"><use xlink:href="#PDSDrag"></use></svg>&nbsp;<b>列表视图</b>&nbsp;&nbsp;后获取下载链接</div>',
					icon: 'info',
					showCloseButton: true,
					showDenyButton: true,
					heightAuto: false,
					scrollbarPadding: false,
					confirmButtonText: '切换',
					denyButtonText: '不要'
				});
				if (dialog.isConfirmed) {
					document.querySelector(pan.dom.switch).click();
					return message.success('提示：<br/>切换为列表视图成功<br/>请再获取一次下载链接吧~');
				}
				return false;
			}
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br/>请勾选要下载的文件哦~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br/>请打开文件夹后再勾选文件~');
			}
			if (pt === 'share') {
				if (selectList.length > 20) {
					return message.error('提示：<br/>一次最多只能勾选 20 个文件哦!');
				}
				try {
					let authorization = `${base.getStorage('token').token_type} ${base.getStorage('token').access_token}`;
					let xShareToken = base.getStorage('shareToken').share_token;

					for (let i = 0; i < selectList.length; i++) {
						let res = await base.post(pan.pcs[0], {
							expire_sec: 600,
							file_id: selectList[i].fileId,
							share_id: selectList[i].shareId
						}, {
							authorization,
							"content-type": "application/json;charset=utf-8",
							"x-share-token": xShareToken
						});
						if (res.download_url) {
							selectList[i].downloadUrl = res.download_url;
						}
					}
				} catch (e) {
					return message.error('提示：<br/>请先登录网盘~');
				}
			} else {
				if (selectList.length > 20) {
					return message.error('提示：<br/>每次最多只能选 20 个文件哦~');
				}
				let noUrlSelectList = selectList.filter(v => !Boolean(v.url))
				let queue = [];
				noUrlSelectList.forEach((item, index) => {
					queue.push(this.getRealLink(item.driveId, item.fileId));
				});

				const res = await Promise.all(queue);
				res.forEach((val, index) => {
					noUrlSelectList[index].url = val;
				});

			}
			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.type === 'folder') return;
				let filename = v.name;
				let fid = v.fileId;
				let did = v.driveId;
				let size = base.sizeFormat(v.size);
				let dlink = v.downloadUrl || v.url;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}" >${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary listener-link-api blob" data-title="推荐使用本功能，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接" data-did="${did}" data-fid="${fid}" data-filename="${filename}" data-link="${dlink}" data-size="${v.size}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，此方式下载有可能会被 IDM 捕获下载链接" data-did="${did}" data-fid="${fid}" data-filename="${filename}" data-link="${dlink}" data-index="${i}">直接下载(基于浏览器链接)</button>
								<button class="pl-item-copy listener-tip pl-btn-primary pl-btn-success listener-copy-filename" data-title="本网盘于下载高峰期时可能不会显示文件名称，这时需要手动复制文件名称到下载工具中" data-filename="${filename}">复制名称</button>
								<button class="pl-item-copy listener-tip pl-btn-primary listener-copy-all" href="${dlink}" data-title="不建议使用本功能，在本网盘单独复制链接并粘贴下载可能会导致服务器回报 403 错误" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span><span class="pl-ext"></span></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
					`;
					content += `<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
					`;
					content += `</div></div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink.replace(' ', '%20')}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all blob">全部增强下载</button><button class="pl-btn-primary listener-tip listener-copy-all" data-link="${alinkAllText}" data-title="不建议使用本功能，在本网盘单独复制链接并粘贴下载可能会导致服务器回报 403 错误">复制全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`Referer: https://${location.host}/`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, { "Referer": `https://${location.host}/` }, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.querySelector(pan.dom.list);
				let reactObj = base.findReact(reactDom, 1);
				let props = reactObj.pendingProps;
				if (props) {
					let fileList = props.dataSource || [];
					let selectedKeys = props.selectedKeys.split(',');
					fileList.forEach(function (val) {
						if (selectedKeys.includes(val.fileId)) {
							selectedList.push(val);
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/(drive)/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].type === 'file') return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/ali/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/ali/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/ali.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/ali.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
		}
	};

	//天翼云盘
	let tianyi = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:天翼云盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				tianyi.getPCSLink();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				base.get(href, { "Referer": `https://${location.host}/` }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.directLink.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText = '';
					speedText = base.sizeFormat(downloadSpeed)
					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function () {
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function () {
								o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
							}, 3000)
						}, 3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-download-all', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await tianyi.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function () {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
		},

		removeAD() {
			base.waitForKeyElements(".advertising-mask", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements("a.client-download.nav-block", function (tag) {
				tag.fadeOut();
			}, true);
		},

		addButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="tianyi-button pl-button">下载助手<ul class="pl-dropdown-menu" style="top: 26px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			base.createDownloadIframe();
		},

		addInitButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="tianyi-button pl-button-init">点我点亮</div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.css({ 'margin-right': '10px' });
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(function () { base.initDialog() });
		},

		async getToken() {
			let res = await base.getFinalUrl(pan.pcs[1], {});
			let accessToken = res.match(/accessToken=(\w+)/)?.[1];
			accessToken && base.setStorage('accessToken', accessToken);
			return accessToken;
		},

		async getFileUrlByOnce(item, index, token) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				let time = Date.now(),
					fileId = item.fileId,
					o = "AccessToken=" + token + "&Timestamp=" + time + "&fileId=" + fileId,
					url = pan.pcs[2] + '?fileId=' + fileId;
				if (item.shareId) {
					o = "AccessToken=" + token + "&Timestamp=" + time + "&dt=1&fileId=" + fileId + "&shareId=" + item.shareId;
					url += '&dt=1&shareId=' + item.shareId;
				}
				let sign = md5(o).toString();
				let res = await base.get(url, {
					"accept": "application/json;charset=UTF-8",
					"sign-type": 1,
					"accesstoken": token,
					"timestamp": time,
					"signature": sign
				});
				if (res.res_code === 0) {
					return {
						index,
						downloadUrl: res.fileDownloadUrl
					};
				} else if (res.errorCode === 'InvalidSessionKey') {
					return {
						index,
						downloadUrl: '提示：<br/>请先登录网盘~'
					};
				} else if (res.res_code === 'ShareNotFoundFlatDir') {
					return {
						index,
						downloadUrl: '提示：<br/>请[转存]文件，之后再👉前往[我的网盘]中下载哦~'
					};
				} else {
					return {
						index,
						downloadUrl: '获取下载地址失败，刷新后再试试吧~' + (res.res_code ? res.res_code : "")
					};
				}
			} catch (e) {
				return {
					index,
					downloadUrl: '获取下载地址失败，刷新后再试试吧~'
				};
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br/>请勾选要下载的文件哦~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br/>请打开文件夹后再勾选文件~');
			}
			let token = base.getStorage('accessToken') || await this.getToken();
			if (!token) {
				return message.error('提示：<br/>请先登录网盘~');
			}
			let queue = [];
			for (const [index, item] of selectList.entries()) {
				queue.push(this.getFileUrlByOnce(item, index, token));
			}

			const res = await Promise.all(queue);
			res.forEach(val => {
				selectList[val.index].downloadUrl = val.downloadUrl;
			});

			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.isFolder) return;
				let filename = v.fileName;
				let ext = base.getExtension(filename);
				let size = base.sizeFormat(v.size);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary listener-link-api blob" data-title="推荐使用本功能，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接" data-filename="${filename}" data-size="${v.size}" data-link="${dlink}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，此方式下载有可能会被 IDM 捕获下载链接" data-filename="${filename}" data-link="${dlink}">直接下载(基于浏览器链接)</button>
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content += `</div></div>`
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">全部增强下载</button><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				return document.querySelector(".c-file-list").__vue__.selectedList;
			} catch (e) {
				return [document.querySelector(".info-detail").__vue__.fileDetail];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/web\/main/.test(path)) return 'home';
			if (/^\/web\/share/.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (!selectList[i].isFolder) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/tianyi/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/tianyi/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/tianyi.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/tianyi.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
			this.getToken();
		}
	};

	//迅雷云盘
	let xunlei = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:迅雷云盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				xunlei.getPCSLink();
			});
			doc.on('click', '.pl-button-save', async function (e) {
				e.preventDefault();
				selectList = xunlei.getSelectedList();
				if (selectList.length === 0) {
					return message.error('提示：<br/>请勾选要保存到网盘的文件哦~');
				}
				message.info('提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~');
				await base.sleep(500);
				document.querySelector('.saveToCloud').click();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				base.get(href, { "Referer": `https://${location.host}/` }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					let isIDM = idm[index] || false;

					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.directLink.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText = '';
					speedText = base.sizeFormat(downloadSpeed)
					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function () {
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function () {
								o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
							}, 3000)
						}, 3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-download-all', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});

			doc.on('click', '.listener-copy-filename', async function (e) {
				base.setClipboard(e.target.dataset.filename);
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-bc-btn', async function (e) {
				let mirror = base.getMirrorList(e.target.dataset.dlink, pan.mirror);
				base.setClipboard(mirror);
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await xunlei.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function () {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
		},

		addButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`
				<div class="xunlei-button pl-button"><i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">下载助手</span>
					<ul class="pl-dropdown-menu" style="top: 34px;">
						<li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li>
						<li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria">Aria下载</li>
						<li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li>
						<li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li>
						<li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc">BC下载</li>
						<li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li>
						<li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li>
						<li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li>
					</ul>
				</div>
			`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button = $(`
					<div class="xunlei-button pl-button">
						<i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">下载助手</span>
						<ul class="pl-dropdown-menu" style="top: 34px;">
							<li class="pl-dropdown-menu-item pl-button-mode pl-button-save"><i class="xlpfont xlp-file-upload"></i><span style="margin-left: 3px;">转存后下载</span></li>
							<li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li>
							<li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li>
							<li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li>
						</ul>
					</div>
				`);
				$button.css({ 'margin-right': '10px' });
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			base.createDownloadIframe();
		},

		addInitButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="xunlei-button pl-button-init"><i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">点我点亮</span></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.css({ 'margin-right': '10px' });
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(function () { base.initDialog() });
		},

		getToken() {
			let credentials = {}, captcha = {};
			for (let i = 0; i < localStorage.length; i++) {
				if (/^credentials_/.test(localStorage.key(i))) {
					credentials = base.getStorage(localStorage.key(i));
					base.setStorage('');
				}
				if (/^captcha_[\w]{16}/.test(localStorage.key(i))) {
					captcha = base.getStorage(localStorage.key(i));
				}
			}
			let deviceid = /(\w{32})/.exec(base.getStorage('deviceid').split(','))[0];
			let token = {
				credentials,
				captcha,
				deviceid
			};
			return token;
		},

		async getFileUrlByOnce(item, index, token) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				let res = await base.get(pan.pcs[0] + item.id, {
					'Authorization': `${token.credentials.token_type} ${token.credentials.access_token}`,
					'content-type': "application/json",
					'x-captcha-token': token.captcha.token,
					'x-device-id': token.deviceid,
				});
				if (res.web_content_link) {
					return {
						index,
						downloadUrl: res.web_content_link
					};
				} else {
					return {
						index,
						downloadUrl: '获取下载地址失败，刷新后再试试吧~'
					};
				}
			} catch (e) {
				return message.error('提示：<br/>请先登录网盘后再刷新页面呢~');
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br/>请勾选要下载的文件哦~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br/>请打开文件夹后再勾选文件~');
			}
			if (pt === 'home') {
				let queue = [];
				let token = this.getToken();
				for (const [index, item] of selectList.entries()) {
					queue.push(this.getFileUrlByOnce(item, index, token));
				}

				const res = await Promise.all(queue);
				res.forEach(val => {
					selectList[val.index].downloadUrl = val.downloadUrl;
				});
			} else {
				return message.error('提示：<br/>页面错误~');
			}
			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);

		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.kind === 'drive#folder') return;
				let filename = v.name;
				let ext = base.getExtension(filename);
				let size = base.sizeFormat(+v.size);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary listener-link-api blob" data-title="推荐使用本功能，下载完成可自动命名，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接" data-filename="${filename}" data-size="${v.size}" data-link="${dlink}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<a class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，若服务器未回报文件名，此方式下载不会被 IDM 捕获下载链接，此时建议右键此按钮，选择 “使用 IDM 下载”" data-filename="${filename}" data-link="${dlink}" href="${dlink}">直接下载(基于浏览器链接)</a>
								<button class="pl-item-copy listener-tip pl-btn-primary pl-btn-success listener-copy-filename" data-title="本网盘下载时可能不会显示文件名称，这时需要手动复制文件名称到下载工具中" data-filename="${filename}">复制名称</button>
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content += `</div></div>`
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a>
								<button class="pl-btn-primary listener-link-bc-btn" data-dlink="${dlink}">复制镜像地址</div>
								</div>`;
				}
			});
			content += '</div>';
			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">全部增强下载</button><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let doms = document.querySelectorAll('.SourceListItem__item--XxpOC');
				let selectedList = [];
				for (let dom of doms) {
					let domVue = dom.__vue__;
					if (domVue.selected.includes(domVue.info.id)) {
						selectedList.push(domVue.info);
					}
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/$/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].kind === 'drive#file') return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/xunlei/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/xunlei/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/xunlei.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/xunlei.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
		}
	};

	//夸克网盘
	let quark = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "Cookie: ${document.cookie}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(document.cookie)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -b "${document.cookie}"`);
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:夸客网盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			window.addEventListener('hashchange', async function (e) {
				let home = 'https://pan.quark.cn/list#/', all = 'https://pan.quark.cn/list#/list/all';
				if (e.oldURL === home && e.newURL === all) return;
				await base.sleep(150);
				if ($('.quark-button').length > 0) return;
				if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
					this.addButton();
					this.addPageListener();
				} else {
					this.addInitButton();
				}
			});
			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				quark.getPCSLink();
			});
			doc.on('click', '.pl-button-save', async function (e) {
				e.preventDefault();
				selectList = quark.getSelectedList();
				if (selectList.length === 0) {
					return message.error('提示：<br/>请勾选要保存到网盘的文件哦~');
				}
				message.info('提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~');
				await base.sleep(500);
				document.querySelector('.file-info_r').click();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				base.get(href, { "Referer": `https://${location.host}/` }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.directLink.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText = '';
					speedText = base.sizeFormat(downloadSpeed)
					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function () {
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function () {
								o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
							}, 3000)
						}, 3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-download-all', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await quark.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function () {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
		},

		removeAD() {
			base.waitForKeyElements('[class*="Activity--video-toolbar-activity"]', function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('span[class*="SectionHeaderController--icon-download"]', function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('div[class*="SectionHeaderController--download-popover"]', function (tag) {
				tag.find(".ant-popover-arrow").css({ "left": "75%" });
			});
			base.waitForKeyElements('div[class*="DetailLayout--client-download"]', function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".next-box.share-right-side-content", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements('[class*="DetailLayout--container"] .feature-screen', function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements('.ant-modal-content .ant-modal-body .right-wrap', function (tag) {
				if (tag.find(".hint").text().includes("客户端")) tag.fadeOut();
			});
			base.waitForKeyElements(".pc-member-entrance span.button-text", function (tag) {
				tag.text("会员中心");
				var observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						if (tag.text() === "会员中心") return
						tag.text("会员中心");
					});
				});
				var config = { subtree: true, characterData: true, childList: true };
				observer.observe(tag[0], config);
			});
			base.waitForKeyElements(".pc-member-entrance .tips", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".modal .modal-content .halo-animated-background .halo-content .pay-modal .close", function (tag) {
				tag[0].click();
			});
			base.waitForKeyElements(".modal .modal-content .halo-animated-background .halo-content .red-envelope .close", function (tag) {
				tag[0].click();
			});
		},

		addButton() {
			let svg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+';
			if (!pt) return;
			let $toolWrap;
			let $button = $(`
			<div class="ant-dropdown-trigger pl-button">
				<button type="button" class="quark-button ant-btn btn-file ant-btn-primary">
					<img class="quark-btn-icon" src="${svg}"><span>下载助手</span>
				</button>
				<ul class="pl-dropdown-menu" style="top: 55px;">
					<li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li>
					<li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria">Aria下载</li>
					<li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li>
					<li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li>
					<li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc">BC下载</li>
					<li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li>
					<li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li>
					<li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li>
				</ul>
			</div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				});
			}
			if (pt === 'share') {
				$button = $(`<div class="ant-dropdown-trigger pl-button"><button type="button" class="quark-button ant-btn btn-file ant-btn-primary" style="height: 40px;"><img class="quark-btn-icon" src="${svg}"><span>下载助手</span></button><ul class="pl-dropdown-menu" style="top: 100px;"><li class="pl-dropdown-menu-item pl-button-mode pl-button-save"><span class="save-btn-icon"></span>保存后下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				});
			}
			$button.css({ "margin-right": "10px", "display": "inline-block" });
		},

		addInitButton() {
			let svg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+';
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="ant-dropdown-trigger pl-button-init"><button type="button" class="quark-button ant-btn btn-file ant-btn-primary" style="height: 40px;"><img class="quark-btn-icon" src="${svg}"><span>点我点亮</span></button></div>`);
			$button.css({ "margin-right": "10px", "display": "inline-block" });
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(function () { base.initDialog() });
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br/>请勾选要下载的文件哦~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br/>请打开文件夹后再勾选文件~');
			}
			let fids = [];
			for (const val of selectList) {
				fids.push(val.fid);
			}
			if (pt === 'home') {
				let res = await base.post(pan.pcs[0], {
					"fids": fids
				}, { "content-type": "application/json;charset=utf-8", "user-agent": pan.ua });
				if (res.code === 31001) {
					return message.error('提示：<br/>请先登录网盘~<br/>代码：' + res.code);
				}
				if (res.code !== 0) {
					return message.error('提示：<br/>获取链接失败了~<br/>代码：' + res.code);
				}
				let html = this.generateDom(res.data);
				this.showMainDialog(pan[mode][0], html, pan[mode][1]);
			} else {
				return message.error('提示：<br/>页面错误~');
			}
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.file === false) return;
				let filename = v.file_name;
				let ext = base.getExtension(filename);
				let fid = v.fid;
				let size = base.sizeFormat(v.size);
				let dlink = v.download_url;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-default listener-link-api blob" data-title="推荐使用本功能，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接" data-filename="${filename}" data-size="${v.size}" data-link="${dlink}" data-fid="${fid}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，此方式下载有可能会被 IDM 捕获下载链接" data-filename="${filename}" data-link="${dlink}" data-fid="${fid}">直接下载(基于浏览器链接)</button>
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content += `</div></div>`
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">全部增强下载</button><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`Cookie: ${document.cookie}`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, { "Cookie": document.cookie }, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.getElementsByClassName('file-list')[0];
				let reactObj = base.findReact(reactDom);
				let props = reactObj.props;
				if (props) {
					let fileList = props.list || [];
					let selectedKeys = props.selectedRowKeys || [];
					fileList.forEach(function (val) {
						if (selectedKeys.includes(val.fid)) {
							selectedList.push(val);
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/(list)/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].file) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/quark/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/quark/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/quark.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/quark.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
			base.createDownloadIframe();
		}
	};

	//中国移动云盘/和彩云
	let yidong = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			/*
			防止代码因其他原因被执行多次
			这段代码出自 Via轻插件，作者谷花泰
			*/
			const key = encodeURIComponent('（改）网盘直链下载助手:移动云盘');
			if (window[key]) return;
			window[key] = true;

			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link.blob');
				let directLink = item.find('.pl-item-link.browser');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, directLink, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			doc.on('click', '.pl-button-mode', function (e) {
				mode = e.target.dataset.mode;
				if (!mode) return;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function () {
						Swal.showLoading();
					}
				});
				yidong.getPCSLink();
			});
			doc.on('click', '.listener-link-api.browser', async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				$('#downloadIframe').attr('src', href);
			});
			doc.on('click', '.listener-link-api.blob', async function (e) {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				base.get(href, { "Referer": `https://${location.host}/` }, 'blob', { filename, index });
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(function () {
					let prog = +progress[index] || 0;
					let isIDM = idm[index] || false;
					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.directLink.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText = '';
					console.log(downloadSpeed)
					speedText = base.sizeFormat(downloadSpeed)
					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function () {
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function () {
								o.link.text('增强下载(基于浏览器文件流)').animate({ opacity: '1' }, "slow");
							}, 3000)
						}, 3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async function (e) {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
				o.directLink.show();
			});
			doc.on('click', '.listener-how', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async function (e) {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function () {
						o.tip.hide();
						o.back.hide();
						o.link.show();
						o.directLink.show();
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					}, 1050)
				}
			});
			doc.on('click', '.listener-back', async function (e) {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.directLink.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-download-all', function (e) {
				$('.pl-item-link.blob').each(function () {
					if ($(this).css('display') !== 'none') {
						$(this).click();
					}
				});
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('全部增强下载').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', function (e) {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({ opacity: '0.5' }, "slow");
				setTimeout(function () {
					$(e.target).text('重新复制').animate({ opacity: '1' }, "slow");
				}, 2000)
			});
			doc.on('click', '.listener-link-rpc', async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon-rpc-devices').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await yidong.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({ opacity: '0.5' }, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({ opacity: '0.5' }, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', function (e) {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({ opacity: '0.5' }, "slow");
			});
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-rpc-task', function () {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, { active: true });
			});
		},

		removeAD() {
			base.waitForKeyElements(".adv_swiper_menu", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".client-bubble", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".avs-box", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".top-adv-swiper", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".client_download_icon", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".document_top_memberCenter", function (tag) {
				$(tag[0]).click(function () {
					Swal.fire({
						html: `<iframe style="height: 700px; width: 420px; border: 0;" src="https://vip.yun.139.com/vip/"></iframe>`,
						allowOutsideClick: false,
						showCloseButton: true,
						showConfirmButton: false,
						heightAuto: false,
						scrollbarPadding: false,
					});
				});
			}, true);
		},

		addButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="yidong-button pl-button btn-top"><span class="yidong-btn">下载助手</span><ul class="pl-dropdown-menu" style="top: 36px; letter-spacing: normal;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-beautify">助手美化</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.removeClass('yidong-button').addClass('yidong-share-button');
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			base.createDownloadIframe();
		},

		addInitButton() {
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="yidong-button pl-button-init btn-top"><span class="yidong-btn">点我点亮</span></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, function () {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.removeClass('yidong-button').addClass('yidong-share-button');
				base.listenElement(pan.btn.share, function () {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(function () { base.initDialog() });
		},

		getRandomString(len) {
			len = len || 16;
			let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
			let maxPos = $chars.length;
			let pwd = '';
			for (let i = 0; i < len; i++) {
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},

		utob(str) {
			const u = String.fromCharCode;
			return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, function (t) {
				if (t.length < 2) {
					let e = t.charCodeAt(0);
					return e < 128 ? t : e < 2048 ? u(192 | e >>> 6) + u(128 | 63 & e) : u(224 | e >>> 12 & 15) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
				}
				e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
				return u(240 | e >>> 18 & 7) + u(128 | e >>> 12 & 63) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
			});
		},

		getSign(e, t, a, n) {
			let r = "",
				i = "";
			if (t) {
				let s = Object.assign({}, t);
				i = JSON.stringify(s),
					i = i.replace(/\s*/g, ""),
					i = encodeURIComponent(i);
				let c = i.split(""),
					u = c.sort();
				i = u.join("");
			}
			let A = md5(base.encode(this.utob(i)));
			let l = md5(a + ":" + n);
			return md5(A + l).toUpperCase();
		},

		async getFileUrlByOnce(item, index) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};

				if (this.detectPage() === 'home') {
					let body = {
						"contentID": item.contentID,
						"commonAccountInfo": { "account": item.owner, "accountType": 1 },
						"operation": "0",
						"inline": "0",
						"extInfo": { "isReturnCdnDownloadUrl": "1" }
					};
					let time = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ');
					let key = this.getRandomString(16);
					let sign = this.getSign(undefined, body, time, key);

					let res = await base.post(pan.pcs[0], body, {
						'authorization': base.getCookie('authorization'),
						'x-huawei-channelSrc': '10000034',
						'x-inner-ntwk': '2',
						'mcloud-channel': '1000101',
						'mcloud-client': '10701',
						'mcloud-sign': time + "," + key + "," + sign,
						'content-type': "application/json;charset=UTF-8",
						'caller': 'web',
						'CMS-DEVICE': 'default',
						'x-DeviceInfo': '||9|7.12.0|chrome|119.0.0.0|||windows 10||zh-CN|||',
						'x-SvcType': '1',
					});
					if (res.success) {
						return {
							index,
							downloadUrl: res.data.downloadURL
						};
					} else {
						return {
							index,
							downloadUrl: '获取下载地址失败，刷新后再试试吧~'
						};
					}
				}
				if (this.detectPage() === 'share') {
					let vueDom = document.querySelector(".main_file_list").__vue__;

					let res = await base.post(pan.pcs[1], `linkId=${vueDom.linkID}&contentIds=${item.path}&catalogIds=`, {
						'Content-Type': 'application/x-www-form-urlencoded',
					});
					if (res.code === 0) {
						return {
							index,
							downloadUrl: res.data.redrUrl
						};
					} else {
						return {
							index,
							downloadUrl: '获取下载地址失败，刷新后再试试吧~'
						};
					}
				}
			} catch (e) {
				return {
					index,
					downloadUrl: '获取下载地址失败，刷新后再试试吧~'
				};
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br/>请勾选要下载的文件哦~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br/>请打开文件夹后再勾选文件~');
			}

			let queue = [];
			for (const [index, item] of selectList.entries()) {
				queue.push(this.getFileUrlByOnce(item, index));
			}

			const res = await Promise.all(queue);
			res.forEach(val => {
				selectList[val.index].downloadUrl = val.downloadUrl;
			});

			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.dirEtag || v.caName) return;
				let filename = v.contentName || v.coName;
				let ext = base.getExtension(filename);
				let size = base.sizeFormat(v.contentSize || v.coSize);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-default listener-link-api blob" data-title="推荐使用本功能，基于浏览器的 Blob 文件流下载文件，适用于较新的浏览器，如果文件过大则下载完成后有可能不会弹出窗口，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接" data-filename="${filename}" data-size="${v.contentSize || v.coSize}" data-link="${dlink}" data-index="${i}">增强下载(基于浏览器文件流)</button>
								<button class="pl-item-link listener-tip pl-btn-primary pl-btn-info listener-link-api browser" data-title="基于浏览器直接打开链接来下载文件，适用于较为古老但支持 iframe 的浏览器，点击“直接下载”后需等待下载提示弹出才能点击下个“直接下载”，否则只会下载后者，此方式下载有可能会被 IDM 捕获下载链接" data-filename="${filename}" data-link="${dlink}">直接下载(基于浏览器链接)</button>
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content += `</div></div>`
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 aria2c 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><svg class="icon-rpc-devices" viewBox="-10 0 1034 1024"><g transform="matrix(1 0 0 -1 0 960)"><path fill="currentColor" d="M832 -64h-640q-53 0 -90.5 37.5t-37.5 90.5v768q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-768q0 -53 -37.5 -90.5t-90.5 -37.5zM832 768q0 27 -18.5 45.5t-45.5 18.5h-512q-27 0 -45.5 -18.5t-18.5 -45.5v-320h640v320v0zM832 320h-640v-192q0 -27 18.5 -45.5t45.5 -18.5h512q27 0 45.5 18.5t18.5 45.5v192v0zM512 128q-27 0 -45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5t45.5 -18.5t18.5 -45.5t-18.5 -45.5t-45.5 -18.5z" /></g></svg><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制 curl 命令行" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>复制 ${filename} 下载命令行</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br/>下载 ${filename}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">全部增强下载</button><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">修改 RPC 参数（${rpc}）</button><button class="pl-btn-primary pl-btn-success pl-btn-opacity listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">修改终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			}
			if (mode === 'bc') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
			}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				return document.querySelector(".main_file_list").__vue__.selectList.map(val => val.item);
			} catch (e) {
				let vueDom = document.querySelector(".home-page").__vue__;
				let fileList = vueDom._computedWatchers.fileList.value;
				let dirList = vueDom._computedWatchers.dirList.value;
				let selectedFileIndex = vueDom.selectedFile;
				let selectedDirIndex = vueDom.selectedDir;
				let selectFileList = fileList.filter((v, i) => {
					return selectedFileIndex.includes(i);
				});
				let selectDirList = dirList.filter((v, i) => {
					return selectedDirIndex.includes(i);
				});
				return [...selectFileList, ...selectDirList];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/w/.test(path)) return 'home';
			if (/^\/link|shareweb/.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].fileEtag || selectList[i].coName) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/yidong/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/yidong/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/yidong.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/yidong.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
				this.addPageListener();
			} else {
				this.addInitButton();
			}
		}
	};

	// 油小猴
	let youxiaohou = {
		async initPanLinker() {
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json?version=${realversion}`, { 'Cache-Control': 'no-cache' }, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			if (pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license')) {
				this.addButton();
			} else {
				this.addInitButton();
			}
		},
		addButton() {
			let $button = `
			<div class="nav-item">
				<div class="dropdown-wrapper">
					<button type="button" aria-label="(改)下载助手" class="dropdown-title">
						<span class="title">(改)下载助手⬇️</span>
						<span class="arrow down"></span>
					</button>
					<button type="button" aria-label="(改)下载助手" class="mobile-dropdown-title">
						<span class="title">(改)下载助手⬇️</span>
						<span class="arrow right"></span>
					</button>
					<ul class="nav-dropdown" style="display:none;">
						<li class="dropdown-item">
							<h4>
								助手
							</h4>
							<ul class="dropdown-subitem-wrapper">
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-info nav-link">
										🛠️ 调试(查看暗号/协议)
									</a>
								</li>
							</ul>
						</li>
						<li class="dropdown-item">
							<h4>
								选项
							</h4>
							<ul class="dropdown-subitem-wrapper">
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-setting nav-link">
										⚙️ 助手设置
									</a>
								</li>
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-beautify nav-link">
										🍃️ 助手美化
									</a>
								</li>
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-updatelog nav-link">
										📃️ 更新日志
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			`;
			doc.on('click', '.listener-open-setting', function () {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', function () {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-beautify', function () {
				base.showBeautify();
			});
			doc.on('click', '.listener-open-info', function () {
				base.showDebug();
			});

			document.querySelectorAll(".nav-links").forEach(function (element) {
				element.innerHTML += $button
			})
		},
		addInitButton() {
			let $button = `
			<div class="nav-item">
				<div class="dropdown-wrapper">
					<a class="nav-link listener-open-init">(改)点我点亮⬇️</a>
				</div>
			</div>
			`;
			doc.on('click', '.listener-open-init', function () {
				base.initDialog();
			});

			document.querySelectorAll(".nav-links").forEach(function (element) {
				element.innerHTML += $button
			})
		}
	}

	// 主代码
	let main = {
		async init() {
			// 先加载默认设置
			base.initDefaultConfig();
			// 然后获取原脚本的 GreasyFork 信息，确保油小猴服务器信任
			await base.get('https://greasyfork.org/zh-CN/scripts/436446.json', { "referer": "https://greasyfork.org/" }, 'json', '').then(res => {
				base.setValue('setting_script_version', res.version);
				base.setValue('setting_script_author', 'YouXiaoHou');
				base.setValue('setting_script_name', res.name);
			})
			// 再加载网页样式
			base.addPanLinkerStyle();
			// 最后判断页面地址并加载对应的initPanLinker
			if (/(pan|yun).baidu.com/.test(location.host)) {
				baidu.initPanLinker();
				baidu.removeAD();
			}
			if (/openapi.baidu.com\/oauth/.test(location.href)) {
				baidu.initAuthorize()
			}
			if (/www.(aliyundrive|alipan).com/.test(location.host)) {
				ali.initPanLinker();
				ali.removeAD();
			}
			if (/cloud.189.cn/.test(location.host)) {
				tianyi.initPanLinker();
				tianyi.removeAD();
			}
			if (/pan.xunlei.com/.test(location.host)) {
				xunlei.initPanLinker();
			}
			if (/pan.quark.cn/.test(location.host)) {
				quark.initPanLinker();
				quark.removeAD();
			}
			if (/(yun|caiyun).139.com/.test(location.host)) {
				yidong.initPanLinker();
				yidong.removeAD();
			}
			if (/www.youxiaohou.com/.test(location.host)) {
				youxiaohou.initPanLinker();
			}
		},
		async downloadConfig() {
			// 定义要下载的链接数组及对应的文件名
			let urlsAndFilenames = [
				{ url: `https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, filename: 'config.json' },
				{ url: `https://api.youxiaohou.com/config/v2/ali/?ver=${version}&a=${author}`, filename: 'ali.json' },
				{ url: `https://api.youxiaohou.com/config/v2/tianyi/?ver=${version}&a=${author}`, filename: 'tianyi.json' },
				{ url: `https://api.youxiaohou.com/config/v2/xunlei/?ver=${version}&a=${author}`, filename: 'xunlei.json' },
				{ url: `https://api.youxiaohou.com/config/v2/quark/?ver=${version}&a=${author}`, filename: 'quark.json' },
				{ url: `https://api.youxiaohou.com/config/v2/yidong/?ver=${version}&a=${author}`, filename: 'yidong.json' },
			];

			// 发送多个 POST 请求并等待所有请求完成
			let responses = await Promise.all(urlsAndFilenames.map(obj => base.post(obj.url, {}, {}, 'text')));

			// 遍历所有响应并进行处理
			responses.forEach((res, index) => {
				let url = urlsAndFilenames[index].url;
				let filename = urlsAndFilenames[index].filename;

				// 解析响应内容（假设响应内容是 JSON 格式）
				let panData = JSON.parse(base.decode(res));

				// 创建 Blob 对象
				let blob = new Blob([JSON.stringify(panData)], { type: 'application/json' });

				// 下载 Blob 对象
				base.blobDownload(blob, filename);
			});
		}
	};
	// 将函数暴露到全局作用域以便在控制台中调用
	unsafeWindow.Panlinker = main;
	main.init();
})();
