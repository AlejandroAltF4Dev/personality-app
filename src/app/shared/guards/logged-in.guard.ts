import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { StoreQuery } from '../../state/store.query';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanLoad {
  constructor(private storeQuery: StoreQuery, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.storeQuery.isLoggedIn$.pipe(
      map((isLoggedIn) => isLoggedIn || this.router.parseUrl('/home'))
    );
  }
}
