const notificationNumber= document.getElementById('notification');
const unreadSection=document.querySelectorAll('.unread');
const markedRead= document.querySelector('.marked-read');




unreadSection.forEach((message) => {
  message.addEventListener('click',() => {
    message.classList.remove('unread');
    const newCount=document.querySelectorAll('.unread')
    notificationNumber.innerHTML=newCount.length;  
  })
})


markedRead.addEventListener('click', () => {
  unreadSection.forEach((message) => {
    message.classList.remove('unread');
  })
  const newCount=document.querySelectorAll('.unread')
  notificationNumber.innerHTML=newCount.length; 
})






