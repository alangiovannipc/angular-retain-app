import  { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styles: [`
    `],
    template: `
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px;
        }
    `
})
export class NotesContainer {
    note = { title: '', value: ''};
}
