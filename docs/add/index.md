## 超预算配置
1. 业务配置-支出事项定义-选择费用-设置超出报销比例
<img src="/add/8.jpg" width="100%">

## 根据系统参数设置配置单据基本信息显示隐藏（eg:报销人填写模式）
1. 在-后台配置-单位管理模式-设置好模式名称  
<img src="/add/4.jpg" width="100%">

2. 在后台配置-单据个性化自定义-<code>Ctrl</code>+<code>Alt</code>+<code>M</code>+<code>K</code> 开启高级模式
<img src="/add/5.jpg" width="100%">

3. 在后面选择系统参数关联选择自定义模式
 <img src="/add/6.jpg" width="100%">
 <img src="/add/7.jpg" width="100%">

## 新增特殊操作步骤

1. 后台配置-其他功能配置
2. <code>Ctrl</code>+<code>Alt</code>+<code>M</code>+<code>K</code> 开启全部配置
3. 新增特殊操作-记住编号  
   <img src="/add/1.jpg" width="100%">

4. 前往后台配置-审批流程配置-设计流程绑定特殊操作  
   <img src="/add/2.jpg" width="80%">
5. 勾选新增特殊操作
   <img src="/add/3.jpg" width="100%">
6. 前往文件<code>component/seven.special.js</code>编辑特殊操作步骤

```
// 特殊操作
$.NK.Check.Special[编号] = function (container) {}
```

7. 移动端<code>mobile/lib/seven.special.js</code>
