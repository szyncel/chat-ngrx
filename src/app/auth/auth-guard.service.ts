import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, getLoggedIn } from '../store/reducers/auth.reducers';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  canActivate():Observable<boolean> {
    return this.store.pipe(
      select(getLoggedIn),
      map(authed => {
        if (!authed) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
