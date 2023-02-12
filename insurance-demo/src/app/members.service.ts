import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private membersUrl = 'api/members';

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.membersUrl);
  }
}
