export = {
    welcome: '欢迎进入 TSBuffer 实用工具  V${version}',
    help: `
使用说明：

    tsbuffer proto <options>                生成Proto文件
        -i, --input <file>                  用来生成Proto的TS文件（glob表达式）
        -o, --output <file>                 输出的文件路径    
        -c, --compatible <file>             兼容模式：要兼容的旧Proto文件路径
        -u, --ugly                          输出为无缩进的JSON
    tsbuffer encode <options>               编码JSON字符串
        -i, --input <file>                  入文件（内容为JS表达式）
        -e, --expression <expression>       要编码的JS表达式
        -o, --output <file>                 输出的文件路径
        --format bin|hex                    输出格式，bin: 二进制文件， hex: 16进制字符串
    tsbuffer decode <options>               解码二进制数据（形如 "0F A2 E3 F2 D9" )
        -f
    tsbuffer validate <options>             验证JSON数据
    tsbuffer show <file>                    打印二进制文件内容
`.trim(),
    example: `
使用示例：

    tsbuffer proto -i **/Ptl*.ts -o proto.json 
`.trim(),
    errCmd: '[错误] 命令格式有误，键入 tsbuffer -h 以查看帮助。',
    missingFile: '[错误] 缺少 --file 参数，键入 tsbuffer -h 以查看更多信息。',
    protoSucc: '√ Proto已生成到：${output}',
    oldProtoNotFound: '× 旧Proto文件没有找到: ${file}',
    oldProtoParseError: '× 旧Proto文件格式非法: ${file}',
}