const notificationNumber= document.getElementById('notification');
const unreadSection=document.querySelectorAll('.unread');
const markedRead= document.querySelector('.marked-read');






markedRead.addEventListener('click', () => {
  unreadSection.forEach((message) => {
    message.classList.remove('unread');
     const newCount=document.querySelectorAll('.unread')
  notificationNumber.innerHTML=newCount.length; 
  })
})






