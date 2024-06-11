const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById("input-file");
const imgView = document.querySelector(".img-view");


inputFile.addEventListener("change",()=>{
    const file = URL.createObjectURL(inputFile.files[0]);
    if (file) {
        imgView.style.backgroundImage = `url(${file})`
        return;
    }
    // 
    else{
        console.log('jj');
    }
})


dropArea.addEventListener("dragover",(e)=>{
   e.preventDefault();
 console.log('drag  over');
})

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault()
    inputFile.files = e.dataTransfer.files;
    const file = URL.createObjectURL(inputFile.files[0]);
    if (file) {
        imgView.style.backgroundImage = `url(${file})`
        return;
    }
    // 
    else{
        console.log('jj');
    }
})
    