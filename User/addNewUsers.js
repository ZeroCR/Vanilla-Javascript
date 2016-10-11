const addNewUsers = function() {
  let onAddNewUser;
  
  const render = function(container) {
    const mainContent = document.querySelector('#' + container);
    mainContent.innerHTML = `<input id="currentUser" ><button id="addUser">Add</button>`;
    
    setEvents();
  };
  
  const setEvents = function() {
    const addUser= document.querySelector('#addUser');
    addUser.onclick = validateUser;
  };
  
  const validateUser = function() {
    const newUserName = document.querySelector('#currentUser').value.trim();
    if(newUserName) {
      onAddNewUser({id: Math.random(), name: newUserName, username: '', posts: []});
      document.querySelector('#currentUser').value = '';
    } else {
      alert('User invalid');
    }
  };
  
  const init = function(container, onAddUser) {
    onAddNewUser = onAddUser;
    render(container);
  };
  
  return {
    init: init
  };
}();