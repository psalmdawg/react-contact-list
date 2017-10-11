export function updateContact(contact){
  return {
    type:'ADD_NEW_CONTACT',
    payload: contact
  }
}

export function showContact(contact){
  return {
    type:'SHOW_CONTACT',
    payload: contact
  }
}

export function searchContactList(keyword){
  return {
    type: 'SEARCH_CONTACT_LIST',
    payload: keyword
  }
}


export function deleteContact(contact){
  return {
    type: 'DELETE_CONTACT',
    payload: contact
  }
}

export function editContact(contact){
  console.log('edit contact')
  return {
    type: 'EDIT_CONTACT',
    payload: contact
  }
}

export function sortContacts(){
  console.log('sorting contacts')
  return {
    type: 'SORT_CONTACTS'
  }
}
// {
//   firstName:contact.firstName,
//   lastName:contact.lastName,
//   email:contact.email,
//   telephone:contact.telephone
// }
