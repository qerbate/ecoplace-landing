import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 


  displayedColumns: string[] = [];
  data: Contact[] = [];
  
  

  isLoadingResults = false;


  constructor(private api: ApiService) {

   }
  
  ngOnInit(): void {
    
  }
}
