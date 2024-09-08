import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NotesService } from '../../core/services/notes/notes.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INote } from '../../core/interfaces/inote';
import { SidebarModule } from 'primeng/sidebar';
import { LoginService } from '../../core/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notehome',
  standalone: true,
  imports: [DialogModule,SidebarModule, ButtonModule,ReactiveFormsModule],
  templateUrl: './notehome.component.html',
  styleUrl: './notehome.component.scss'
})
export class NotehomeComponent implements OnInit {
  sidebarVisible: boolean = false;
  _NotesService=inject(NotesService)
  _LoginService=inject(LoginService)
  _ToastrService=inject(ToastrService)
  _FormBuilder=inject(FormBuilder)
  _NoteData:INote[]=[]
  _NoteData2:INote={}as INote
  isSubmit:boolean=false
  NoteId!:string|null
  visible: boolean = false;
  showDialog() {
    
      this.visible = true;
  }
  visibleUp: boolean = false;

  showDialogUp(id:string|null,note:any) {
    this.NoteId=id
    this.Addnote2.patchValue(note)
    console.log(this.NoteId)
      this.visibleUp = true;
  }
  Addnote:FormGroup=this._FormBuilder.group({
    title:[null,[Validators.required]],
    content:[null,[Validators.required]]
  })
  Addnote2:FormGroup=this._FormBuilder.group({
    title:[null,[Validators.required]],
    content:[null,[Validators.required]]
  })
  ngOnInit(): void {
    this.getUserNotes();
  }
 getUserNotes(){
    this._NotesService.GetNotes().subscribe({
      next:(res)=>{
        this._NoteData=res.notes.reverse()
      }
    })
  }
  

  AddNewNotes(){
  this.isSubmit=true
    this._NotesService.AddNote(this.Addnote.value).subscribe({
      next:(res)=>{
        this.getUserNotes()
        this._ToastrService.success("note added")
  this.isSubmit=false

      }
    })
  }


  UpdateNotess(id:string|null){
    this.isSubmit=true
    this._NotesService.UpdateNotes(id,this.Addnote2.value).subscribe({
      next:(res)=>{
        this.getUserNotes()
        this._ToastrService.success("note updated")
        this.isSubmit=false
      }
    })
  }
  DeletetheNotes(id:string|null){
    this._NotesService.DeleteNotes(id).subscribe({
      next:(res)=>{
        this.getUserNotes()
        this._ToastrService.warning("note Deleted")


      }
    })
  }
  logut(){
    this._LoginService.logout()
  }
}
