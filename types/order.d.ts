export interface OrderInfo {
  commodityInfo: {
    tripMorningDays: number;
    tripNightDays: number;
    teamName: string;
    commodityPic: string;
    commodityName: string;
    informationList: string;
  };
  amountInfo: {
    totalAmount: number;
    actualAmount: number;
    reduceAmount: number;
    couponReduceAmount: number;
  };
  studentName: string;
  studentId: string | number;
  accountPhone: string | number;
  canUseCouponNum: number;
  studentExtendInformation: any;
}
