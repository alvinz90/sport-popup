import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupSportsComponent } from '../popup-sports/popup-sports.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sport: any;
  sport_data: any;
  video_url: any;
  screenHeight: any;
  screenWidth: any;
  actualHeight: any;
  actualWidth: any;

  constructor(
    public dialog: MatDialog, 
    private sanitizer: DomSanitizer) {
      this.screenHeight = window.screen.height;
      this.screenWidth = window.screen.width;
    
      // Actual space available in navigator
      this.actualHeight = window.innerHeight;
      this.actualWidth = window.innerWidth;
    }

  photoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video_url);
  }

  ngOnInit() {
    console.log('This is home init...');
    console.log(this.screenWidth);
    console.log(this.actualWidth);
  }

  openPopupSports(): void {
    //this.dialog.closeAll();

    /**
     * 

    let dialogRef = this.dialog.open(PopupQuotesComponent, {
      width: '300px',
      height: '500px', position: { left: '40%'},
      data: { symbol: this.symbol }, autoFocus: true
    });
     */
    var window_width = '75%';
    if (this.actualWidth <= 500 ) {
      window_width = '98%';
    }

    let dialogRef = this.dialog.open(PopupSportsComponent, {
      width: window_width,
      height: '80%', 
      autoFocus: true,
      panelClass: 'myDialogPanelClass'
    });

//this.dialog.open(MyDialogComponent, {panelClass: 'custom-dialog'})

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sport = result;
      console.log('sport is');
      console.log(this.sport);
      if (null != this.sport && 
        null != this.sport.data &&
        null != this.sport.data.preview &&
        null != this.sport.data.preview.reddit_video_preview &&
        null != this.sport.data.preview.reddit_video_preview.fallback_url 
      ) {
        this.video_url = this.sport.data.preview.reddit_video_preview.fallback_url;
      } else {
        this.video_url = null;
      }
      
      console.log(this.video_url);

      this.sport_data = [
        {text: result.regularMarketOpen, cols: 1, rows: 1, color: '#cc9966'},
        {text: result.bid, cols: 1, rows: 1, color: '#cc9966'},
        {text: result.ask, cols: 1, rows: 1, color: '#cc9966'},
        {text: result.regularMarketDayRange, cols: 1, rows: 1, color: '#cc9966'},
        {text: result.regularMarketVolume, cols: 1, rows: 1, color: '#cc9966'},
      ];

    });
  }

}
