import { Component } from '@angular/core';
import { NotesService } from './notes.service'
import { Note } from './note'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  errMessage: string;
  notes: Array<Note>;
  note: Note = new Note("", "");

  constructor(private notesService: NotesService) {
    this.notesService.getNotes().subscribe(data => {
      this.notes = data;
    }, err => {
      this.errMessage = err.message;
    })
  }

  addNote(note: Note): void {
    if (this.note.title == "" || this.note.text == "") {
      this.errMessage = "Title and Text both are required fields";
    } else {
      this.notesService.addNote(this.note).subscribe(data => { }, error => {
        this.errMessage = "Could not add note";
      });
      this.errMessage = "";
      this.notes.push(this.note);
      this.note = new Note("", "");
    }
  }
}