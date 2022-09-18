
let addnote=document.getElementById('btnid');

function shownotes(){
 let notes=localStorage.getItem('notes');
 if(notes==null)
 notesobj=[];
 else
 notesobj=JSON.parse(notes);
 let html="";
 notesobj.forEach(function(element,index) {
    html+=`<div class="card" style="width: 33rem;" >
            
    <div class="card-body  " >
      <h5 class="card-title"> Note ${index+1}</h5>
      <p class="notes"> ${element}</p>
      
      <button id="${index} " onclick="deleteNote(this.id)" class="btn btn-primary">
          Delete Note
      </button>
    </div>
  </div>` ;
 });
 let notesElm=document.getElementById('notes');
 if(notes.length!=0)
 notesElm.innerHTML=html;
else{
    notesElm.innerHTML=`please add nodes`;
}

}
addnote.addEventListener('click',function(e){
 let addtxt=document.getElementById('addtxt');
 let notes=localStorage.getItem('notes');

 if(notes==null)
 notesobj=[];
 else
 notesobj=JSON.parse(notes);
 notesobj.push(addtxt.value);
 localStorage.setItem('notes',JSON.stringify(notesobj));
 addtxt.value="";
 console.log(notesobj);
 shownotes();

})

//function to delete note
function deleteNote(index) {
    let notes=localStorage.getItem('notes');
    console.log(notes);
 if(notes==null)
 notesobj=[];
 else
 notesobj=JSON.parse(notes);
 notesobj.splice(index,1);
 localStorage.setItem('notes',JSON.stringify(notesobj));
 shownotes();
}

// for searching 
let search=document.getElementById('search');
search.addEventListener('input',function(){
  let notecard=document.getElementsByClassName('card-body');
  Array.from(notecard).forEach(function(element){
    let cardtxt=element.getElementsByTagName('p')[0];
    console.log(cardtxt);
    // if(cardtxt.include(search.value)){
    //   element.style.display='block';
    // }
    // else{
    //   element.style.display='none';
    // }
  })
})