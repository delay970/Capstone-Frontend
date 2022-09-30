import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sutra } from 'src/app/models/sutra';
import { SutraService } from 'src/app/services/sutra.service';

@Component({
  selector: 'app-sutra',
  templateUrl: './sutra.component.html',
  styleUrls: ['./sutra.component.css']
})
export class SutraComponent implements OnInit {

  sutra : Sutra = new Sutra(0, '', '');
  cleanedSutra : Sutra = new Sutra(0, '', '');

  constructor(private sutraService: SutraService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let id = paramMap.get('sutra');
      
      this.sutraService.getOneSutra(id!).subscribe({
        next: (response) => {
          this.sutra = response;
        },
        error: (err) => {
          console.log(err)
          this.router.navigateByUrl('/sutras');
        },
        complete: () => {
  
        }
      });
    });

    
  }

}
