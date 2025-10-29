import { defHttp } from "@/plugins/http/axios";

// 获取轮播图数据
export const getBannerList = (params: any) =>
  defHttp.get({ url: `/front/carouselImage/operateCarouselImages`, params }, { hideLoading: true });

// 获取金刚区数据
export const getSubNavList = (params: any) => defHttp.get({ url: "/front/quickLink", params }, { hideLoading: true });

// 获取广告位数据
export const getAdvertisement = (params: any) =>
  defHttp.get({ url: "/front/advertisingSpace", params }, { hideLoading: true });

// 获取首页推荐商品
export const getRecommendProducts = (params: any) =>
  defHttp.get({ url: "/front/routeCommodity", params }, { hideLoading: true });
