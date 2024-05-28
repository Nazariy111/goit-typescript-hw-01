export enum UserRole {
    editor = 'editor',
    guest = 'guest',
    admin = 'admin',
}

type UserRoleDescription = Record<UserRole, string>; 

const RoleDescription: UserRoleDescription = {
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
    [UserRole.admin]: 'Admin User',
};