export class UserReturn {
    constructor (public kind: string, public users?: UserEntity[]){

    }
}

export interface UserEntity  {
    localId: String;
    email: String;
    passwordHash: String;
    emailVerified: boolean;
    passwordUpdatedAt: number;
    providerUserInfo?: (ProviderUserInfoEntity)[] | null;
    validSince: String;
    lastLoginAt: String;
    createdAt: String;
    lastRefreshAt: String;
}

export interface ProviderUserInfoEntity {
    providerId: String;
    federatedId: String;
    email: String;
    rawId: String;
}