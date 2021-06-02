export  class User
{
    
   
    constructor(name,password='',email)
    {
        this.name=name;
        this.emial=email
        this.password=password;
        this.foundName=false;
        this.foundPass=false;
       /*----------check if there is users befrom him or not and set the data in local storge------- */
       if(localStorage.getItem('userData')==null)
         this.users=[];
       else
        this.users=JSON.parse(localStorage.getItem('userData'));
        /*--------------check  Data that user enter to know if its valid to set or not ----------------------- */
         this.CheckDataValdtion();
    }
  
  
    /*---------Set the Data in My LocalStorage and Make v------------*/
    Registration()
    {
            if(this.validationInputs())
            {
                
             
                    this.user={name:this.name.value,email:this.emial.value,password:this.password.value};
                this.users.push(this.user);
                localStorage.setItem("userData",JSON.stringify(this.users));
                $('#validRegestration').slideDown(1000);
                $('.alert').not('#validRegestration').slideUp(1000);
            
            }
            else
            $('#validRegestration').slideUp(1000);

              this.clearInput();
                 
            
           
    }
    /*-----------check that user enter all Infromation Needed-------------*/ 
    validationInputs()
    {
            this.CheckDataValdtion();        
        if (this.name.value=='' || this.password.value=='' || this.emial.value=='' || this.foundName)
             {
                    this.alert();
                    return false;

             }
            

             return true;
            
    }
    alert()
    {
        if (this.name.value=='')
            $('#newUserName').nextAll().eq(2).slideDown(500);
             else
            $('#newUserName').nextAll().eq(2).slideUp(500);

           if (this.emial.value=='')
              $('#newUserEmail').nextAll().eq(2).slideDown(500);
              else
              $('#newUserEmail').nextAll().eq(2).slideUp(500);
              if (this.password.value=='') {
                $('#newUserPassword').nextAll().eq(1).slideDown(500);
              }
              else 
              $('#newUserPassword').nextAll().eq(1).slideUp(500); 

             if (this.foundName && this.name.value!='')
              {
                
                 
                     $('#taken').slideDown(1000);
                     $('#newUserName').nextAll().eq(2).slideUp(500);
                     return false;
 
              }
              else
              {
                $('#taken').slideUp(1000);
                
              }
           

    }

    /*--------take UserName and Password and check if there exist or not*/
    logIn()
    {
        
        if (this.foundName &&this.foundPass) {
            $('#userName').nextAll().eq(2).fadeOut(200);
            $('#userPassword').nextAll().eq(2).fadeOut(500);
            alert(`welcome ${this.name.value}`);
            this.clearInput();
            return;
        }
       // console.log(this.foundName,this.foundPass);
          if (!this.foundName)
            $('#userName').nextAll().eq(2).fadeIn(500);
                else
            $('#userName').nextAll().eq(2).fadeOut(200);
           
        if (!this.foundPass)
             $('#userPassword').nextAll().eq(2).fadeIn(500);
         else
             $('#userPassword').nextAll().eq(2).fadeOut(200);
            
        this.clearInput();
            
       
     
    }

    /*------------check of all Data that user had enter ---------------------*/
    CheckDataValdtion()
    {
        for(let i=0;i<this.users.length;i++)
            {
        
            if (this.name.value==this.users[i].name)
                    this.foundName=true;
            if (this.password.value==this.users[i].password)
               this.foundPass=true;
             }

    
}
/*------- Clear User Inpust FOr Login And Registration----------*/
    clearInput()
    {
        this.name.value='';
        this.emial.value='';
        this.password.value='';
    }
    


    
    

    

     

    
}