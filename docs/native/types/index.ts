import { DefaultTheme } from "vitepress/theme";

type NativeDefaultThemeConfig = Omit<DefaultTheme.Config, "footer1">; // 忽略sidebar属性

export interface NativeThemeConfig extends NativeDefaultThemeConfig {
  /**
   * 页脚信息
   */
  footer?: {
    message?: string;
    copyright?: string;
    copyrightHtml?: String;
    createYear?: number;
  };

  /**
   * 兼容其他未列举配置项
   */
  [key: string]: any;
}
