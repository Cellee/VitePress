### 1. 获取配置信息 $.$$ 的内容释义

| 字段      | 释义 |
| ----------- | ----------- |
| receiptShowType      | 默认传统模式 1=1页模式   2=多步骤模式       |
| previewShowType      | 默认传统模式 1=传统模式，2=财务业务分离模式        |
| previewLinkType      | 默认传统模式 1=传统模式，2=财务业务分离模式        |
| previewLinkFrozen    | 默认传统模式 1=传统模式，2=财务业务分离模式        |
| Column      | 已存在的单据信息        |
| DataDialog      | 前置单据弹窗        |
| Forms      | Column一样        |
| GlobalParam      | 全局系统参数配置        |
| MainComponentsFirst      | 首页图标信息        |
| Module      | 导航栏        |
| OperationMarkTemplate      | ？？        |
| OriginalParam      | 导航栏        |
| Param      | 本单位配置信息        |
| ParamGuide      | 单位管理模式配置信息        |
| REQUEST_FORM      | 单前单据信息步骤、面板      |
| TIPS      | 表单验证提示      |
| Templet      | 单据模板      |

### 2. 单据中 BILLDATA 字段释义
| 字段      | 释义 |
| ----------- | ----------- |
| BASE      | 用户基本信息      |
| CONFIG      | 正在创建单据信息      |
| DEPARTMENT      | 用户所有单位信息      |
| DOCUMENTTEMPLETATT      | ？？？      |
| USER   | 用户信息      |
| WORKFLOW.SUBMITKEYS      | 本次提交要素      |

#### NK_Receipt   -- 初始化界面
```
//根据配置初始化界面
$(document).NK_Receipt('init', {
    code: m_$.formCode,
    loadhandle: m_Handle_Load,
    savehandle: m_Handle_Save,
    checkhandle: m_Handle_Check
});
```
#### NK_Uploadify  -- 上传组件
```

//  init 初始化
//  initone  用于浏览和审批页面追加附件
//  initfapiao  用于浏览和审批页面追加发票

$('#lstAttachment').NK_Uploadify('init');
```
#### NK.TipsInit  -- 气泡提示框   NK.MainTipsInit  -- 整页提示框  NK.TableTipsInit  -- 表格提示框
```
//初始化气泡提示
$.NK.TipsInit();

// 整页提示  -- 很少使用
$.NK.MainTipsInit();

//初始化气泡提示
$.NK.TableTipsInit();

```
#### NK_ReceiptComponent  --  单据组件
```
// 初始化
$.NK_ReceiptComponent();
```

#### NK_R_List

#### NK_UIFill