// query-param-changed.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QueryParamChangedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Check if the query parameters have changed
    const currentFolderId = route.queryParams['folderId'];
    const previousRoute = this.router.routerState.snapshot.root.firstChild;

    if (previousRoute) {
      const previousFolderId = previousRoute.queryParams['folderId'];

      if (currentFolderId !== previousFolderId) {
        return true; // Activate the component
      }
    }

    return false; // Reuse the component
  }
}
