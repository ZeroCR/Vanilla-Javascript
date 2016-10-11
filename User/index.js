const userModule = function () {
  let users = [];
  
  const onAddUser = (newUser) => {
    users.push(newUser);
    userList.render(users);
  };
  
  const onDeleteUser = (userID) => {
    users = users.filter(user => user.id !== parseFloat(userID, 10));
    userList.render(users);
  };
  
  const onDetailsUser = (userID) => {
    userDetail.render('mainContent',users.find(user => user.id === parseFloat(userID, 10)));
    userDetail.setEvents(onReturn);
  };
  
  const onReturn = () => {
    render();
    addNewUsers.init('addNewUsers', onAddUser);
    userList.render(users);
  };
  
  const onResetUsers = () => {
    users = [];
    userList.render(users);
    getInitData();
  };
  
  const getInitData = () => {
    userService.getData("http://jsonplaceholder.typicode.com/users", (usersData) => {
      userService.getData("http://jsonplaceholder.typicode.com/posts", (postsData) => {
        users = usersData.map(userData => {
          return {
            id: userData.id, 
            name: userData.name, 
            username: userData.username, 
            posts: postsData.filter(post => post.userId === userData.id).map(post => {return {id: post.id, title: post.title}})
          };
        });
        userList.render(users);
      });
    });
  };
  
  const render = () => {
    const mainContent = document.querySelector('#mainContent');
    mainContent.innerHTML = `<p id="helloText">User List</p>` + 
    	` <div id='addNewUsers'>` +
    	` </div> ` +
    	` <div id='userList'> ` + 
    	`</div>` +
    	`<div id="totalUsers">` +
    	`</div>`+
    	`<div>` +
    	`<button id="reset">Reset</button>` +
    	`</div>`;
  };
  
  const init = () => {
    render();
    getInitData();	
    addNewUsers.init('addNewUsers', onAddUser);
    userList.init('userList', onDeleteUser, onResetUsers, onDetailsUser);
  };
  
  return {
    init: init
  };
}();