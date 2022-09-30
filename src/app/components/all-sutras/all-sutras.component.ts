import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sutra } from 'src/app/models/sutra';
import { SutraService } from 'src/app/services/sutra.service';

@Component({
  selector: 'app-all-sutras',
  templateUrl: './all-sutras.component.html',
  styleUrls: ['./all-sutras.component.css']
})
export class AllSutrasComponent implements OnInit {

  sutras: Sutra[] = [];

  constructor(private sutraService: SutraService, private router: Router) { }

  ngOnInit(): void {

    this.sutraService.getSutras().subscribe({
      next: (response) => {
        console.log(response);
        this.sutras = response;
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {

      }
    });

  }

  viewSutra(id: number){
    this.router.navigateByUrl('/sutras/'+id);
  }
  
  addFile(){
    this.router.navigateByUrl('/upload');
  }

}
