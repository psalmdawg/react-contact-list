export default function(state = {
  activeContact:null,
  contactSearchResults:[],
  contacts:[
    {
      firstName: "Paul",
      lastName:"Davis",
      telephone:generateTel(),
      email:"salmon@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Julia",
      lastName:"Xyylo",
      telephone:generateTel(),
      email:"xylo.phonee@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Sarah",
      lastName:"Anne",
      telephone:generateTel(),
      email:"sarah@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Dave",
      lastName:"Anderson",
      telephone:generateTel(),
      email:"Dave@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Jenny",
      lastName:"Smith",
      telephone:generateTel(),
      email:"Jenny@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "John",
      lastName:"Smith",
      telephone:generateTel(),
      email:"john@hotmail.com",
      id:uniqueIdGenerator()
    },{
      firstName: "Derek",
      lastName:"Jones",
      telephone:generateTel(),
      email:"delboy@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Theresa",
      lastName:"May",
      telephone:generateTel(),
      email:"theressaas@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Donald",
      lastName:"Trump",
      telephone:generateTel(),
      email:"thedonald@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Kim Jung",
      lastName:"Un",
      telephone:generateTel(),
      email:"KimJung@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Lewis",
      lastName:"Hamilton",
      telephone:generateTel(),
      email:"Lewis@hotmail.com",
      id:uniqueIdGenerator()
    },
    {
      firstName: "Angela",
      lastName:"Merkel",
      telephone:generateTel(),
      email:"Angela@hotmail.com",
      id:uniqueIdGenerator()
    }
  ]
}, action){

  switch(action.type){

    case 'ADD_NEW_CONTACT':
    console.log(action.payload)
    let tempContacts = state.contacts;
    tempContacts.push({
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      telephone: action.payload.telephone,
      email: action.payload.email,
      id:uniqueIdGenerator()
    })


    return Object.assign({},state,{
      contacts: sortContacts(tempContacts)
    })

    case 'SHOW_CONTACT':
    console.log(action.payload)
    return Object.assign({}, state, {
       activeContact:action.payload
     })

     case 'SEARCH_CONTACT_LIST':
      console.log(action.payload)

      const search = action.payload.toLowerCase();
      const newContacts = [];

      for(let i=0; i<state.contacts.length; i++){
        let itemArray = state.contacts[i].firstName.toLowerCase().split("")
        if(itemArray.indexOf(search) > -1){
          newContacts.push(state.contacts[i])
        }
      }

      console.log(newContacts)
      if(newContacts.length > 0){
        return Object.assign({}, state, {
          contactSearchResults:newContacts
        })
      } else {
        return Object.assign({}, state, {
          contactSearchResults:[]
        })
      }

    case 'DELETE_CONTACT':
      console.log(action.payload.id)
      let tempContactArray = state.contacts

      tempContactArray.map(function(obj, i) {
        if(obj.id === action.payload.id) {
          console.log(i)
          tempContactArray.splice(i, 1)
          console.log(tempContactArray)

        }
        return tempContactArray
      })

      return Object.assign({}, state, {
        contacts:tempContactArray,
        activeContact:null
      })

    case 'EDIT_CONTACT':

      let tempArray = state.contacts

      tempArray.map(function(obj, i) {
        if(obj.id === state.activeContact.id) {
          console.log(obj)
          tempArray[i].firstName = action.payload.firstName;
          tempArray[i].lastName = action.payload.lastName;
          tempArray[i].email = action.payload.email;
          tempArray[i].telephone = action.payload.telephone;
        }

      })

      return Object.assign({}, state, {
        contacts:sortContacts(tempArray)
      })

    case 'SORT_CONTACTS':
      let newArrayContacts = state.contacts
      console.log(newArrayContacts)
      newArrayContacts.sort(function(a, b) {
        var textA = a.lastName.toUpperCase();
        var textB = b.lastName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      console.log(newArrayContacts)
      return Object.assign({}, state, {
        contacts:newArrayContacts
      })

    default:
    return state
  }

}

function uniqueIdGenerator(){
   var chars = 'abcdefghijklmnopqrstuvxywz!@£$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVXWYZ'
   var charsArray = chars.split('')
   var array = []

   for(let i=0;i<8;i++){
     array.push(charsArray[Math.floor(Math.random()*chars.length)])
   }

   let string = array.join('')
   let UID = new Date().getTime() + string
   return UID

 }

 function generateTel(){
   let tel = '04'
   for(let i=0;i<8;i++){
     let newNumber = Math.floor(Math.random()*10)
     tel = tel.concat(newNumber)
   }
   return tel
 }

 function sortContacts(input){
   let newArrayContacts = input
   console.log(newArrayContacts)
   newArrayContacts.sort(function(a, b) {
     var textA = a.lastName.toUpperCase();
     var textB = b.lastName.toUpperCase();
     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
   });
   return newArrayContacts
 }
