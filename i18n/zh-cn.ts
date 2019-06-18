export = {
    welcome: '欢迎进入 TSBuffer 命令行实用工具\n版本 V${version}',
    help: `
使用说明：

    tsbuffer proto [options] <file>         生成Proto文件
        -o, --out <file>                    输出的文件路径    
        --old <file>                        要兼容的旧Proto文件路径
    tsbuffer encode <content>               编码JSON字符串
    tsbuffer decode <content>               解码二进制数据（形如 "0F A2 E3 F2 D9" )
    tsbuffer validate                       验证JSON数据
    tsbuffer show                           打印二进制文件内容

示例：

    tsbuffer proto -o output.proto --old old.proto **/{Ptl|Msg}*.ts
`,
}