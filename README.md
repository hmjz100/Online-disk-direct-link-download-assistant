# （改）网盘直链下载助手 | Online disk direct link download assistant
可以获取网盘文件真实下载地址。基于【网盘直链下载助手】修改，原作者：https://www.baiduyun.wiki/ ，自用，去广告，无需输入“暗号”即可使用，甚至比原版还要好用！

<hr><h1>说明</h1>
基于<a href="https://www.baiduyun.wiki/" rel="nofollow">【网盘直链下载助手】</a>修改（改自最新6.0.4版本），原作者：https://www.baiduyun.wiki/ ，<br>
原脚本：https://greasyfork.org/zh-CN/scripts/436446 。
因<a href="https://greasyfork.org/zh-CN/scripts/422818" rel="nofollow">上一个修改作者</a>已经弃坑，所以由我来代其更新。
<br>GreasyFork链接：<a href="https://greasyfork.org/zh-CN/scripts/449291" rel="nofollow">greasyfork.org/zh-CN/scripts/449291</a>
<br>因网络环境，发布新脚本时GreasyFork是最快更新的。
<br><hr>
<h1>*简介</h1>
现已支持百度阿里天翼迅雷夸克移动六大网盘，可使用IDM等工具下载，完美适配Chrome，Edge等18种浏览器，可在无法安装客户端的环境下使用，助手免费开源。😎
<br><hr>
<h4>卑微的小标题</h4>
这个脚本只有一个人在修改~如果喜欢的话还请留个好评和Star哦~<br>如果你的“下载助手”图标需要很长时间才能显示，请进入脚本管理器编辑脚本，尝试将本脚本第28行和30行的“cdn.jsdelivr.net”替换为“fastly.jsdelivr.net”并在工具栏点击“文件→保存”，但这样会使脚本管理器无法自动检测脚本更新，所以在编辑界面下选择“设置→更新→将“检查更新”勾选并保存”即可。
<br><hr>
<h1>统计~</h1>
<div><img src="https://palerock.cn/node-service/images/greasyfork/stats/daily-installs/449291">  <img src="https://palerock.cn/node-service/images/greasyfork/stats/daily-updates/449291">  <img src="https://palerock.cn/node-service/images/greasyfork/stats/total-installs/449291">  <img src="https://palerock.cn/node-service/images/greasyfork/info/fan_score/449291?name=%E5%BE%97%E5%88%86&rcolor=orange">  <img src="https://palerock.cn/node-service/images/greasyfork/info/good_ratings/449291?name=%E5%A5%BD%E8%AF%84&rcolor=darkcyan">  <img src="https://palerock.cn/node-service/images/greasyfork/views-info/449291">  <img src="https://palerock.cn/node-service/images/greasyfork/info/license/449291?name=%E8%AE%B8%E5%8F%AF%E8%AF%81&rcolor=blueviolet"></div>

<div><img src="https://img.shields.io/badge/TamperMonkeyBeta 篡改猴测试版-v4.19.6183-red.svg" alt="tampermonkeybeta">  <img src="https://img.shields.io/badge/TamperMonkey 篡改猴-v4.18.1-brightgreen.svg" alt="tampermonkey">  <img src="https://img.shields.io/badge/ScriptCat 脚本猫-0.12.0-blue.svg" alt="scriptcat"></div>

<div><img src="https://img.shields.io/badge/Google Chrome-≥76.0-yellow.svg" alt="chrome">  <img src="https://img.shields.io/badge/Microsoft Edge-≥88.0-blue.svg" alt="edge">  <img src="https://img.shields.io/badge/支持平台-Windows%20%7C%20Mac%20%7C%20Linux%20%7C%20Android-blueviolet.svg" alt="platform"></div>
<br><hr>
<h3>最新版本号</h3>
V. 1.0.6.2（改自6.0.4版本）
<br><hr>
<h1>更新日志</h1>
<br>1、增加“<b>注入</b>”功能（bushi）；
<br>2、<b>去除广告</b>；
<br>3、更新<b>Sweetalert2</b>至11版本；
<br>4、部分CDN节点更换为jsdelivr；
<br>5、去除更新提示；
<br>6、增加一个小彩蛋 提示：homo（需在未点亮按钮状态触发）；<br>【需要重新恢复按钮为未点亮状态请进入 已安装脚本->编辑->开发者->重置到出厂->确定】
<br>7、修改/增加默认*主题色*；
<br>大改！
<br>9、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；
<br>10、终于来了，在下载菜单增加“助手设置”“更新日志”按钮；【再也不用点进油猴管理再进设置了(保留油猴管理内设置)】
<br>11、修改阿里云盘和夸克网盘下载助手按钮样式；
<br>12、增加“取消点亮按钮”油猴菜单；
<br>13、修改部分css，使其与选择的主题更贴切；
<br>14、跟进官方5.9.4版，修复文件名识别；
<br>15、修复在切换按钮主题后夸克网盘不能正常显示按钮；
<br>16、增加脚本信息菜单（没有用）；
<br>17、优化阿里云盘显示svg图片；
<br>18、修改弹窗按钮颜色；
<br>19、修啦修啦，阿里云盘可以摸到下载菜单了；
<br>20、小修小改css，让主题色出现在更多地方；
<br>21、修改下载链接获取失败的提示；
<br>22、增加更多的主题色，可在助手设置查看；
<br>23、homo彩蛋被删去力（悲）；
<br>24、感谢<a href="https://githubfast.com/Night-stars-1">Night-stars-1</a>的帮助，修复因为原作者服务器导致的初始化暗号识别错误；
<br>25、修改一些文本以及提供给服务器的信息；
<br>26、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击API下载；
<br>27、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘；
<br>28、新增百度云盘API下载支持复制链接；
<br>29、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；
<br>30、修改CSS，界面会出现更多的主题色；
<br>31、支持在游小猴官网查看暗号；
<br>32、修复部分语法错误；
<br>33、修复部分界面错位，实现CSS内置；
<br>34、百度网盘界面将变得更加简洁。
<br><hr>
<h4>带有*的为文字注释</h4>
1、“简介”为<a href="https://greasyfork.org/zh-CN/scripts/436446" rel="nofollow">【网盘直链下载助手】原简介</a>精简后得来的文字简介
<br>2、“主题色”指紫色，如不喜欢，你可在助手选项中更改
