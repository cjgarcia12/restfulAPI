let cardInfo = document.getElementById('api-data');

const displayPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
            cardInfo.innerHTML = '';
            let content = '';
            json.forEach(element => {
                  content += `<div>${JSON.stringify(element)}</div><br>`;
            });
            cardInfo.innerHTML = content;
      });
}

const displayID10 = () => {
      cardInfo.innerHTML = '';
      fetch('https://jsonplaceholder.typicode.com/posts/10')
      .then(response => response.json())
      .then(json => cardInfo.innerHTML = `<div>${JSON.stringify(json)}</div><br>`);
}

const createPost = () => {
      cardInfo.innerHTML = '';
      fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'New post',
              body: 'This is a new Post',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => response.json())
          .then((json) => {
            console.log(json.id); 
            cardInfo.innerHTML = `<div>${JSON.stringify(json)}</div><br>`;
          });
}

const replacePostID = () => {
      cardInfo.innerHTML = '';
      fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'PUT',
            body: JSON.stringify({
              id: 12,
              title: 'New Post',
              body: 'This is the new post with id of 12',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => cardInfo.innerHTML = `<div>${JSON.stringify(json)}</div><br>`);
}

const updateTitleID12 = () => {
      cardInfo.innerHTML = '';
      fetch('https://jsonplaceholder.typicode.com/posts/12', {
            method: 'PUT',
            body: JSON.stringify({
              id: 12,
              title: 'Updated Title',
              body: 'This is the new post with id of 12 with a new Title',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => cardInfo.innerHTML = `<div>${JSON.stringify(json)}</div><br>`);
}

const deletePostID12 = () => {
      cardInfo.innerHTML = '';
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
          });
      cardInfo.innerHTML = `<div><h2>Post ID 12 Successfully Deleted</h2></div><br><img src="images/success.jpg" class="img-fluid">`
}

        
