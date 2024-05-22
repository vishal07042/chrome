const opt = document.getElementById('selectQuestion');
const id = document.getElementById('username');
const options = document.createElement('option');
const form = document.getElementById('form');
for(let i=1;i<=10;i++){
    const options = document.createElement('option');
    options.value = i;
    options.text = i;
    opt.appendChild(options);
}






form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('form submitted');
    console.log(opt.value);
    console.log(id.value);
  let  startingValueadd = opt.value;
  let username = id.value;
  chrome.runtime.sendMessage({startingValueadd: startingValueadd, username: username},function(){
    console.log('message sent');
    //window.close();
  });
})







