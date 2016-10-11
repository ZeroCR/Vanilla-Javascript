const userList = function () {
  let onResetUsersClick;
  let userListContainer;
  let onDeleteUserClick;
  let onDetailsUserClick;
  
  const render = (users) => {
    const mainContent = document.querySelector('#' + userListContainer);
    let content = `<ul id="userItems">`;
    
    users.forEach(user => content += `<li>${user.name} - (${user.posts.length} posts)<button id="Delete_${user.id}">DELETE</button><button id="Details_${user.id}">Details</button></li>`);
    content += `</ul>`;
    
    mainContent.innerHTML = content;
    renderTotalUsers(users.length);
    setEvents();
  };
  
  const renderTotalUsers = (usersLength) => {
    document.querySelector('#totalUsers').innerHTML = ` Total Users: ${usersLength}`;
  };
  
  const setEvents = () => {
    const addUser= document.querySelector('#userItems');
    addUser.onclick = onButtonClicked;
    
    const resetUsers= document.querySelector('#reset');
    resetUsers.onclick = onResetUsersClick;
  };
  
  const onButtonClicked = (e) => {
    if(e.target && e.target.nodeName === "BUTTON" && e.target.id.split('_')[0] === 'Delete') {
  		onDeleteUserClick(e.target.id.split('_')[1]);
  	}
  	if(e.target && e.target.nodeName === "BUTTON" && e.target.id.split('_')[0] === 'Details') {
  		onDetailsUserClick(e.target.id.split('_')[1]);
  	}
  };
  
  const init = (container, onDeleteUser, onResetUsers, onDetailsUser) => {
    userListContainer = container;
    onDeleteUserClick = onDeleteUser;
    onResetUsersClick = onResetUsers;
    onDetailsUserClick = onDetailsUser;
  };
  
  return {
    init: init,
    render: render
  };
}();