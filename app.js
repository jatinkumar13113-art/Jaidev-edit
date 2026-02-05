function openSidebar(){
  document.querySelector('.sidebar').style.left='0';
  document.getElementById('overlay').style.display='block';
}
function closeSidebar(){
  document.querySelector('.sidebar').style.left='-260px';
  document.getElementById('overlay').style.display='none';
}
