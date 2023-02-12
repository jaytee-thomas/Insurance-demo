import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { Member } from '../../app/models/member';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  members: Member[];
  filteredMembers: Member[];

  constructor(private membersService: MembersService) {
    this.members = [];
    this.filteredMembers = [];
   }

  ngOnInit() {
    this.membersService.getMembers().subscribe(members => {
      this.members = members;
      this.filteredMembers = members;
    });
  }

  searchMembers(searchTerm: string) {
    this.filteredMembers = this.members.filter(member => {
      return member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
             member.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  filterMembers(event: KeyboardEvent) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filteredMembers = this.members.filter(member =>
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
}