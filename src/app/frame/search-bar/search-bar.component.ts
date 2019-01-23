import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  isOpen: boolean;
  searchInputText: string
  constructor() { }

  ngOnInit() {}

  searchFn(e: KeyboardEvent){
   
    //if escape then clear textbox and close result
    if(e.key == "Escape" ){
      //optional: this is if you want to remove the value when the user press the escape key
      // this.searchInputText = ""

      //Set the result view to false as this will close the view
      this.isOpen = false;

      //terminate the function at this point to stop all other functions from starting 
      return;
    }

    //if user is typing and the result view is hidden then show it 
    //else if the user backspace all the char from the input then hide the result view
    if(!this.isOpen && this.searchInputText.length > 0){
      this.isOpen = true;
    }else if(this.isOpen && this.searchInputText.length == 0){
      this.isOpen = false
    }
  }

}
