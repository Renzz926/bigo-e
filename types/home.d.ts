interface PublicAttr {
  name: string;
  imageUrl: string;
  correlationType: string | number | null;
  correlationContent: string | number | null;
}

export interface BannerItem extends PublicAttr {
  sort: number;
}

export interface SubMenuItem extends PublicAttr {
  id: number;
}

export interface ProductItem {
  commodityCenterSpuId: number;
  commodityId: number;
  pic: string;
  commodityName: string;
  price: string;
}

export interface ProductItemInGroup {
  commodityCenterSpuId: number;
  commodityId: number;
  pic: string;
  commodityName: string;
  price: string;
}

export interface CouponDataItem {
  couponName: string;
  couponType: number;
  couponThresholdDiscountRule: string;
  description: string;
  applyAllSpu: number;
  status: number;
  validityStartTime: number;
  validityEndTime: number;
  [propName: string]: any;
}

export interface CouponDetailType {
  validityStartTime: number | undefined;
  validityEndTime: number | undefined;
  [propName: string]: any;
}

export interface CouponGoodType {
  spuId: number;
  name: string;
  pic: string;
  price: number;
}

interface ExternalData {
  sale?: number;
  [propName: string]: any;
}

interface DetailType {
  pic?: string;
  price?: string;
  externalData?: ExternalData;
  [propName: string]: any;
}

export interface ProductDetailType {
  detail: DetailType;
}

export interface OrderDetailType {
  commodityName: string;
  studentName: string;
  studentExtendInformation: string;
  reason: string;
  totalAmount: number;
  balanceOrderAmount: number;
  applyTime: number;
  refundTime: number;
  actualRefundAmount: number;
  id: number;
  verifyStatus: number;
  actualAmount: number;
  auditOpinion: string;
}
