let save=document.getElementById('btn');
let value2,value3,value4,value5,value6,value7,value8,value9;
let records={};
let count=0;
let form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

save.addEventListener("click",function(){
       value2=document.getElementById('fname').value;
       value3=document.getElementById('lname').value;
       value4=document.getElementById('dob').value;
       value5=document.querySelector('input[name="gender"]:checked').value;
       value6=document.getElementById('email').value;
       value7=document.getElementById('password').value;
       value8=document.getElementById('address').value;
       value9=document.getElementById('language').value;
       value10=document.getElementById('mobile').value;
       
       records={
       fname:value2,
       lname:value3,
       dob:value4,
       gender:value5,
       email:value6,
       password:value7,
       number:value10,
       address:value8,
       language:value9,
       };

       let webtask = localStorage.getItem("localtask");
            if(webtask == null){
                taskobj = [];
            }else {
                taskobj = JSON.parse(webtask);
            }
            taskobj.push(records);
            localStorage.setItem("localtask",JSON.stringify(taskobj));
            alert('Your information saved successfully');
           
    })
    let show=document.getElementById('btn2');
    let New , html;
    show.addEventListener('click',function (){

        let retrived=JSON.parse(localStorage.getItem('localtask'));
       // console.log(retrived[1].lname);
       // retrived.forEach(function(New,index){
        let display=document.getElementsByClassName('show');
        let table=`<tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Date-of-birth</th>
                      <th>Email</th>
                      <th>passowd</th>
                      <th>Number</th>
                      <th>Address</th>
                      <th>language</th>
                      </tr>`;
        display[0].innerHTML= table;
         for(let i = 0;i<retrived.length;i++){
           console.log(retrived[i]);
           table+=`<tr>
            <td>${retrived[i]['fname']}  ${retrived[i]['lname']}</td>
            <td>${retrived[i]['gender']}</td>
            <td>${retrived[i]['email']}</td>
            <td>${retrived[i]['email']}</td>
            <td>${retrived[i]['password']}</td>
            <td>${retrived[i]['number']}</td>
            <td>${retrived[i]['address']}</td>
            <td>${retrived[i]['language']}</td>
            </tr>`;/*`Firstname : ${New.fname} <br>
         Lastname : ${New.lname} <br> Gender : ${New.gender}<br>Email:${New.email}<br>
         Password:${New.password}<br> mobile-number:${New.number}$Address:${New.address}<br> Language:${New.language}`;*/
         display[0].innerHTML=table;
        }

        
    })
   
    
    
    //firstname validation..
    function check1(txt){
        let fname=document.getElementById('fname').value;
        if(fname==""||fname.length<3){
           document.getElementById('message').innerHTML="*please enter valid name";
          // save.disabled=true;
          // save.style.backgroundColor='#165612';
        }else {
            document.getElementById('message').innerHTML="";
           // save.disabled=false;
           // save.style.backgroundColor='#0d9a1b';
            count++;
        }
    }
     //lastname validation..
     function check2(txt){
      
        let lname=document.getElementById('lname').value;
        if(lname==''||lname.length<3){
           document.getElementById('message').innerHTML="*please enter valid name";
          // save.disabled=true;
          //save.style.backgroundColor='#165612';
        }else {
            document.getElementById('message').innerHTML="";
           // save.disabled=false;
            //save.style.backgroundColor='#0d9a1b';
            count++;
        }
    } //Date of birth validation..
    function check3(txt){
       let text=document.getElementById('dob').value;
       if(text==''){
          document.getElementById('message').innerHTML="*please enter your dob";
         // save.disabled=true;
          //save.style.backgroundColor='#165612';
       }else { 
           document.getElementById('message').innerHTML="";
          // save.disabled=false;
          // save.style.backgroundColor='#0d9a1b';
           count++;
       }
   }
     //Email validation..
     function check4(txt){
        let text=document.getElementById('email').value;
        if(text==''){
           document.getElementById('message').innerHTML="*please enter your email";
           //save.disabled=true;
          // save.style.backgroundColor='#165612';
        }else { 
            document.getElementById('message').innerHTML="";
           // save.disabled=false;
            //save.style.backgroundColor='#0d9a1b';
            count++;
        }
    }
    
    //password validation..
    function check5(txt){
        let text=document.getElementById('password').value;
        if(text==''||text.length<5){
           document.getElementById('message').innerHTML="*please give a strong password";
           //save.disabled=true;
          // save.style.backgroundColor='#165612';
        }else { 
            document.getElementById('message').innerHTML="";
            save.disabled=false;
            save.style.backgroundColor='#0d9a1b';
            count++;
        }
    }
    
     //mobile number  validation..
     function check6(txt){
        let number=document.getElementById('mobile').value;
        if(number==''||number.length<10 || number.length>10){
           document.getElementById('message').innerHTML="*please enter a valid number";
          // save.disabled=true;
          // save.style.backgroundColor='#165612';
        }else {
            document.getElementById('message').innerHTML="";
           // save.disabled=false;
            //save.style.backgroundColor='#0d9a1b';
            count++;
        }
    }
     // address validation..
     function check7(txt){
        let address=document.getElementById('address').value;
        if( address ==''|| address.length<15){
           document.getElementById('message').innerHTML="*please enter your full address";
          // save.disabled=true;
          // save.style.backgroundColor='#165612';
        }else {
            document.getElementById('message').innerHTML="";
           // save.disabled=false;
           // save.style.backgroundColor='#0d9a1b';
            count++;
        }
    }

//reset button..
    let reset=document.getElementById('reset');
    reset.addEventListener('onclick',(e)=>{
        value2.value="";
        value3.value="";
        value4.value="";
        value5.value="";
        value6.value="";
        value7.value="";
        value8.value="";
        value9.value="";
        value10.value="";
        count=0;
        
    })
    //empty fields validation...
    function checkgloble(){
        document.getElementById('message1').innerHTML="*please enter your details";
        save.disabled=true;
        save.style.backgroundColor='#165612';
        if(count>=7){
            save.disabled=false;
        }    
     }
     
    