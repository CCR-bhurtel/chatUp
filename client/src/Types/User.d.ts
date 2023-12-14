export interface IUser {
    name: string;
    location: string;
    registerType: 'emailPassword' | 'google' | 'facebook';
    email?: string;
    password?: string;
    googleId?: string;
    facebookId?: string;
    profilePic?: string;
    resetToken?: string;
    resetTokenExpires?: Date;
    blockedUsers: string[];
    settingId?: string;
    passwordChangedAt: Date;
    contactNumber: string;
    preferences: {
        email: boolean;
        message: boolean;
        notification: boolean;
    };
}

export interface IUserType extends IUser {
    blockedUsers: IUser[];
}

export type ISimpleUser = Pick<IUser, 'name' | 'email' | 'location' | 'profilePic'> & {
    _id: string;
};
