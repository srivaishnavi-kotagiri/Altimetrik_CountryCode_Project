import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountryInfo';
  profileForm = new FormGroup(
    {
      
      CountryCode: new FormControl('', [Validators.required]),
      

    })
}
