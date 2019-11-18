import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const ROLE_KEY = 'RoleName';
const USERNAME = 'UserName';
const SCHOOLNAME = "SchoolName";

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.removeItem(ROLE_KEY);
        window.sessionStorage.removeItem(USERNAME);

        window.sessionStorage.clear();
    }

    public saveToken( token:any) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);

    }

    public saveSessionDetails( roleName: any, username: string) {
   
        window.sessionStorage.removeItem(ROLE_KEY);
        window.sessionStorage.removeItem(USERNAME);

        window.sessionStorage.setItem(ROLE_KEY, roleName);
        window.sessionStorage.setItem(USERNAME, username);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public getRole(): string {
        return sessionStorage.getItem(ROLE_KEY);
    }

    public getUsername(): string {
        return sessionStorage.getItem(USERNAME);
    }
}