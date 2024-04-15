import { RouterType } from '@/types/router/routerType';
export interface RoutesInfo {
  BASIC_INFO: RouterType;
  SELF_INTRODUCTION: RouterType;
}

export const RoutesInfos: RoutesInfo = {
  BASIC_INFO: new RouterType('/', '기본정보'),
  SELF_INTRODUCTION: new RouterType('/resume/self-introduction', '자기소개'),
};
