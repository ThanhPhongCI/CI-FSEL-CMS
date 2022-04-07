import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: any) {
    return localStorage.getItem(key);

  }

  set(key: any, val: any) {
    return localStorage.setItem(key, JSON.stringify(val));
  }

  clear() {
    return localStorage.clear();
  }
}
