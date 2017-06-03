# 坎帕斯前端学院 
***
## 学习笔记
### 通信与信息工程学院  谌放  2016210574

* QQ：575923486 
* 邮箱：[**@小丑的独角戏台**](https://mail.qq.com/cgi-bin/frame_html?sid=3cMc4wafMGNvDix1&r=db865c2e4d244aa94e56a0ca229d3f9c)
* Github：[**@C-Fun**](https://github.com/C-Fun)

***
## 第十四周作业笔记

### CSS实现背景渐变效果

#### 垂直渐变

	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='起始颜色',endColorStr='结束颜色',gradientType='0'/*垂直渐变*/);
	background: -moz-linear-gradient(top, 起始颜色, 结束颜色);
	background: -o-linear-gradient(top,起始颜色, 结束颜色);
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(起始颜色), to(结束颜色));

#### 水平渐变

	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='起始颜色',endColorStr='结束颜色',gradientType='1'/*水平渐变*/);
	background: -moz-linear-gradient(left, 起始颜色, 结束颜色);
	background: -o-linear-gradient(left,起始颜色, 结束颜色);
	background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(起始颜色), to(结束颜色));

### CSS实现背景透明边框不透明

	background:rgba(0,0,0,0)/*背景透明*/

### CSS box-shadow

	box-shadow:x轴偏移量 y轴偏移量 阴影模糊量 阴影扩散量 阴影颜色;

### 虚线边框样式

	border: [x]px dashed [color];