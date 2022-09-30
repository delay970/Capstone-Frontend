import { Component, OnInit } from '@angular/core';
import { NGram } from 'src/app/models/ngram';
import { Sutra } from 'src/app/models/sutra';
import { FormulasService} from 'src/app/services/formulas.service';
import { SutraService } from 'src/app/services/sutra.service';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {

  formulas: NGram[] = [];
  sutras: Sutra[] = [];
  sutra1: number = 0;
  sutra2: number = 0;
  waiting: boolean = false;

  constructor( private formulasService: FormulasService, private sutraService: SutraService) { }

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

  getFormulas(){
    if(!this.sutra1 || !this.sutra2){
      return;
    }

    this.waiting = true;
    this.formulasService.getFormulas(this.sutra1, this.sutra2).subscribe({
      next: (response) => {
        console.log(response);
        this.formulas = response;
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.waiting = false;
      }
    });
  }

}
