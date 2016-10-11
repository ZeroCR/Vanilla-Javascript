const userDetail = function () {
  

  const render = function(container, user) {
    const mainContent = document.querySelector('#' + container);
    let content = `<div>User Details</div>`;
    content += `<div>${user.name} (${user.username})</div>`;
    content += `<ul id="details">`;
    
    user.posts.forEach(post => content += `<li>${post.id}. ${post.title}</li>`);
    content += `</ul>`;
    content += `<button id="return">Return</button>`;
    mainContent.innerHTML = content;
    
    setEvents();
  };
  
  const setEvents = (onReturn) => {
    const addUser= document.querySelector('#return');
    addUser.onclick = onReturn;
  };
  
  return {
    render: render,
    setEvents: setEvents
  };
}();