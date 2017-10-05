import { Component } from '@angular/core'
export class LocalStorage {
    SetItem(key: string, value: any): boolean {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    GetItem(key: string): any {
        return localStorage.getItem(key);
    }
}