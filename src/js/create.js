import FroalaEditor from 'froala-editor'
import 'froala-editor/js/plugins/image.min'
const editor = new FroalaEditor('#froala-editor',{
    
    toolbarButtons: {
        'moreText': {
          'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
        }
        ,  
        'moreRich': {
            'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
          },
          'moreMisc': {
            'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
          }
    }
   

})
const createButton = document.querySelector('.create-post-btn')

createButton.addEventListener('click',()=>{
console.log(editor.html.get());
})

