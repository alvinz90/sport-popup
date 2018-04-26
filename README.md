# SportPopup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

The Sport Popup Demo is a mini app (Angular 5 / Material) within a popup (Dialog) implementing the service - consumer data flow; it would call the Reddit service, retrieve sports news data, and render it as a item list for selecting; after the user selecting the sport news item, the page focus would come back to the home page with the selected sport news data, and render the page with the data details. 

## Reference links

* [Angular](https://angular.io/) - Angular Official site

* [Angular Material](https://material.angular.io/) - Angular Material Official site

* [Firebase Console](https://console.firebase.google.com/) - Google Firebase Console

* [Live Demo](https://sport-popup.firebaseapp.com/) - It's been deploy to Google Firebase website: https://sport-popup.firebaseapp.com/

### Desktop screenshots
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-desktop001.png' width='30%'></img> 
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-desktop002.png' width='30%'></img> 
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-desktop003.png' width='30%'></img> 

### iPhone screenshots
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-iphone001.PNG' width='30%'></img> 
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-iphone002.PNG' width='30%'></img> 
<img src='https://raw.githubusercontent.com/alvinz90/sport-popup/master/screen_shots/sport-popup-screenshot-iphone003.PNG' width='30%'></img> 

## Development server

Assuming the node.js (nodejs.org)is installed.

Get the source code of this project by `Clone or download`.

Open the Node.js command window, run `npm i` get all the needed packages into the 'node_modules' folder.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps of creating an Angular / Material project like this

### 1) Create an Angular project

Open the Node.js command window, and these commands:

```
ng new sport-popup --style=scss
cd sport-popup
ng serve
```

So this would create the project and launch it on `http://localhost:4200/`. 

* **Note** - To make it working for IE 11 browser, you need to un-comment the lines in `src/polyfills.ts`, un-comment the section of lines below this line:

```
IE9, IE10 and IE11 requires all of the following polyfills.
```

### 2) Installed the Angular / Material packages

Run these commands:

```
npm install @angular/material @angular/cdk --save
npm install @angular/animations --save
```
### 3) Import / Material packages

Update `app.module.ts` to import the Material packages:

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {        
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule, 
  MatGridListModule, 
  MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
```

And for the `@NgModule`:

```
@NgModule({
  ...
  imports: [
    ...,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    MatListModule
  ],
  ...
})
```
### 3) Customise theme

Add theme into `styles.scss`:
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

Create a new file `themes.scss` (within the same directory of `styles.scss`), and update the `/.angular-cli.json` file:

```
      "styles": [
        "styles.scss",
        "theme.scss"     // Add this
      ],
```

Look into the `themes.scss` file to get more info about setup the customised themes.

### 4) Creating new components
Run `ng generate component component-name` to generate a new component; for example:

```
ng g component home
ng g component popup-sports
```
### 5) Creating service

Please take a look into this file `src/app/services/reddit.service.ts`.

### 6) Popup / Dialog implementation

Basically the app flow is the home page would launch the popup by a click event, when the popup shows it would trigger a service call to get data from reddit.service.

Please look into `home.component.ts` (Home page) and `popup-sports.component.ts` (Popup / Dialog) for the details of the implementation.

### 7) Popup / Dialog databinding

After getting the dataset of sport news, it would bind the array of sport items into the `mat-list-item`:

```
<mat-list-item *ngFor="let item of items" (click)="onRowClicked(item)">
```

And the onRowClicked event will pass back the selected item back to the home page:

```
  onRowClicked(item) {
    this.dialogRef.close(item);
  }
```

### 8) Multiple themes on Home page

There are 2 themes applied on Home page `home.component.html`, the default theme (which is also a customised theme defined within `themes.scss` see above 3) step ), and another theme `alternative2` has been used by using <div> tags enclosed the certain page region:

```
<div class="alternative2">
...
...
...

</div>
```

### 9) Responsive design exercises

* 9.1) Most of the page elements are using the percentage measurement, so it would fit most sizes of browser windows on different devices;

* 9.2) Popup window size would be handled to fit different browser containers by the checking the actual width:

```
this.actualWidth = window.innerWidth; 
```

So the reponsive design logic simply put is that if it's iphone the popup width should be bigger, but if it's ipad, or desktop full window then the popup width should be smaller:

```
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
```

### 10) Other notes

Sometimes it might be troublesome to render a video url in the web page, the approach I found is that by putting the video url in the iframe tag with a function:

```
        <iframe [src]='photoURL()' width="80%" class="video-center"  frameborder="0"
          webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe> 
```

And this function `photoURL` would format the video url so it could successfully get the stream feed back correctly:

```
  constructor(
    public dialog: MatDialog, 
    private sanitizer: DomSanitizer)
.
.
.

  photoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video_url);
  }
  
```

## Firebase deployment

There'are a lot of samples / tutorials out there (including its official site: ) 
* [Firebase](https://firebase.google.com/)

This reference link below is very helpful:

* [Firebase Deployment tutorial] (https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase) follow the steps to make one of your own great website;-).

Basic steps:

* 1) Create a project @ https://console.firebase.google.com/ for example in this case: sport-popup-coreui
* 2) Install the Firebase Tools (only need to install it once for your machine)
```
npm install -g firebase-tools
```
* 3) Login to Firebase
```
firebase login
```
* 4) link our local Angular app to our Firebase app
```
cd sport-popup
firebase init
```
Make these selections following the prompts:
```
4.1)Select 'Hosting'
4.2)Select the firebase project just created above
4.3)input 'dist' as your public directory (this is the Angular build directory)
4.4)set it as Single page app
```
* 5) build the Angular app
```
ng build --prod
```

* 6) Deploy to Firebase
```
firebase deploy
```
* 7) Done & enjoy:

https://sport-popup.firebaseapp.com/


