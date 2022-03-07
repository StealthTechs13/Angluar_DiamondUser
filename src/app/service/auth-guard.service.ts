﻿import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }
    public Path: string = "";
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (Cookie.check("ClubUsersCookies")) {
            this.Path = route.url[0].path;
            if (this.Path == 'sign-in') {
                this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}