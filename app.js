const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');
const collections = document.getElementById('collections');

// array map

const array = [{
  name:'jugurta',
  age:27
},
{ 
  name:'yuva',
  age:29,
},
{
  name:'ali',
  age:32
}
]


btnOne.addEventListener('click', function(){
  const input = document.getElementById('input');
  addName();
})

function addName(){
  if(input.value === '' || input.value != '1'){
    alert('No name added or wrong name');
    location.reload(); 
  }
  else{
    // create li  
  const li = document.createElement('li');
  // li className 
  li.className = 'item';
  //li style
  li.style.color = 'black';
  li.style.fontSize = '32px';
  li.style.listStyle = 'none';
  // li textContent
  li.textContent = array[1].age;
  //append to ul
  collections.appendChild(li);

  
  input.value= '';
  }
}
  

  //btnTwo
  btnTwo.addEventListener('click', function(){
    const input = document.getElementById('input');
    addNameTwo();
  })
  
  function addNameTwo(){
      if(input.value === '' || input.value != '2'){
        alert('add task');
        location.reload();
      }
      else{
          // create li  
        const li = document.createElement('li');
        // li className 
        li.className = 'item';
        //li style
        li.style.color = 'black';
        li.style.fontSize = '32px';
        li.style.listStyle = 'none';
        // li textContent
        li.textContent = array[1].age;
        //append to ul
        collections.appendChild(li);
      
        
        input.value= '';
      }
    }



    // btnThree
      //btnTwo
  btnThree.addEventListener('click', function(){
    const input = document.getElementById('input');
    addNameThree();
  })
  
  function addNameThree(){
    if(input.value === '' || input.value != '3'){
      alert('add task');
      location.reload();
    }
    else{
      // create li  
      const li = document.createElement('li');
      // li className 
      li.className = 'item';
      //li style
      li.style.color = 'black';
      li.style.fontSize = '32px';
      li.style.listStyle = 'none';
      // li textContent
      li.textContent = array[2].age;
      //append to ul
      collections.appendChild(li);
    
      
      input.value= '';
    }
  }