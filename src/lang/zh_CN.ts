export default {
  // 路由国际化
  route: {
    dashboard: '首页',
    document: '项目文档'
  },
  // 登录页面国际化
  login: {
    selectPlaceholder: '请选择/输入公司名称',
    username: '用户名',
    password: '密码',
    login: '登 录',
    logging: '登 录 中...',
    code: '验证码',
    rememberPassword: '记住我',
    switchRegisterPage: '立即注册',
    rule: {
      tenantId: {
        required: '请输入您的租户编号'
      },
      username: {
        required: '请输入您的账号'
      },
      password: {
        required: '请输入您的密码'
      },
      code: {
        required: '请输入验证码'
      }
    },
    social: {
      wechat: '微信登录',
      maxkey: 'MaxKey登录',
      topiam: 'TopIam登录',
      gitee: 'Gitee登录',
      github: 'Github登录'
    }
  },
  // 注册页面国际化
  register: {
    selectPlaceholder: '请选择/输入公司名称',
    username: '用户名',
    password: '密码',
    confirmPassword: '确认密码',
    register: '注 册',
    registering: '注 册 中...',
    registerSuccess: '恭喜你，您的账号 {username} 注册成功！',
    code: '验证码',
    switchLoginPage: '使用已有账户登录',
    rule: {
      tenantId: {
        required: '请输入您的租户编号'
      },
      username: {
        required: '请输入您的账号',
        length: '用户账号长度必须介于 {min} 和 {max} 之间'
      },
      password: {
        required: '请输入您的密码',
        length: '用户密码长度必须介于 {min} 和 {max} 之间',
        pattern: '不能包含非法字符：{strings}'
      },
      code: {
        required: '请输入验证码'
      },
      confirmPassword: {
        required: '请再次输入您的密码',
        equalToPassword: '两次输入的密码不一致'
      }
    }
  },
  // 导航栏国际化
  navbar: {
    full: '全屏',
    language: '语言',
    dashboard: '首页',
    document: '项目文档',
    message: '消息',
    search: '搜索',
    layoutSize: '布局大小',
    selectTenant: '选择租户',
    layoutSetting: '布局设置',
    personalCenter: '个人中心',
    logout: '退出登录',
    logoutConfirm: '确定注销并退出系统吗？'
  },

  // 公共国际化
  common: {
    delete: '删除',
    edit: '编辑',
    return: '回退',
    add: '新增',
    view: '查看',
    search: '搜索',
    reset: '重置',
    export: '导出',
    confirm: '确认',
    cancel: '取消',
    close: '关闭',
    save: '保存',
    submit: '提交',
    clear: '清除',
    clearAll: '清空全部',
    operation: '操作',
    tip: '提示',
    ok: '确定',
    unit: '单位',
    valueType: '值类型',
    limitMin: '最小值',
    limitMax: '最大值',
    placeholderInput: '请输入',
    remark: '备注',
    placeholderSelect: '请选择',
    noEmpty: '不能为空',
    success: '操作成功',
    deleteSuccess: '删除成功',
    editSuccess: '编辑成功',
    addSuccess: '新增成功',
    exportSuccess: '导出成功',
    saveSuccess: '保存成功',
    submitSuccess: '提交成功',
    operationSuccess: '操作成功',
    description: '描述',
    // 下载相关
    downloading: '正在下载数据，请稍候',
    downloadError: '下载文件出现错误，请联系管理员！',
    // 工具栏组件
    toolbar: {
      hideSearch: '隐藏搜索',
      showSearch: '显示搜索',
      refresh: '刷新',
      showHideColumns: '显示/隐藏列'
    },
    // 分页组件
    pagination: {
      total: '共 {total} 条',
      pageSize: '条/页',
      goTo: '前往',
      page: '页'
    },
    // 通用符号和占位符
    rangeSeparator: ' ~ ',
    noData: '-',
    noElementName: '-',
    // 通用确认对话框
    systemPrompt: '系统提示',
    warning: '警告',
    info: '信息',
    error: '错误',
    question: '问题',
    // 通用操作按钮
    generate: '生成',
    import: '导入',
    preview: '预览',
    sync: '同步',
    generateCode: '生成代码',
    copy: '复制',
    all: '全部',
    downloadTemplate: '下载模板',
    more: '更多',
    resetPassword: '重置密码',
    assignRole: '分配角色',
    // 通用字段
    status: '状态',
    version: '版本',
    operator: '操作员',
    system: '系统',
    none: '无',
    startDate: '开始日期',
    endDate: '结束日期',
    to: '至',
    id: '编号',
    code: '代码',
    category: '类别',
    loading: '加载中...',
    required: '必填',
    cannotBeEmpty: '不能为空',

    // 通用表单字段
    functionAuthor: '功能作者',
    // 通用文件操作
    importData: '导入数据',
    exportData: '导出数据',
    // 通用状态值
    statusEnable: '启用',
    statusDisable: '禁用',
    statusPending: '待填写',
    statusPendingConfig: '待配置',
    toBeExport: '待导出',
    statusConfirmed: '已确认',
    statusAll: '全部',
    statusOk: '合格',
    statusKo: '不合格',
    normal: '正常',
    failed: '失败',
    // 通用占位符
    // 通知相关
    notice: '通知',
    announcement: '公告',
    readAll: '全部已读',
    read: '已读',
    unread: '未读',
    messageEmpty: '消息为空'
  },

  // 系统管理
  system: {
    // 系统名称和首页
    app: {
      name: 'BIGO',
      loading: '正在加载系统资源，请耐心等待',
      welcome: '欢迎使用BIGO',
      description: '欢迎使用BIGO',
      dashboard: {
        certificate: {
          title: '证书管理',
          description: '管理和跟踪产品认证证书'
        },
        lab: {
          title: '实验室管理',
          description: '管理认证实验室信息'
        },
        report: {
          title: '报告管理',
          description: '生成和管理认证报告'
        },
        workflow: {
          title: '工作流程'
        }
      }
    },

    // 客户端管理模块
    client: {
      // 页面标题
      title: '客户端管理',
      // 搜索表单
      searchForm: {
        clientKey: '客户端密钥',
        clientSecret: '客户端秘钥',
        status: '状态'
      },
      // 表格列
      columns: {
        id: '编号',
        clientId: '客户端ID',
        clientKey: '客户端密钥',
        clientSecret: '客户端秘钥',
        grantType: '授权类型',
        deviceType: '设备类型',
        activeTimeout: 'Token活跃超时时间',
        timeout: 'Token固定超时时间',
        status: '状态',
        operation: '操作'
      },
      // 表单字段
      form: {
        clientKey: '客户端密钥',
        clientSecret: '客户端秘钥',
        grantType: '授权类型',
        deviceType: '设备类型',
        activeTimeout: 'Token活跃超时时间',
        timeout: 'Token固定超时时间',
        status: '状态'
      },
      // 占位符
      placeholders: {
        inputClientKey: '请输入客户端密钥',
        inputClientSecret: '请输入客户端秘钥',
        selectGrantType: '请选择授权类型',
        selectDeviceType: '请选择设备类型',
        inputActiveTimeout: '请输入Token活跃超时时间',
        inputTimeout: '请输入Token固定超时时间'
      },
      // 提示信息
      tooltips: {
        activeTimeout: '指定时间无操作则过期（单位：秒），默认30分钟（1800秒）',
        timeout: '指定时间必定过期（单位：秒），默认七天（604800秒）'
      },
      // 对话框标题
      dialogs: {
        addClient: '添加客户端管理',
        editClient: '修改客户端管理'
      },
      // 确认消息
      confirm: {
        deleteConfirm: '是否确认删除客户端管理编号为"{ids}"的数据项？',
        statusChangeConfirm: '确认要"{action}"吗?'
      },
      // 成功消息
      success: {
        addSuccess: '新增成功',
        editSuccess: '修改成功',
        deleteSuccess: '删除成功',
        exportSuccess: '导出成功',
        statusEnableSuccess: '启用成功',
        statusDisableSuccess: '停用成功'
      },
      // 状态相关
      status: {
        enable: '启用',
        disable: '停用'
      },
      // 验证消息
      validation: {
        idNotNull: '编号不能为空',
        clientIdNotNull: '客户端ID不能为空',
        clientKeyNotBlank: '客户端密钥不能为空',
        clientSecretNotBlank: '客户端秘钥不能为空',
        grantTypeNotNull: '授权类型不能为空',
        deviceTypeNotNull: '设备类型不能为空'
      }
    },
    // 角色管理模块
    role: {
      // 页面标题
      title: '角色管理',
      // 搜索表单
      searchForm: {
        roleName: '角色名称',
        roleKey: '权限字符',
        status: '状态',
        createTime: '创建时间',
        startDate: '开始日期',
        endDate: '结束日期'
      },
      // 表格列
      columns: {
        roleId: '角色编号',
        roleName: '角色名称',
        roleKey: '权限字符',
        roleSort: '显示顺序',
        status: '状态',
        createTime: '创建时间',
        operation: '操作'
      },
      // 按钮操作
      actions: {
        add: '新增',
        edit: '修改',
        delete: '删除',
        export: '导出',
        dataScope: '数据权限',
        assignUser: '分配用户'
      },
      // 对话框标题
      dialogs: {
        addRole: '添加角色',
        editRole: '修改角色',
        dataScope: '分配角色数据权限'
      },
      // 表单字段
      form: {
        roleName: '角色名称',
        roleKey: '权限字符',
        roleSort: '角色顺序',
        status: '状态',
        menuPermission: '菜单权限',
        remark: '备注'
      },
      // 占位符
      placeholders: {
        inputRoleName: '请输入角色名称',
        inputRoleKey: '请输入权限字符',
        selectStatus: '角色状态',
        inputContent: '请输入内容'
      },
      // 验证规则
      validation: {
        roleNameRequired: '角色名称不能为空',
        roleKeyRequired: '权限字符不能为空',
        roleSortRequired: '角色顺序不能为空'
      },
      // 权限选项
      permissions: {
        expandCollapse: '展开/折叠',
        selectAll: '全选/全不选',
        parentChild: '父子联动',
        loading: '加载中，请稍候'
      },
      // 数据范围选项
      dataScope: {
        allData: '全部数据权限',
        customData: '自定数据权限',
        deptData: '本部门数据权限',
        deptSubData: '本部门及以下数据权限',
        selfData: '仅本人数据权限',
        deptSelfData: '部门及以下或本人数据权限'
      },
      // 提示信息
      tooltips: {
        roleKeyHelp: "控制器中定义的权限字符，如：@SaCheckRole('admin')",
        edit: '修改',
        delete: '删除',
        dataScope: '数据权限',
        assignUser: '分配用户'
      },
      // 确认消息
      confirm: {
        deleteConfirm: '是否确认删除角色编号为"{roleId}"的数据项？',
        statusChangeConfirm: '确认要"{action}"角色"{roleName}"吗？'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功',
        statusChangeSuccess: '{action}成功'
      },
      // 角色用户分配
      authUser: {
        title: '已分配用户',
        searchForm: {
          userName: '用户名称',
          phonenumber: '手机号码'
        },
        columns: {
          userName: '用户名称',
          nickName: '用户昵称',
          email: '邮箱',
          phonenumber: '手机',
          status: '状态',
          createTime: '创建时间',
          operation: '操作'
        },
        actions: {
          addUser: '添加用户',
          batchCancel: '批量取消授权',
          close: '关闭',
          cancelAuth: '取消授权'
        },
        placeholders: {
          inputUserName: '请输入用户名称',
          inputPhoneNumber: '请输入手机号码'
        },
        tooltips: {
          cancelAuth: '取消授权'
        },
        confirm: {
          cancelUserAuth: '确认要取消该用户"{userName}"角色吗？',
          cancelBatchAuth: '是否取消选中用户授权数据项？'
        },
        success: {
          cancelAuthSuccess: '取消授权成功'
        }
      },
      // 选择用户对话框
      selectUser: {
        title: '选择用户',
        searchForm: {
          userName: '用户名称',
          phonenumber: '手机号码'
        },
        columns: {
          userName: '用户名称',
          nickName: '用户昵称',
          email: '邮箱',
          phonenumber: '手机',
          status: '状态',
          createTime: '创建时间'
        },
        placeholders: {
          inputUserName: '请输入用户名称',
          inputPhoneNumber: '请输入手机号码'
        },
        validation: {
          selectUser: '请选择要分配的用户'
        },
        success: {
          assignSuccess: '分配成功'
        }
      }
    },
    // 菜单管理模块
    menu: {
      // 字段标签
      field: {
        menuName: '菜单名称',
        icon: '图标',
        orderNum: '排序',
        perms: '权限标识',
        component: '组件路径',
        status: '状态',
        createTime: '创建时间',
        parentMenu: '上级菜单',
        menuType: '菜单类型',
        isFrame: '是否外链',
        path: '路由地址',
        queryParam: '路由参数',
        isCache: '是否缓存',
        visible: '显示状态',
        menuStatus: '菜单状态'
      },
      // 菜单类型
      type: {
        directory: '目录',
        menu: '菜单',
        button: '按钮'
      },
      // 缓存选项
      cache: {
        cache: '缓存',
        noCache: '不缓存'
      },
      // 操作按钮
      action: {
        expandCollapse: '展开/折叠',
        addMenu: '添加菜单',
        editMenu: '修改菜单'
      },
      // 占位符
      placeholder: {
        selectParentMenu: '选择上级菜单'
      },
      // 提示信息
      tooltip: {
        isFrame: '选择是外链则路由地址需要以`http(s)://`开头',
        path: '访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头',
        component: '访问的组件路径，如：`system/user/index`，默认在`views`目录下',
        perms: "控制器中定义的权限字符，如：@SaCheckPermission('system:user:list')",
        queryParam: '访问路由的默认传递参数，如：`{"id": 1, "name": "ry"}`',
        isCache: '选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致',
        visible: '选择隐藏则路由将不会出现在侧边栏，但仍然可以访问',
        status: '选择停用则路由将不会出现在侧边栏，也不能被访问'
      },
      // 验证消息
      validation: {
        menuNameRequired: '菜单名称不能为空',
        orderNumRequired: '菜单顺序不能为空',
        pathRequired: '路由地址不能为空'
      },
      // 确认消息
      confirm: {
        deleteConfirm: '是否确认删除名称为"{menuName}"的数据项？'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功'
      },
      // 根类目
      rootCategory: '主类目'
    },
    // 用户管理模块
    user: {
      // 搜索表单
      searchForm: {
        userName: '用户名称',
        phonenumber: '手机号码',
        status: '用户状态',
        createTime: '创建时间',
        startDate: '开始日期',
        endDate: '结束日期'
      },
      // 表格列
      columns: {
        userId: '用户编号',
        userName: '用户名称',
        nickName: '用户昵称',
        deptName: '部门',
        phonenumber: '手机号码',
        status: '状态',
        createTime: '创建时间',
        operation: '操作'
      },
      // 表单字段
      form: {
        nickName: '用户昵称',
        belongDept: '归属部门',
        phonenumber: '手机号码',
        email: '用户邮箱',
        userName: '用户名称',
        password: '用户密码',
        sex: '用户性别',
        status: '用户状态',
        post: '岗位',
        role: '角色',
        remark: '备注'
      },
      // 操作按钮
      actions: {
        add: '新增',
        edit: '修改',
        delete: '删除',
        more: '更多',
        downloadTemplate: '下载模板',
        importData: '导入数据',
        exportData: '导出数据'
      },
      // 占位符
      placeholders: {
        searchDept: '请输入部门名称',
        inputUserName: '请输入用户名称',
        inputPhone: '请输入手机号码',
        inputNickName: '请输入用户昵称',
        selectDept: '请选择归属部门',
        inputEmail: '请输入邮箱',
        inputPassword: '请输入密码',
        selectSex: '请选择用户性别',
        selectPost: '请选择岗位',
        selectRole: '请选择角色',
        inputRemark: '请输入备注'
      },
      // 提示信息
      tooltips: {
        edit: '修改',
        delete: '删除',
        resetPassword: '重置密码',
        assignRole: '分配角色'
      },
      // 状态
      status: {
        enabled: '启用',
        disabled: '禁用'
      },
      // 验证消息
      validation: {
        userNameRequired: '用户名称不能为空',
        userNameLength: '用户名称长度必须介于 2 和 20 之间',
        nickNameRequired: '用户昵称不能为空',
        passwordRequired: '用户密码不能为空',
        passwordLength: '用户密码长度必须介于 5 和 20 之间',
        passwordPattern: '密码不能包含非法字符：< > " \' | \\',
        emailFormat: '请输入正确的邮箱地址',
        phoneFormat: '请输入正确的手机号码',
        roleRequired: '用户角色不能为空'
      },
      // 确认消息
      confirm: {
        deleteConfirm: '是否确认删除用户编号为"{userId}"的数据项？',
        statusChangeConfirm: '确认要{action}用户"{userName}"吗？',
        resetPasswordConfirm: '请输入"{userName}"的新密码'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功',
        statusChangeSuccess: '{action}成功',
        resetPasswordSuccess: '重置"{password}"密码成功，新密码是：{password}'
      },
      // 对话框标题
      dialogs: {
        addUser: '添加用户',
        editUser: '修改用户',
        userImport: '用户导入'
      },
      // 导入相关
      import: {
        dragText: '将文件拖到此处，或',
        clickUpload: '点击上传',
        updateExisting: '更新已经存在的用户数据',
        fileFormat: '仅允许导入xls、xlsx格式文件。',
        importResult: '导入结果'
      },
      // 个人中心
      profile: {
        personalInfo: '个人信息',
        basicData: '基本资料',
        userInfo: {
          userName: '用户名称',
          phonenumber: '手机号码',
          email: '邮箱',
          department: '所属部门',
          role: '所属角色',
          createTime: '创建时间'
        },
        tabs: {
          userinfo: '用户信息',
          resetPwd: '重置密码',
          thirdParty: '第三方账号',
          onlineDevice: '在线设备'
        },
        form: {
          nickName: '用户昵称',
          phonenumber: '手机号码',
          email: '邮箱',
          sex: '性别',
          male: '男',
          female: '女'
        },
        validation: {
          nickNameRequired: '用户昵称不能为空',
          emailRequired: '邮箱地址不能为空',
          emailInvalid: '请输入正确的邮箱地址',
          phonenumberRequired: '手机号码不能为空',
          phonenumberInvalid: '请输入正确的手机号码'
        },
        messages: {
          updateSuccess: '修改成功'
        },
        onlineDevice: {
          deviceType: '设备类型',
          host: '主机',
          loginLocation: '登录地点',
          operatingSystem: '操作系统',
          browser: '浏览器',
          loginTime: '登录时间',
          deleteConfirm: '删除设备后，在该设备登录需要重新进行验证'
        }
      }
    },
    // 部门管理模块
    dept: {
      // 搜索表单
      searchForm: {
        deptName: '部门名称',
        deptCategory: '类别编码',
        status: '状态'
      },
      // 表格列
      columns: {
        deptName: '部门名称',
        deptCategory: '类别编码',
        orderNum: '排序',
        status: '状态',
        createTime: '创建时间'
      },
      // 表单字段
      form: {
        parentDept: '上级部门',
        deptName: '部门名称',
        deptCategory: '类别编码',
        orderNum: '显示排序',
        leader: '负责人',
        phone: '联系电话',
        email: '邮箱',
        status: '部门状态'
      },
      // 操作按钮
      actions: {
        toggleExpand: '展开/折叠'
      },
      // 占位符
      placeholders: {
        deptName: '请输入部门名称',
        deptCategory: '请输入类别编码',
        status: '部门状态',
        selectParentDept: '选择上级部门',
        selectLeader: '请选择负责人',
        phone: '请输入联系电话',
        email: '请输入邮箱'
      },
      // 提示信息
      tooltips: {
        edit: '修改',
        add: '新增',
        delete: '删除'
      },
      // 验证消息
      validation: {
        parentId: {
          required: '上级部门不能为空'
        },
        deptName: {
          required: '部门名称不能为空'
        },
        orderNum: {
          required: '显示排序不能为空'
        },
        email: {
          format: '请输入正确的邮箱地址'
        },
        phone: {
          format: '请输入正确的手机号码'
        }
      },
      // 确认消息
      confirm: {
        delete: '是否确认删除名称为"{name}"的数据项?'
      },
      // 对话框标题
      dialogs: {
        add: {
          title: '添加部门'
        },
        edit: {
          title: '修改部门'
        }
      }
    },
    // 岗位管理模块
    post: {
      // 搜索表单
      searchForm: {
        postCode: '岗位编码',
        postCategory: '类别编码',
        postName: '岗位名称',
        deptId: '部门',
        status: '状态',
        deptName: '部门名称'
      },
      // 表格列
      columns: {
        postId: '岗位编号',
        postCode: '岗位编码',
        postCategory: '类别编码',
        postName: '岗位名称',
        deptName: '部门',
        postSort: '排序',
        status: '状态',
        createTime: '创建时间'
      },
      // 表单字段
      form: {
        postName: '岗位名称',
        deptId: '部门',
        postCode: '岗位编码',
        postCategory: '类别编码',
        postSort: '岗位顺序',
        status: '岗位状态',
        remark: '备注'
      },
      // 操作按钮
      actions: {
        add: '新增',
        edit: '修改',
        delete: '删除',
        export: '导出'
      },
      // 占位符
      placeholders: {
        postCode: '请输入岗位编码',
        postCategory: '请输入类别编码',
        postName: '请输入岗位名称',
        selectDept: '请选择部门',
        status: '岗位状态',
        remark: '请输入内容'
      },
      // 提示信息
      tooltips: {
        edit: '修改',
        delete: '删除'
      },
      // 验证消息
      validation: {
        postName: {
          required: '请输入岗位名称'
        },
        postCode: {
          required: '请输入岗位编码'
        },
        deptId: {
          required: '请选择部门'
        },
        postSort: {
          required: '请输入岗位顺序'
        }
      },
      // 确认消息
      confirm: {
        delete: '是否确认删除岗位编号为"{id}"的数据项？'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功'
      },
      // 对话框标题
      dialogs: {
        add: {
          title: '添加岗位'
        },
        edit: {
          title: '修改岗位'
        }
      }
    },
    // 字典管理模块
    dict: {
      // 搜索表单
      searchForm: {
        dictName: '字典名称',
        dictType: '字典类型',
        createTime: '创建时间'
      },
      // 表格列
      columns: {
        dictId: '字典编号',
        dictName: '字典名称',
        dictType: '字典类型',
        remark: '备注',
        createTime: '创建时间',
        operation: '操作'
      },
      // 表单字段
      form: {
        dictName: '字典名称',
        dictType: '字典类型',
        remark: '备注'
      },
      // 操作按钮
      actions: {
        add: '新增',
        edit: '修改',
        delete: '删除',
        export: '导出',
        refreshCache: '刷新缓存'
      },
      // 占位符
      placeholders: {
        dictName: '请输入字典名称',
        dictType: '请输入字典类型',
        remark: '请输入内容',
        startDate: '开始日期',
        endDate: '结束日期'
      },
      // 提示信息
      tooltips: {
        edit: '修改',
        delete: '删除'
      },
      // 验证消息
      validation: {
        dictName: {
          required: '字典名称不能为空'
        },
        dictType: {
          required: '字典类型不能为空'
        }
      },
      // 确认消息
      confirm: {
        delete: '是否确认删除字典编号为"{id}"的数据项？'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功',
        refreshSuccess: '刷新成功'
      },
      // 对话框标题
      dialogs: {
        add: {
          title: '添加字典类型'
        },
        edit: {
          title: '修改字典类型'
        }
      },
      // 字典数据管理
      dictData: {
        // 搜索表单
        searchForm: {
          dictType: '字典名称',
          dictLabel: '字典标签'
        },
        // 表格列
        columns: {
          dictCode: '字典编码',
          dictLabel: '字典标签',
          dictValue: '字典键值',
          dictSort: '字典排序',
          remark: '备注',
          createTime: '创建时间',
          operation: '操作'
        },
        // 表单字段
        form: {
          dictType: '字典类型',
          dictLabel: '数据标签',
          dictValue: '数据键值',
          cssClass: '样式属性',
          dictSort: '显示排序',
          listClass: '回显样式',
          remark: '备注'
        },
        // 占位符
        placeholders: {
          dictLabel: '请输入字典标签',
          dictValue: '请输入数据键值',
          cssClass: '请输入样式属性',
          remark: '请输入内容'
        },
        // 验证消息
        validation: {
          dictLabel: {
            required: '数据标签不能为空'
          },
          dictValue: {
            required: '数据键值不能为空'
          },
          dictSort: {
            required: '数据顺序不能为空'
          }
        },
        // 确认消息
        confirm: {
          delete: '是否确认删除字典编码为"{id}"的数据项？'
        },
        // 成功消息
        success: {
          operationSuccess: '操作成功',
          deleteSuccess: '删除成功'
        },
        // 对话框标题
        dialogs: {
          add: {
            title: '添加字典数据'
          },
          edit: {
            title: '修改字典数据'
          }
        },
        // 回显样式选项
        listClassOptions: {
          default: '默认',
          primary: '主要',
          success: '成功',
          info: '信息',
          warning: '警告',
          danger: '危险'
        }
      }
    },
    // 通知管理模块
    notice: {
      // 搜索表单
      searchForm: {
        noticeTitle: '公告标题',
        createByName: '操作人员',
        noticeType: '类型'
      },
      // 表格列
      columns: {
        noticeId: '序号',
        noticeTitle: '公告标题',
        noticeType: '公告类型',
        status: '状态',
        createByName: '创建者',
        createTime: '创建时间',
        operation: '操作'
      },
      // 表单字段
      form: {
        noticeTitle: '公告标题',
        noticeType: '公告类型',
        status: '状态',
        content: '内容'
      },
      // 操作按钮
      actions: {
        add: '新增',
        edit: '修改',
        delete: '删除'
      },
      // 占位符
      placeholders: {
        noticeTitle: '请输入公告标题',
        createByName: '请输入操作人员',
        noticeType: '公告类型'
      },
      // 提示信息
      tooltips: {
        edit: '修改',
        delete: '删除'
      },
      // 验证消息
      validation: {
        noticeTitle: {
          required: '公告标题不能为空'
        },
        noticeType: {
          required: '公告类型不能为空'
        }
      },
      // 确认消息
      confirm: {
        delete: '是否确认删除公告编号为"{id}"的数据项？'
      },
      // 成功消息
      success: {
        operationSuccess: '操作成功',
        deleteSuccess: '删除成功'
      },
      // 对话框标题
      dialogs: {
        add: {
          title: '添加公告'
        },
        edit: {
          title: '修改公告'
        }
      }
    },
    // 日志管理模块
    log: {
      // 操作日志管理模块
      operlog: {
        // 搜索表单
        searchForm: {
          operAddress: '操作地址',
          systemModule: '系统模块',
          operator: '操作人员',
          type: '类型',
          status: '状态',
          operTime: '操作时间',
          startDate: '开始日期',
          endDate: '结束日期'
        },
        // 表格列
        columns: {
          logNumber: '日志编号',
          systemModule: '系统模块',
          operType: '操作类型',
          operator: '操作人员',
          department: '部门',
          operAddress: '操作地址',
          operStatus: '操作状态',
          operDate: '操作日期',
          costTime: '消耗时间',
          millisecond: '毫秒',
          operation: '操作'
        },
        // 操作按钮
        actions: {
          delete: '删除',
          clean: '清空',
          export: '导出',
          detail: '详细'
        },
        // 详情对话框
        detail: {
          title: '操作日志详细',
          operStatus: '操作状态',
          normal: '正常',
          failed: '失败',
          loginInfo: '登录信息',
          requestInfo: '请求信息',
          operModule: '操作模块',
          operMethod: '操作方法',
          requestParam: '请求参数',
          returnParam: '返回参数',
          costTime: '消耗时间',
          operTime: '操作时间',
          exceptionInfo: '异常信息'
        },
        // 确认消息
        confirm: {
          clean: '是否确认清空所有操作日志数据项?',
          delete: '是否确认删除日志编号为"{id}"的数据项?'
        },
        // 成功消息
        success: {
          clean: '清空成功',
          delete: '删除成功'
        },
        // 占位符
        placeholders: {
          operAddress: '请输入操作地址',
          systemModule: '请输入系统模块',
          operator: '请输入操作人员',
          operType: '操作类型',
          operStatus: '操作状态'
        }
      },
      // 登录日志管理模块
      logininfor: {
        // 搜索表单
        searchForm: {
          loginAddress: '登录地址',
          userName: '用户名称',
          status: '状态',
          loginTime: '登录时间',
          startDate: '开始日期',
          endDate: '结束日期'
        },
        // 表格列
        columns: {
          accessNumber: '访问编号',
          userName: '用户名称',
          client: '客户端',
          deviceType: '设备类型',
          address: '地址',
          loginLocation: '登录地点',
          operatingSystem: '操作系统',
          browser: '浏览器',
          loginStatus: '登录状态',
          description: '描述',
          accessTime: '访问时间'
        },
        // 操作按钮
        actions: {
          delete: '删除',
          clean: '清空',
          unlock: '解锁',
          export: '导出'
        },
        // 确认消息
        confirm: {
          delete: '是否确认删除访问编号为"{id}"的数据项?',
          clean: '是否确认清空所有登录日志数据项?',
          unlock: '是否确认解锁用户"{username}"数据项?'
        },
        // 成功消息
        success: {
          delete: '删除成功',
          clean: '清空成功',
          unlock: '用户{username}解锁成功'
        },
        // 占位符
        placeholders: {
          loginAddress: '请输入登录地址',
          userName: '请输入用户名称',
          loginStatus: '登录状态'
        }
      }
    }
  }
};
