import { redirect } from 'next/navigation';
import { RoutesInfos } from '@/types/router/routerInfo';

export async function goToMain() {
  await redirect(RoutesInfos.BASIC_INFO.path);
}
