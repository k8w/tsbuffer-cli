import { i18n as zhCN } from './zh-cn';
import { i18n as enUS } from './en-us';

// 根据系统语言判断中英文
const envKeys = ['LC_ALL', 'LC_MESSAGES', 'LANG', 'LANGUAGE'];
export const i18n = envKeys.some(v => process.env[v] && process.env[v]!.toLowerCase().indexOf('zh_cn') > -1) ? zhCN : enUS;