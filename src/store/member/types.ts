import { Thunk, Action } from 'easy-peasy';

export interface Member {
  ID: string;
  accessToken: string;
  Email: string;
  AvatarHash: string,
  ProfileURL: string,
  Username: string,
}

export interface InitAuthorization {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface MemberModel {
  //State
  currentMember: Member | null;

  // Getters & Setters
  setCurrentMember: Action<MemberModel, Member>;
  logoutCurrentMember: Action<MemberModel, null>;

  // Thunks: Http calls
  getCurrentMember: Thunk<MemberModel, string>;
  verifyOauth: Thunk<MemberModel>;
}
