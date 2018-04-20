import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {RedditService} from '../services/reddit.service';

@Component({
  selector: 'app-popup-sports',
  templateUrl: './popup-sports.component.html',
  styleUrls: ['./popup-sports.component.scss'],
  providers: [RedditService]
})
export class PopupSportsComponent {
  items: any;
  isLoading: any;
  screenHeight: any;
  screenWidth: any;
  actualHeight: any;
  actualWidth: any;

  constructor(
    public dialogRef: MatDialogRef<PopupSportsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private redditService:RedditService) {
      this.screenHeight = window.screen.height;
      this.screenWidth = window.screen.width;
    
      // Actual space available in navigator
      this.actualHeight = window.innerHeight;
      this.actualWidth = window.innerWidth; 
    }

  ngOnInit() {
    console.log('onInit ran...');
    this.getPosts('sports', 20);
  }

  getPosts(category, limit) {
    this.isLoading = true;
    this.redditService.getPosts(category, limit).subscribe(response => {
      console.log('Getting sports news... 003');
      console.log(response);
      this.items = response.data.children;
      /**
       * 

      this.items.forEach(element => {
        if (this.actualWidth <= 400 ) {
          var str = element.data.title;
          str = str.substring(1, 100); 
          element.data.title = str;
        }
        console.log(element.data.title);
      });
       */
      this.isLoading = false;
    });
  }

  onRowClicked(item) {
    //alert("You select symbol: " + item.symbol);
    this.dialogRef.close(item);
  }
}
