import { createStore, createTypedHooks } from 'easy-peasy';
import { MemberModel, memberModel } from './member';

export interface StoreModel {
  member: MemberModel;
}

const store = createStore<StoreModel>({
  member: memberModel,
});

export const {
  useStoreActions,
  useStoreDispatch,
  useStoreState,
} = createTypedHooks<StoreModel>();

export default store;
