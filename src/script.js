const reviewComment=document.getElementById("reviewComment");

reviewComment.addEventListener('click', function(){
    const paraId=document.getElementById("para");
    if(paraId.classList.contains('hidden')){
        const reviewDiv=document.querySelector('#reviewDiv');
        reviewDiv.classList.add('h-60');
        reviewDiv.classList.remove('h-20');
        


    paraId.classList.remove('hidden');
    paraId.classList.add('block')
    }
    else{
        reviewDiv.classList.add('h-20');
        reviewDiv.classList.remove('h-60');
        paraId.classList.remove('block');
        paraId.classList.add('hidden')
    }
})