function getInfo() {
    let inputValue = document.getElementById('stopId').value;
     let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`

     fetch(url)
     .then((info)=>info.json())
     .then((data)=>{
         document.getElementById('stopName').textContent=data.name;
document.getElementById('buses').innerHTML = '';
         let buses = Object.entries(data.buses);
         for(let [name,time] of buses){
             let li = document.createElement('li');
             li.textContent = `Bus ${name} arrives in ${time} minutes`;
             document.getElementById('buses').appendChild(li);

         }
         
     })
     .catch(error =>{
         document.getElementById('stopName').textContent = 'Error!'
     })
     document.getElementById('stopId').value = '';
    }