# （改）网盘直链下载助手 | Online disk direct link download assistant

可以获取网盘文件真实下载地址。基于【网盘直链下载助手】修改，原作者：[油小猴](https://www.youxiaohou.com/) ，自用，去广告，无需输入“暗号”即可使用，甚至比原版还要好用！

## 说明

基于[【网盘直链下载助手】](https://www.baiduyun.wiki/install.html)修改
- 原作者：[油小猴](https://www.youxiaohou.com/)  
- 原脚本：[https://greasyfork.org/scripts/436446](https://greasyfork.org/scripts/436446)
- 原脚本仓库：[https://github.com/syhyz1990/baiduyun](https://github.com/syhyz1990/baiduyun)
- 本脚本发布至 GreasyFork：[https://greasyfork.org/scripts/449291](https://greasyfork.org/scripts/449291)
   
因网络环境，发布新脚本时 GreasyFork 是最快更新的，所以请在 GreasyFork [【直接安装本脚本】](https://greasyfork.org/scripts/449291/code/%EF%BC%88%E6%94%B9%EF%BC%89%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B.user.js)。  

## 简介

现已支持百度阿里天翼迅雷夸克移动六大网盘，可使用IDM等工具下载，完美适配Chrome，Edge等18种浏览器，可在无法安装客户端的环境下使用，助手免费开源。😎  
![TamperMonkeyBeta 篡改猴测试版](https://img.shields.io/badge/TamperMonkeyBeta_篡改猴测试版-v5.0.6190-red.svg)
![TamperMonkey 篡改猴](https://img.shields.io/badge/TamperMonkey_篡改猴-v4.19.0-brightgreen.svg)
![Violentmonkey 暴力猴](https://img.shields.io/badge/Violentmonkey_暴力猴-v2.15.0-brown.svg)  
![Google Chrome-≥76.0](https://img.shields.io/badge/Google_Chrome-≥76.0-yellow.svg)
![Microsoft Edge-≥88.0](https://img.shields.io/badge/Microsoft_Edge-≥88.0-blue.svg)
![支持平台](https://img.shields.io/badge/支持平台-Windows_|_Mac_|_Linux_|_Android-blueviolet.svg)


#### 卑微的小标题

这个脚本只有一个人在修改\~如果喜欢的话还请留个[好评](https://greasyfork.org/scripts/449291/feedback)和Star哦\~   
- 如有bug等问题请在这发[议题反馈](https://github.com/hmjz100/Online-disk-direct-link-download-assistant/issues)  
- 或者在[GreasyFork反馈](https://greasyfork.org/scripts/449291/feedback)，如果看到的话我会尽量修改。

## 统计~

![Daily Installs](https://palerock.cn/node-service/images/greasyfork/stats/daily-installs/449291)
![Daily Updates](https://palerock.cn/node-service/images/greasyfork/stats/daily-updates/449291)
![Total Installs](https://palerock.cn/node-service/images/greasyfork/stats/total-installs/449291)
![Fan Score](https://palerock.cn/node-service/images/greasyfork/info/fan_score/449291?name=得分&rcolor=orange)
![Good Ratings](https://palerock.cn/node-service/images/greasyfork/info/good_ratings/449291?name=好评&rcolor=darkcyan)
![Views Info](https://palerock.cn/node-service/images/greasyfork/views-info/449291)
![License](https://palerock.cn/node-service/images/greasyfork/info/license/449291?name=许可证&rcolor=blueviolet)  

![Starchart](https://starchart.cc/hmjz100/Online-disk-direct-link-download-assistant.svg)

## 版本号
V. 1.0.8.3（改自6.1.4版本）  
- 如果 此处公布的脚本版本号 与 您获取到本脚本的网站 上公布的脚本版本号不一致，请不要安装，因为那可能是盗脚本的网站   
例如 MonkeyFork 就是盗用本脚本的网站之一，本脚本目前仅在 Github 与 Greasy(或者Sleazy?)Fork 发布，如果您是在其他渠道获取到本脚本的，请不要安装。

## 更新日志

| 版本号 | 创建日期 | 更新日志 |
| -------- | -------- | -------- |
| 1.0.8.3 | 2024年02月11日 | 1、适配阿里云盘新域名alipan.com。 |
| 1.0.8.2 | 2023年11月29日 | 1、更换新图标。 |
| 1.0.8.1 | 2023年11月25日 | 1、修复因重复绑定按钮而导致RPC下载会发送多条下载请求的Bug；<br>2、选择不使用油小猴服务器时，“用ghproxy连接Github仓库”更换为“用jsdelivr连接Github仓库”；<br>3、跟进官方V6.1.4版本，修复移动网盘无法获取链接，支持阿里云盘新域名alipan.com。 |
| 1.0.8   | 2023年11月05日 | 1、修复迅雷网盘勾选文件后仍提示未勾选。 |
| 1.0.7.9 | 2023年11月05日 | 1、更新精简网盘元素匹配规则，防止因通知横条而导致不能点到“API下载”以下的按钮。 |
| 1.0.7.8 | 2023年09月10日 | 1、跟进官方V6.1.2，加入V2接口；<br>2、修复百度网盘下载时因为获取不到accessToken而一直转圈。 |
| 1.0.7.7 | 2023年09月03日 | 1、修复百度网盘的按钮会因为主题不同而被改变颜色的Bug；<br>2、更新夸克网盘按钮与界面。 |
| 1.0.7.6 | 2023年09月01日 | 1、修复“注入”功能；<br>2、黑暗模式支持随设置热切换。 |
| 1.0.7.5 | 2023年08月31日 | 1、修复阿里云盘下载逻辑；<br>2、精简代码；<br>3、支持深色模式；<br>4、修改部分提示文本；<br>5、修改部分CSS；<br>6、设置可测试RPC连接。 |
| 1.0.7.4 | 2023年08月27日 | 1、优化下载逻辑；<br>2、修复阿里云盘无法使用API下载。 |
| 1.0.7.3 | 2023年08月24日 | 1、如果出现网络请求错误时支持自动重新请求；<br>2、可选择是否使用油小猴服务器。 |
| 1.0.7.2 | 2023年07月29日 | 1、修复使用RPC下载时会重复发送链接的Bug。 |
| 1.0.7.1 | 2023年07月27日 | 1、\[实验功能，不影响正常使用\]支持百度网盘手机网页版，勾选文件后可在顶栏找到“下载助手”按钮。 |
| 1.0.7   | 2023年07月26日 | 1、重构夸克网盘、阿里云盘按钮。 |
| 1.0.6.9 | 2023年07月25日 | 1、下载窗口加入关闭按钮。 |
| 1.0.6.8 | 2023年07月24日 | 1、修复夸克网盘按钮错位。 |
| 1.0.6.7 | 2023年07月24日 | 1、将百度网盘界面修改为主题色，可在设置选择是否修改；<br>2、增加主题色名称，更改部分内容颜色；<br>3、移动云盘API下载支持批量复制；<br>4、优化控制台输出结果；<br>5、百度网盘API下载不使用IDM时可以显示剩余时间；<br>6、“取消点亮按钮”按钮的位置现已移动到设置页面。<br>7、homo特有的彩蛋又回来力(喜)。 |
| 1.0.6.6 | 2023年06月07日 | 1、修复暗号错误。 |
| 1.0.6.5 | 2023年06月04日 | 1、修复即使输入正确暗号也不能成功点亮按钮的服务器错误。 |
| 1.0.6.4 | 2023年06月02日 | 1、跟进官方V6.1.1版本，修复阿里云盘获取下载链接时的问题。 |
| 1.0.6.3 | 2023年05月19日 | 1、照顾小屏幕用户，将始终显示复制全部链接的按钮；<br>2、增加取消下载时的动画。 |
| 1.0.6.2 | 2023年05月08日 | 1、修复部分界面错位，实现CSS内置；<br>2、百度网盘界面将变得更加简洁。 |
| 1.0.6.1 | 2023年05月06日 | 1、新增百度云盘API下载支持复制链接；<br>2、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；<br>3、修改CSS，界面会出现更多的主题色；<br>4、支持在游小猴官网查看暗号；<br>5、修复部分语法错误。 |
| 1.0.6   | 2023年04月15日 | 1、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击API下载；<br>2、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘。 |
| 1.0.5.5 | 2023年04月01日 | 1、感谢[Night-stars](https://github.com/Night-stars-1)的帮助，修复因为原作者服务器导致的初始化暗号识别错误；<br>2、修改一些文本以及提供给服务器的信息。 |
| 1.0.5.4 | 2023年03月13日 | 1、小修小改css，让主题色出现在更多地方；<br>2、修改下载链接获取失败的提示；<br>3、增加更多的主题色，可在助手设置查看；<br>4、homo彩蛋被删去力（悲）。 |
| 1.0.5.3 | 2023年03月10日 | 1、阿里云盘可以摸到下载菜单了。 |
| 1.0.5.2 | 2022年10月04日 | 1、增加脚本信息菜单；<br>2、优化阿里云盘显示svg图片；<br>3、修改弹窗按钮颜色。 |
| 1.0.5.1 | 2022年09月30日 | 1、修复在切换按钮主题后夸克网盘不能正常显示按钮。 |
| 1.0.5   | 2022年09月21日 | 1、跟进官方5.9.4版，修复文件名识别。 |
| 1.0.4   | 2022年08月13日 | 1、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；<br>2、在下载菜单增加“助手设置”“更新日志”按钮；<br>3、修改阿里云盘和夸克网盘下载助手按钮样式；<br>4、增加“取消点亮按钮”油猴菜单；<br>5、修改部分css，使其与选择的主题更贴切。 |
| 1.0.3   | 2022年08月11日 | 1、增加homo特有的彩蛋 |
| 1.0.2   | 2022年08月10日 | 1、修改并加宽界面，调整部分css，使Sweetalert2界面更美观，更与原版相近；<br>2、修改部分提示文字，使文字更容易复制。 |
| 1.0.1   | 2022年08月10日 | 1、去除更新提示；<br>2、更新Sweetalert2至11版本。 |
| 1.0.0   | 2022年08月10日 | (脚本发布)<br>1、增加“注入”功能（bushi）；<br>2、去除广告。 |

---

<p align="center">这是给认真阅读完README文件的人的赞美</p>
<!--1、增加“**注入**”功能（bushi）；  
2、**去除广告**；  
3、更新**Sweetalert2**至11版本；  
4、部分CDN节点更换为jsdelivr；  
5、去除更新提示；  
6、修改并加宽界面，调整部分css，使Sweetalert2界面更美观，更与原版相近；  
7、增加一个小彩蛋 提示：homo（需在未点亮按钮状态触发）；  
【需要重新恢复按钮为未点亮状态请进入 已安装脚本->编辑->开发者->重置到出厂->确定】  
8、修改/增加默认**主题色**；  
9、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；  
10、终于来了，在下载菜单增加“助手设置”“更新日志”按钮；  
【再也不用点进油猴管理再进设置了(保留油猴管理内设置)】  
11、修改阿里云盘和夸克网盘下载助手按钮样式；  
12、增加“取消点亮按钮”油猴菜单；  
13、修改部分css，使其与选择的主题更贴切；  
14、跟进官方5.9.4版，修复文件名识别；  
15、修复在切换按钮主题后夸克网盘不能正常显示按钮；  
16、增加脚本信息菜单（没有用）；  
17、优化阿里云盘显示svg图片；  
18、修改弹窗按钮颜色；  
19、修啦修啦，阿里云盘可以摸到下载菜单了；  
20、小修小改css，让主题色出现在更多地方；  
21、修改下载链接获取失败的提示；  
22、增加更多的主题色，可在助手设置查看；  
23、homo彩蛋被删去力（悲）；  
24、感谢[Night-stars-1](https://githubfast.com/Night-stars-1)的帮助，修复因为原作者服务器导致的初始化暗号识别错误；  
25、修改一些文本以及提供给服务器的信息；  
26、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击API下载；  
27、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘；  
28、新增百度云盘API下载支持复制链接；  
29、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；  
30、修改CSS，界面会出现更多的主题色；  
31、支持在游小猴官网查看暗号；  
32、修复部分语法错误；  
33、修复部分界面错位，实现CSS内置；  
34、百度网盘界面将变得更加简洁；  
35、照顾小屏幕用户，将始终显示复制全部链接的按钮；  
36、增加取消下载时的动画。  
37、跟进官方V6.1.1版本，修复阿里云盘获取下载链接时的问题；  
38、修复即使输入正确暗号也不能成功点亮按钮的服务器错误；  
39、修复暗号错误。  
40、将百度网盘界面修改为主题色，可在设置选择是否修改；  
41、增加主题色名称，更改部分内容颜色；  
42、移动云盘API下载支持批量复制；  
43、优化控制台输出结果；  
44、百度网盘API下载不使用IDM时可以显示剩余时间；  
45、“取消点亮按钮”按钮的位置现已移动到设置页面；  
46、homo特有的彩蛋又回来力(喜)；  
47、修复夸克网盘按钮错位；  
48、下载窗口加入关闭按钮；  
49、重构夸克网盘、阿里云盘按钮；  
50、\[实验功能，不影响正常使用\]支持百度网盘手机网页版，勾选文件后可在顶栏找到“下载助手”按钮；  -->

<!--
#### 带有*的为文字注释

1、“简介”为[【网盘直链下载助手】原简介](https://greasyfork.org/zh-CN/scripts/436446)精简后得来的文字简介  
2、“主题色”指紫色，如不喜欢，你可在助手选项中更改-->
<!--如果你的“下载助手”图标需要很长时间才能显示，请进入脚本管理器编辑脚本，尝试将本脚本第28行和30行的“cdn.jsdelivr.net”替换为“fastly.jsdelivr.net”并在工具栏点击“文件→保存”，但这样会使脚本管理器无法自动检测脚本更新，所以在编辑界面下选择“设置→更新→将“检查更新”勾选并保存”即可。-->
<!--因[上一个修改作者](https://greasyfork.org/zh-CN/scripts/422818)已经弃坑，所以由我来代其更新。

## 公告

1. 在网站“MonkeyFork”上的帐号“hmjz100”非本人，[MonkeyFork链接](https://www.monkeyfork.com/scripts/185.html)，[这个帐号](https://www.monkeyfork.com/users/10044-hmjz113.html)才是本人  
2. **如果遇到了只加载出油猴菜单，没有出现“下载助手”按钮的情况，请先打开任意网盘页面，进入脚本菜单**(点击Tampermonkey图标即可打开，如下图)中的`⚙ 设置`→在打开的`助手设置`弹窗找到`使用油小猴服务器`→选择`不使用 [用 jsdelivr 连接本项目 Github 仓库](更新可能不及时)`可能会暂时解决该情况。   
![2](https://greasyfork.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3pKQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9a082a73b5617faa71ad0ae5f048f27c87df4ff6/1.png)
3. 要是连油猴菜单也没有加载出来的话，请检查网络环境能否打开[`unpkg.com`](https://unpkg.com)，  
我使用的DNS是微软推荐的`4.2.2.1`和`4.2.2.2`，可以正常访问[`unpkg.com`](https://unpkg.com)和[`api.youxiaohou.com`](https://api.youxiaohou.com)

**本脚本是 <a>网盘直链</a> 获取，而 <a>不提供</a> 会员链接解析功能，只是为了给会员用户免下载网盘客户端使用的。**  
###### (那些写着“查找内部隐藏优惠券”的脚本【大部分】都是搬运的现成脚本引用【不明来源】的查找优惠券脚本，装多了会影响你的购物体验(毕竟代码都不同，而且有可能收集你的隐私信息)，并且脚本作者能够盈利，所以各位还是要小心呀)

**如果遇到了只加载出油猴菜单，没有出现“下载助手”按钮的情况，请先打开任意网盘页面，进入脚本菜单中的`⚙ 设置`→在打开的`助手设置`弹窗找到`使用油小猴服务器`→选择`不使用 [用 jsdelivr 连接本项目 Github 仓库](更新可能不及时)`可能会暂时解决该情况。**   
![2](https://greasyfork.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3pKQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9a082a73b5617faa71ad0ae5f048f27c87df4ff6/1.png)
--> 
