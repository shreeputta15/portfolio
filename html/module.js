const myRevealingModule = (function() {
  
     let privateVar='peter';
    
    // const publicVar  = 'Hello World';
    function privateFunction() {
      console.log('Name: '+ privateVar);
    }
    
    function publicSetName(name) {
        
       privateVar = name;
    }
    function publicGetName() {
      privateFunction();
    }
    /** reveal methods and variables by assigning them to object     properties */
  return {
      setName: publicSetName,
      
      getName: publicGetName
    };
  })();
  myRevealingModule.setName('mark');
  // prints Name: Mark
  myRevealingModule.getName();

  
///////////// module//////////

  const myModule = (function() {
  
    const privateVariable = 'Hello World';
    
    function privateMethod() {
      console.log(privateVariable);
    }
    return {
      publicMethod: function() {
        privateMethod();
      }
    }
  })();
  myModule.publicMethod();