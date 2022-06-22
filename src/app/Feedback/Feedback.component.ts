import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
    selector: 'Feedback',
    templateUrl: './Feedback.component.html',
    styleUrls: ['./Feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
    ratting = new FormControl('', Validators.required);
    textArea = new FormControl();
    smilesRating: any[] = []
    unActiveSmilesRating: any[];
    feedback: any = {};
    private _unsubscribeAll: Subject<any>;
    constructor(public dialogRef: MatDialogRef<FeedbackComponent>
    ) {
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        document.querySelectorAll('.feedback mat-button-toggle li').forEach(entry => {
            this.smilesRating.push(entry)
            entry.addEventListener('click', () => {
                if (!entry.classList.contains('active')) {
                    entry.classList.add('active');
                    this.unActiveSmilesRating = this.smilesRating.filter(v => v.className != entry.className)
                    this.unActiveFunction(this.unActiveSmilesRating)
                }
            })
        });


    }
    /**
     * active function
     * @param arr
     */
    unActiveFunction(arr: any[]) {
        arr.forEach(entry => {
            if (entry.classList.contains('active')) {
                entry.classList.remove('active')
            }
        })
    }
    /**
    * close the Dialog
    */
    onNoClick(): void {
        this.dialogRef.close();
    }
    /**
     * Determines whether send click on
     */
    onSendClick() {
        console.log(this.ratting.value)
        console.log(this.textArea.value)
        if (this.ratting.valid) {
            this.feedback.rating = this.ratting.value
            this.feedback.comment = this.textArea.value
            this.dialogRef.close();
        }

    }
    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}

