/** 网络类型 */
type INetworkType = '2g' | '3g';

/** data必要数据 */
type baseData = {
  /** 页码 */
  page: number;
  /** 请求链接 */
  url: string;
}
/** 选项 */
interface IGetNetworkTypeOptions {
  /** 获取成功 */
  success?: (res: {
    /** 网络类型 */
    networkType: INetworkType
  }) => void;
  fail?: Function;
  complete?: Function;
  /** data数据 */
  data: baseData;
}

interface WXStatic {
  /** 获取网络类型 */
  getNetworkType: (options: IGetNetworkTypeOptions) => void;
}

declare var wxxxx: WXStatic