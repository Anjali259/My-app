import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayname = true;
  public color = "5";
 public alphabets = [ "1", "2", "3", "4"];
  title = 'my-app';

public name = "Interaction of component learning";
public message = "";

}
