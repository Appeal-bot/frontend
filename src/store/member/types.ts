import { Thunk, Action } from 'easy-peasy';

export interface Member {
  ID: string;
  accessToken: string;
  Email: string;
  AvatarHash: string;
  ProfileURL: string;
  Username: string;
}

export interface InitAuthorization {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface guildBan {
  user_id: string;
  reason: null | string;
  guild: {
    id: string;
    name: string;
    icon_url: null | string;
    banner_url: null | string;
  };
}

export interface MemberModel {
  //State
  currentMember: Member | null;
  bannedGuilds: guildBan[] | null;

  // Getters & Setters
  setBannedGuilds: Action<MemberModel, Member>;
  setCurrentMember: Action<MemberModel, Member>;
  logoutCurrentMember: Action<MemberModel, null>;

  // Thunks: Http calls
  getCurrentMember: Thunk<MemberModel, string>;
  verifyOauth: Thunk<MemberModel>;
  getBannedGuilds: Thunk<MemberModel>;
}
