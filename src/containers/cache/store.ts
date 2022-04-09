import { observable, action, makeAutoObservable } from 'mobx';
import { assign } from '../../utils/object.util';

export default class CacheStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable session: string | null = '';

  @observable local: string | null = '';

  @observable cookie: string | null = '';

  @observable indexed: string | null = '';

  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    assign(this, name, value);
  }

  @action saveCookie = () => {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*36000;
    now.setTime(expireTime);

    document.cookie = `unifacef=${this.cookie};expires=${now.toUTCString()}`;
  }

  @action saveLocalStorage = () => {
    localStorage.setItem('unifacef-local', this.local || '');
  }

  @action saveSessionStorage = () => {
    sessionStorage.setItem('unifacef-session', this.session || '');
  }

  @action loadForm = () => {
    this.cookie = this.getCookie('unifacef')
    this.session = sessionStorage.getItem('unifacef-session');
    this.local = localStorage.getItem('unifacef-local');
  }

  @action submit = () => {
    this.saveCookie();
    this.saveSessionStorage();
    this.saveLocalStorage();
  }

  getCookie(cname) {
    const name = `${cname}=`
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i];
      while (c.charAt(0) === ' ') {
        c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
const cache = new CacheStore();
export { cache };