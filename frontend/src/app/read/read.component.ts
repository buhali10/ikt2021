import { Component, OnInit } from '@angular/core';
import {BackendService, Post} from "../backend.service";
import { DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  allPosts: Post[];
  constructor(
    private bs: BackendService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.bs.readAll()
      .then(res => {
        console.log(res);
        return res
      })
      .then(
        arr => {
          this.allPosts = arr;
          arr.forEach(el => console.log(el))
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  imageSrc(base64code: string): SafeResourceUrl{
    const src = 'data:image/png;base64,' + base64code;
    return this.sanitizer.bypassSecurityTrustResourceUrl(src)
  }

}
