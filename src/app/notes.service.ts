import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Note } from './note';

@Injectable()
export class NotesService {

  constructor(private Http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.Http.get<Array<Note>>('http://localhost:3000/notes');
  }

  addNote(note: Note): Observable<Note> {
    return this.Http.post<Note>('http://localhost:3000/notes', note);
  }

}
