import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFileService } from 'src/app/services/add-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  groupName: string = '';
  files : File[] = [];
  fileName: string[] = [];
  count: number = 0;
  numUploads: number[] = [];


    constructor(private http: HttpClient, private route:ActivatedRoute, private addFileService: AddFileService, private router: Router) {}

  ngOnInit(): void {
    this.groupName = this.route.snapshot.paramMap.get('group_name')!;
    console.log(this.groupName);
  }

  onFileSelected(event: any, i: number ) {
    const file:File = event.target.files[0];
    this.files[i] = file;
    this.fileName[i] = file.name; 
    this.count++;
  }

  removeFile(i: number){
    this.fileName.splice(i, 1);
    this.files.splice(i, 1);
    this.count--;
    this.numUploads.pop();
  }

  addFile(){
    this.numUploads.push(this.numUploads.length);
  }


    submit(){
      for(let file of this.files){
        this.addFileService.postFile(file).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err)
          },
          complete: () => {
            
          }
        });
      }
      this.router.navigateByUrl('/sutras');
    }

  clearFiles(){
    this.addFileService.clearFiles().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {

      }
    });
  }
}
