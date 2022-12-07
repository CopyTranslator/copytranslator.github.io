# Q&A

## 谷歌翻译退出中国市场的解决方案

解决方案推荐程度递减

### 解决方案1-使用谷歌翻译API镜像

**copytranslator在v10.2.3版本后将默认启用谷歌翻译API镜像进行翻译。因此你可能不需要任何配置**。如果翻译API镜像失效的话，可以尝试解决方案2

可以在CopyTranslator的设置页面设置，默认为`https://gtranslate.cdn.haah.net`，将其置空则回退到使用原版谷歌翻译API`https://translate.googleapis.com`。

### 解决方案2-使用开源翻译站点提供的谷歌翻译
v10.2.3以后可以在copytranslator设置界面将`Google翻译源`切换为`simply`,v10.2.4后还可切换为`Lingva`，则应该可以正常使用谷歌翻译，效果与原版谷歌一样。

- [SimplyTranslate](https://simple-web.org/projects/simplytranslate.html) 
- [Lingva Translate](https://github.com/thedaviddelta/lingva-translate)

### 解决方案3-修改hosts
目前暂时可以通过修改 IP 的方式连接到国内的谷歌翻译，但是请注意：谷歌翻译正在逐步关闭国内服务器，所以 IP 地址会不断失效，这也导致会出现修改 hosts / IP 之后过了一段时间（可能是几天，也可能是几个月）谷歌翻译就又不能用了的情况。详细可以参考[划词翻译](https://hcfy.app/)作者写的[说明](https://hcfy.app/blog/2022/09/28/ggg#%E6%96%B9%E6%A1%88-b%E4%BF%AE%E6%94%B9-hosts--ip%E6%97%A0%E9%9C%80%E6%A2%AF%E5%AD%90)，然后你需要按照这里的说明[测试谷歌翻译是否恢复正常](#测试谷歌翻译是否恢复正常)

### 解决方案4-使用网络代理
需要将在copytranslator设置界面把谷歌翻译镜像置空，使其回退到使用原版谷歌翻译API`https://translate.googleapis.com`。

然后在梯子内将 `translate.googleapis.com` 设为走代理（PROXY）即可。不同的软件有不同的设置方式，你需要阅读你所使用的软件的文档或者通过搜索引擎查询该如何设置。

你也可以给梯子开全局模式，也就是所有域名都走国外IP。但是，国内网站的访问速度会因此变慢，所以还是建议花点时间研究下如何添加代理规则。
然后你需要按照这里的说明[测试谷歌翻译是否恢复正常](#测试谷歌翻译是否恢复正常)

## 测试谷歌翻译是否恢复正常

你可以点击这条链接测试谷歌翻译是否有恢复：[点我测试谷歌翻译是否恢复正常](https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fr&q=a)

以 Chrome 浏览器为例：（其它浏览器的表现应该类似）

- 如果浏览器下载了一个名为 `json.txt` 的文件则说明划词翻译内的谷歌翻译已恢复正常。
- 如果出现了谷歌“404. That’s an error.”的错误提示，那说明你依然无法正常使用谷歌翻译

## 复制后无法翻译

   答： 请检查您的网络连接，看一下能不能上
   http://dict.youdao.com
   以及
   https://translate.google.cn/
   这两个网站，国内应该直接能上，如果不能上的话，应该是您的网络问题。
   您可以尝试使用手机4g 和电脑试着访问这两个网址。
   如果仍有疑问，可以在
   https://gitter.im/CopyTranslator/Lobby
   反馈，并附上当时复制的文字

## 智能互译在打开自动检测语言时失效

   答：复制英文翻译成中文，复制中文翻译成英文，更新日志第一条，其他语言设置下source和target就可以，**我一般不开自动检测语言的**，你想想看，如果自动检测语言检测到原文是中文，然后你设置的target也是中文，我总不至于给你翻译成英文吧？**只有说不开自动检测语言，他才会`智能互译`**。如果你开了检测语言，source就无效了，那我肯定只能给你翻译成target。如果没开检测语言，我就认为souce和target需要互相转换。自动检测语言是用来翻译其它语言比较好用，**用来翻译不知道是啥语言的**

## 增量复制如何使用

   答： 增量复制是用来解决一句话被页面断成两句，一次复制不全的场景


## 点按复制无效

   答：8.0.0 以后点按复制默认是关闭的，请确保您已经打开选项。他只是模拟ctrl+c而已，至于能不能复制到不知道了。**不是点一下，是按0.3s,你得先选中，然后移动到选中文字上方，按0.3s放开**(必须要放开哦，不是按越久越好)。我觉得挺好用的其实，如果ctrl+c的话，其实鼠标键盘切换很累的，这个就直接鼠标就可以，而且还不用右键菜单费神找复制选项。这是不知道划译怎么做的凑合方案。你按太久也没啥意义，**我检测的是你的鼠标释放的瞬间，跟你按下的时间间隔，以及鼠标的偏移量不太大就会模拟一次ctrl+c**。**我知道abobe的阅读器就不能用,有些阅读器刚按一下，没放开就取消选中了，那我这个模拟ctrl+c肯定没办法的**。我知道能使用的阅读器有这么一个：文电通PDF阅读器。 

## CopyTranslator的配置目录在哪里
   答：配置目录为用户目录下的copytranslator文件夹，用户目录在不同系统中的位置不同：
   - Windows：`c:\users\你的用户名`
   - Mac：查看[这里](https://www.cnblogs.com/WALKER17/p/6540504.html)