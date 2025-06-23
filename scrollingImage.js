const container=document.getElementById('scroll conatiner');
let scrollAmount=0;
const speed=1;
function autoScroll()
{
    scrollAmount+=speed;
    if(scrollAmount>=container.scrollWidth-container.clientWidth)
    {
        scrollAmount=0;
    }
}