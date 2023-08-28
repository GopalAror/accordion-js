let accordianitem = document.querySelectorAll(".accordian-item");

accordianitem.forEach(function(item){
    item.addEventListener("click",function(){
        const isitactive = item.classList.contains("active");
        accordianitem.forEach(function(item){
            item.classList.remove("active");
        })
        if(!isitactive){
            item.classList.toggle("active");
        }
    })
    });

// accordianitem.addEventListener("click", function () {
//     content.classList.toggle("active");
// })
// let accordianitem1=document.querySelector(".accordian-item1")
// let content1=document.querySelector(".accordian-content1")
// accordianitem1.addEventListener("click", function () {
//     content1.classList.toggle("active");
// })
// let accordianitem2=document.querySelector(".accordian-item2")
// let content2=document.querySelector(".accordian-content2")
// accordianitem2.addEventListener("click", function () {
//     content2.classList.toggle("active");
// })
// let accordianitem3=document.querySelector(".accordian-item3")
// let content3=document.querySelector(".accordian-content3")
// accordianitem3.addEventListener("click", function () {
//     content3.classList.toggle("active");
// })
// let accordianitem4=document.querySelector(".accordian-item4")
// let content4=document.querySelector(".accordian-content4")
// accordianitem4.addEventListener("click", function () {
//     content4.classList.toggle("active");
// })

