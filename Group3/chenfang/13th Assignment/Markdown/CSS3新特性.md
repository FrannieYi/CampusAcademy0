# 坎帕斯前端学院 
***
## 学习笔记
### 通信与信息工程学院  谌放  2016210574

* QQ：575923486 
* 邮箱：[**@小丑的独角戏台**](https://mail.qq.com/cgi-bin/frame_html?sid=3cMc4wafMGNvDix1&r=db865c2e4d244aa94e56a0ca229d3f9c)
* Github：[**@C-Fun**](https://github.com/C-Fun)

***

## CSS3
***

### CSS3伪类选择器之"nth-child()"

**语法：**

**:nth-child(an+b)**

* 简单数字序号写法
  * :nth-child(number)

直接匹配第number个元素。参数number必须为大于0的整数。
	
	例子：
	li:nth-child(3){background:orange;}/*把第3个LI的背景设为橙色*/

* 倍数写法
 * :nth-child(an)
 
匹配所有倍数为a的元素。其中参数an中的字母n不可缺省，它是倍数写法的标志，如3n、5n。

	例子：
	
	li:nth-child(3n){background:orange;}/*把第3、第6、第9、…、所有3的倍数的LI的背景设为橙色*/

* 倍数分组匹配
 * :nth-child(an+b) 与 :nth-child(an-b)
 
先对元素进行分组，每组有a个，b为组内成员的序号，其中字母n和加号+不可缺省，位置不可调换，这是该写法的标志，其中a,b均为正整数或0。如3n+1、5n+1。但加号可以变为负号，此时匹配组内的第a-b个。（其实an前面也可以是负号，但留给下一部分讲。）

	例子：
	
	li:nth-child(3n+1){background:orange;}/*匹配第1、第4、第7、…、每3个为一组的第1个LI*/
	
	li:nth-child(3n+5){background:orange;}/*匹配第5、第8、第11、…、从第5个开始每3个为一组的第1个LI*/
	
	li:nth-child(5n-1){background:orange;}/*匹配第5-1=4、第10-1=9、…、第5的倍数减1个LI*/
	
	li:nth-child(3n±0){background:orange;}/*相当于(3n)*/
	
	li:nth-child(±0n+3){background:orange;}/*相当于(3)*/

* 反向倍数分组匹配
 * :nth-child(-an+b)

此处一负一正，均不可缺省，否则无意义。这时与:nth-child(an+1)相似，都是匹配第1个，但不同的是它是倒着算的，从第b个开始往回算，所以它所匹配的最多也不会超过b个。

	例子：
	
	li:nth-child(-3n+8){background:orange;}/*匹配第8、第5和第2个LI*/
	
	li:nth-child(-1n+8){background:orange;}/*或(-n+8)，匹配前8个（包括第8个）LI，这个较为实用点，用来限定前面N个匹配常会用到*/
* 奇偶匹配
 * :nth-child(odd) 与 :nth-child(even)

分别匹配序号为奇数与偶数的元素。奇数(odd)与(2n+1)结果一样；偶数(even)与(2n+0)及(2n)结果一样。


**表格奇偶数行定义样式就可以写成
.table > tr:nth-child(even) > td {background-color: #ccc;}  （偶数行）
.table > tr:nth-child(odd) > td {background-color: #ccc;}  （奇数行）**

***

### CSS3 transition属性以及focus伪类

transition属性和伪类共同使用可以实现鼠标响应时内容大小的逐渐变化

	.box
	{
		width:100px;
		transition: width 2s;
		-moz-transition: width 2s; /* Firefox 4 */
		-webkit-transition: width 2s; /* Safari 和 Chrome */
		-o-transition: width 2s; /* Opera */
	}
	
	.box:hover{
		width:300px;
	}



* ease    规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。    

* ease-in    规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。    

* ease-out    规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。    

* ease-in-out    规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。    

focus伪类控制文本输入input在鼠标点击之后的样式

	input{
		width:100px;
		transition: width 2s;
		-moz-transition: width 2s; /* Firefox 4 */
		-webkit-transition: width 2s; /* Safari 和 Chrome */
		-o-transition: width 2s; /* Opera */
	}

	input:focus{
		width:300px;
	}




***
###transition-property——指定要运动的样式
 
**transition-property的语法**

[css]
transition-property :all(所有属性改变) || [attr] (指定要运动的样式)|| none(没有属性改变)
 
* transition-property的属性值
　 
 * none：transition马上停止执行
 * all：元素产生任何属性值变化时都将执行transition效果
 * attr：指定要运动的样式

* transition-duration

	transition-duration是指定元素转换过程的持续时间，单位为秒(s)。transition-duration可以作用于所有元素，包括:before和:after伪元素。其默认值是0，也就是变换时是即时的。

* transition-delay—— 延迟时间

	transition-delay是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行transition效果，单位为s(秒)，其使用和transition-duration极其相似，也可以作用于所有元素，包括:before和:after伪元素。 默认大小是"0"，也就是变换立即执行，没有延迟。

* transition-timing-function——指定运动形式

	transition-timing-function ： ease(逐渐变慢) | linear(匀速) | ease-in(加速) | ease-out(减速) | ease-in-out(先加速然后减速) | cubic-bezier(该值允许你去自定义一个时间曲线)(number, number, number, number>)

**transition的综合写法**
[css]
元素选择器{transition:运动的样式 持续时间 运动形式 延迟时间;}

<br/>
**transition的综合兼容写法**

* Mozilla内核

	[css]
	元素选择器{-moz-transition:运动的样式 持续时间 运动形式 延迟时间;}

* Webkit内核
	[css]
	元素选择器{-webkit-transition:运动的样式 持续时间 运动形式 延迟时间;}

* Opera内核
	
	[css]
	元素选择器{-o-transition:运动的样式 持续时间 运动形式 延迟时间;}

* W3C 标准
	
	[css]
	元素选择器{transition:运动的样式 持续时间 运动形式 延迟时间;}

***
### CSS :target伪类选择器

target伪类选择器可以用来选择当前活动的元素

例如一个a标签的href="#box"，那么#box:target则是控制当点击该a标签时id为box的div的样式


###伪类target的使用技巧

#### 隐藏或者显示内容

**一个简单的应用是用伪类:target 去显示和隐藏目标内容。举个例子，在博客中我们可能不想在我们点击前显示评论内容。要达成这个目的我们可以用:target 。**

		<a href="#comments">Show Comments</a>
		
		<section id="comments">  
		  <h3>Comments</h3>
		  <!-- Comments here... -->
		  <a href="#">Hide Comments</a>
		</section>

		#comments:not(:target) {
		  isplay: none;
		}
		#comments:target {
		  display: block;
		}

#### 一个滑动抽屉导航

**另一个用例是创建一个滑动抽屉导航。我们可以固定窗口的导航栏来保证我们在点击打开时不会跳来跳去。**
		
		#nav {  
		  position: fixed;
		  top: 0;
		  height: 100%;
		  width: 80%;
		  max-width: 400px;
		}
		#nav:not(:target) {
		  right: -100%;
		  transition: right 1.5s;
		}
		#nav:target {
		  right: 0;
		  transition: right 1s;
		}


