export = {
    welcome: '欢迎进入 TSBuffer 实用工具  版本 V${version}',
    help: `
使用说明：

    tsbuffer proto <options>                生成Proto文件
        -f, --file <file>                   用来生成Proto的TS文件（glob表达式）
        -o, --out <file>                    输出的文件路径    
        --old <file>                        要兼容的旧Proto文件路径
    tsbuffer encode <options>               编码JSON字符串
    tsbuffer decode <options>               解码二进制数据（形如 "0F A2 E3 F2 D9" )
    tsbuffer validate <options>             验证JSON数据
    tsbuffer show <file>                    打印二进制文件内容

示例：

    tsbuffer proto --out service.proto --old service.proto **/{Ptl|Msg}*.ts
`,
    errCmd: '[错误] 命令格式有误，键入 tsbuffer -h 以查看帮助。'
}