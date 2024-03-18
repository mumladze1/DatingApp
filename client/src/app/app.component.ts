import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';

@Component({




  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BrowserModule      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private http:HttpClient ) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
       
      complete: () => console.log(' Request Has comlated')
    })
    
    
    
  }

  title = 'client';
  users: any
}
