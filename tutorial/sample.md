---
theme : "white"
transition: "slide"
highlightTheme: "monokai"
logoImg: "icon.png"
slideNumber: false
title: "CopyTranslator-v9.0.0-寒渐 快速上手"

---
<link href="https://cdn.bootcss.com/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
<style>
.wrapper{
    display: grid;
    width:100%;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.wrapper2{
    display: grid;
    width:100%;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.item{
    width:100%;
    height:100%;
}
.desc{
    font-size:23px;
}
.align{
  text-align:left;
}

.img2{
    border:none;
}
</style>
<div style="display:grid;grid-template-columns: 2fr 5fr;height:150px;">
<div style="display:flex;flex-direction:row-reverse;justify-content:flex;align-items:center;height:150px;width:100%;"><img src="icon.png" style="height:60%;border:none;box-shadow:none;"></img></div>
<div style="display:flex;flex-direction:row;justify-content:flex;align-items:center;height:150px;width:100%;"><img src="https://s2.ax1x.com/2019/12/12/QyaTne.png" style="height:100%;border:none;box-shadow:none;"></img></div>
</div>

<h4>
复制即翻译的外文辅助阅读翻译解决方案</h4>
<p class="desc">v9.0.0 寒渐</p>

Elliott Zheng

---

### 声明
<p class="desc align">&nbsp;&nbsp;本软件基于<a href="https://github.com/CopyTranslator/CopyTranslator/blob/master/LICENSE">GPL v2协议</a><font color="red">开源</font>，开发者为 <a href="https://github.com/elliottzheng">Elliott Zheng</a>，<font color="red">软件无任何收费,同时禁止任何人出售本软件。</font></p>
<p class="desc align">&nbsp;&nbsp;
如果您觉得软件对您有所帮助，在<a href="https://github.com/CopyTranslator/CopyTranslator">Github</a>一个star就是对项目极大的支持，欢迎介绍给朋友使用。</p>

<p class="desc align">&nbsp;&nbsp;欢迎转载本软件，转载无需告知作者，但请一定附上项目地址,<font color="red">未附上项目地址的软件转载行为均未经过授权。</font>项目地址为：</p>

<p class="desc"><a href="https://github.com/copytranslator/CopyTranslator">https://github.com/copytranslator/CopyTranslator</a></p>

<p class="desc">在线翻译资源来自互联网，版权属于相关网站，软件仅供交流使用。</p>

<p class="desc"><font color="red">软件二次分发存在巨大风险，因此请尽量通过官方文档提供的下载方式下载。</font></p>
<p class="desc align">&nbsp;&nbsp;本软件构建于海量开源库之上，对于引用到的主要开源库，均已在官网的致谢中列出。如果本软件对大家开发软件有所启发，作者会非常高兴，如果能注明创意来源那就更好了。一声不吭照抄全部功能的人那就比较讨厌了，当然作者也拿这种人没办法，谁让人家不要脸呢。</p>

---

#### 核心特性
<div class="wrapper">
<div class="item">
    <i class="fas fa-clipboard"></i>
<p>复制翻译</p>
<p class="desc">只需复制文本到剪贴板，下一秒即可查看翻译结果，享受所见即所得的快感。</p>
</div>
<div class="item">
    <i class="fas fa-scroll"></i>
<p>优化翻译</p>
<p class="desc">解决多余的断句和换行带来的乱码问题，翻译结果更符合阅读习惯。</p>
</div>
<div class="item">
    <i class="fas fa-hand-point-up"></i>
<p >拖拽复制</p>
<p class="desc">无限接近划译的系统级原创实现，拖拽选中文本即可复制。</p>
</div>
<div class="item">
    <i class="fas fa-book"></i>
<p>智能词典</p>
<p class="desc">对于短语或单词，您将在专注模式上看到更详细的解释。</p>
</div>
<div class="item">
    <i class="fas fa-clone"></i>
<p >双模式</p>
<p class="desc">专注模式和对照模式快速切换应对不同场景。</p>
</div>
<div class="item">
    <i class="fas fa-robot"></i>
<p>智能互译</p>
<p class="desc">检测语言，根据所设置的源语言与目标语言智能地进行转换，你觉得就是它觉得。</p>
</div>

</div>

---

#### 更多特性
<div class="wrapper2">
<div class="item">
    <i class="fas fa-angle-double-left"></i>
<p >增量复制</p>
</div>
<div class="item">
    <i class="fas fa-cubes"></i>
<p>聚合引擎</p>
</div>

<div class="item">
    <i class="fas fa-comments"></i>
<p>快速通知</p>

</div>
<div class="item">
    <i class="fas fa-copy"></i>
<p >自动复制</p>
</div>

<div class="item">
    <i class="fas fa-paste"></i>
<p>自动粘贴</p>

</div>
<div class="item">
    <i class="fas fa-sync"></i>
<p>自动更新</p>

</div>
<div class="item">
    <i class="fas fa-eye-slash"></i>
<p>自动隐藏</p>

</div>
<div class="item">
    <i class="fas fa-eye"></i>
<p >自动显示</p>

</div>


<div class="item">
    <i class="fas fa-memory"></i>
<p>设置记忆</p>

</div>


</div>

---

#### 复制翻译
<p class="desc align">CopyTranslator监听到剪贴板变化，会将剪贴板内容进行处理（如去除多余换行等），并显示翻译结果，翻译效果相比于直接复制黏贴到网页版翻译有了巨大的改善，同时翻译所需时间也大大减少，借助于强大的在线翻译API，翻译质量有保证。有效提高人们阅读及翻译外文文献的效率。</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNF4Qf.gif" ></img>

<p class="desc">翻译引擎目前支持Youdao、Baidu、Google、Caiyun、Sogou、Tencent</p>


---

#### 拖拽复制
<p class="desc align">在打开拖拽复制选项后，只需拖拽选中文字，即可复制。
<font color="red">其机制为当鼠标拖动一定时间和距离后释放，会模拟一次Ctrl+C，拖动后的释放很重要，不是按越久越好。</font></p>
<img style="width: auto;height:auto;max-width: 100%;max-height: 30vh;border:none;" src="https://s2.ax1x.com/2019/09/19/nOKkFA.gif" ></img>

<p class="desc align" >
<font color="red">拖拽复制触发时会模拟Ctrl+C，在大部分场景中，这都意味着安全的复制，但在某些场景中可能会引起一些意料之外的问题，如剪贴板数据被覆盖、Ctrl+C中断命令行程序等等。</font> </p>

---

#### 智能互译
<p class="desc align">CopyTranslator会自动识别所复制的文本，根据所设置的源语言和目标语言进行自动智能互译，也就是说，如果您复制的是源语言，会翻译为目标语言，复制目标语言则会翻译为源语言。</p>

<img style="width: auto;height:auto;max-width: 500px;max-height: 100%;border:none;" src="https://s2.ax1x.com/2019/12/07/QNluBn.jpg" ></img>

<p class="desc">上图源语言为英语，而复制了中文，智能互译会自动将中文翻译为英语，无需切换设置。</p>

---

#### 智能词典

<p class="desc">
对于英语单词和部分短语，将自动调用查词引擎，在专注模式上提供更详细的解释。</p>

<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/04/Q1CAYQ.png" ></img>



<p class="desc">查词引擎目前支持Youdao，Bing及Google，通过右下角按钮在切换不同查词引擎</p>

---

#### 双模式之对照模式
<p class="desc">对照模式适应于频繁交互,可以快速地设置各种选项，并同时显示原文和译文以供对照。</p>

<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/Qtb5sP.png" ></img>

---

#### 双模式之专注模式
<p class="desc">专注模式只提供一个结果窗口，让您更好地关注翻译结果</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNwrCj.png" ></img>


---

#### 自动复制
<p class="desc">如果您想在翻译后自动复制译文到剪贴板，请勾选它。</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNKNnI.gif" ></img>



---

#### 自动粘贴

<p class="desc">自动复制之后模拟ctrl+v自动黏贴，替换选中文字。</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNMS8e.gif" ></img>

---

#### 增量复制
<p class="desc">将复制的文本附加到原文后而不是替换它。</p>
<p class="desc align">例如一个段落的文档因换页分割在两个页面里，复制的时候可能得先复制前半段，再复制一次后半段，此时利用增量复制可以避免复制后半段替换前半段的情况发生。</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNFdRx.gif" ></img>

---

#### 贴边隐藏
<p class="desc align">专注模式窗口贴上边（Y坐标小于0）|贴左边|贴右边 失去焦点后会自动隐藏，可设置，另外可设置翻译后自动显示。所谓失去焦点指的是，原本焦点在专注模式，而后鼠标/键盘点击其他软件，焦点转移这一事件。</p>
<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QN0lLV.gif" ></img>



<p class="desc">当专注模式处于贴边收起时可以点击其下边缘，使其获得焦点，专注模式展开。 </p>


---

#### 自动显示
<p class="desc">
勾选此选项后，当专注模式处于收起状态，且监听到剪贴板变化，专注模式将自动展开。</p>

<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QN0Qs0.gif" ></img>

<p class="desc"><font color="red">展开后想要收起结果框，请先点击一下结果框，后点击其他地方，如果自动隐藏选项处于打开状态则结果框会收起。</font></p>

---

#### 快速通知

<p class="desc">可以在通知中看到翻译结果（过长的翻译结果无法显示完全）</p>

<img style="width: auto;height:30vh;max-width: 100%;max-height:50vh;border:none;" src="https://s2.ax1x.com/2019/12/07/QNMm8g.gif" ></img>


---

# Thanks
基本教程到此结束

详细内容以及进阶内容参见使用指南

- 自定义界面样式/风格
- 自定义全局快捷键
- 自定义局部快捷键
- 自定义右键菜单/面板
