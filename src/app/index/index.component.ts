import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})

export class IndexComponent {
  titleValue: string = '';
  descriptionValue: string = '';
  dateValue: string = '';
  descValue: string = '';
  desc2Value: string = '';
  descriptions: string[] = []; 

  handleButtonClick() {
    
    const combinedDesc = `${this.titleValue} \n ${this.descriptionValue}`;
    // if(this.descriptions[0] == null) {
    //   alert("Description or title wont be empty");
      
    // }
    if (this.descriptions.length < 2) {
      this.descriptions.push(combinedDesc);
    } else {
      
      this.descriptions.push(`New Description - ${this.descriptions.length + 1}`);
    }

   
   
    this.titleValue = '';
    this.descriptionValue = '';
    this.dateValue = '';
   
    
    
  }
  

  del(index: number) {
    this.descriptions.splice(index, 1);
  }
}