#### 一个弹出的Modal窗口

**更进一步，我们可以创建一个modal窗口来铺满整个页面。**

	#modal-container {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background: rgba(0,0,0,0.8);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.modal {
	  width: 70%;
	  background: #fff;
	  padding: 20px;
	  text-align: center;
	}
	#modal-container:not(:target) {
	  opacity: 0;
	  visibility: hidden;
	  transition: opacity 1s, visibility 1s;
	}
	#modal-container:target {
	  opacity: 1;
	  visibility: visible;
	  transition: opacity 1s, visibility 1s;
	}

#### 更改全局样式

**可以用来用到:target元素本身，来重新定义其样式或者改变其布局。**

	#body:not(:target) {
	  main { width: 60%; }
	  aside { width: 30%; }
	  .show-sidebar-link { display: none; }
	}
	
	#body:target {
	  main { width: 100%; }
	  aside { display: none; }
	  .hide-sidebar-link { display: none; }
	}


***

## CSS transform动画技术
CSS动画的实现需要我们先建立一个动作，用特定的mouseover或其它事件触发它。一般不是让动作立即完成，而是指定一个动作的发生以及持续方案，让动作在一定时间间隔内完成。


**早期版本的现代浏览器需要在CSS使用浏览器引擎标识前缀才能正确的应用CSS变换功能，火狐是-moz-，谷歌是-webkit-，Opera是-o-，IE10仍然需要-ms-前缀。**

#### CSS transform 简介

CSS Transform效果是指通过在浏览器里让网页元素移动、旋转、透明、模糊等方法来实现改变其外观的技术。在CSS里定义的变化动作会在页面生成前应用到网页元素上，所以你看不到发生的过程。然而，这些变化动作也可以由mouseover或其它相似事件触发，这样我们就可以看到它的动作过程。下一节里我们将会看到这些。

在下面，我们放置了4个完全相同的用div做成的盒子，大小是 100x60px，边框宽2px。之后，我们设定-webkit-transform属性来让它发生不同的变化：

box 1	移动到右边：-webkit-transform: translate(3em,0);
box 2	顺时针旋转30度-webkit-transform: rotate(30deg);
box 3	移动到左下方：-webkit-transform: translate(-3em,1em);
box 4	尺寸放大两倍：-webkit-transform: scale(2);

需要说的是，这些经过变换的元素中的文字仍然是可选中的，包括发生旋转的那个。被放大了的那个盒子的其它属性也相应发生了变化，比如它的边框和里面文字的大小都放大了。

#### 让页面动起来

