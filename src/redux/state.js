import { rerenderEntireTree } from "../render";

let state = {profilePage:{posts: [
    { id: 1, message: "Hi, how are you?", likes: 20, dislikes: 0 },
    { id: 2, message: "Its my first post!", likes: 20, dislikes: 0 },
    { id: 3, message: "I am here!", likes: 20, dislikes: 0 },
    { id: 4, message: "Es mīlu tevi!", likes: 20, dislikes: 0 },
    { id: 5, message: "Haha", likes: 20, dislikes: 0 },
  ]},

  dialogsPage:{
  dialogs: [
    { id: 1, name: "Andris" },
    { id: 2, name: "Elita" },
    { id: 3, name: "Maija" },
    { id: 4, name: "Juris" },
    { id: 5, name: "Ilze" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hello!" },
    { id: 3, message: "I am here!" },
    { id: 4, message: "Es mīlu tevi!" },
    { id: 5, message: "Haha" },
  ]}
};

export let addPost=(postMessage)=>{

            let newPost = {
            id:6,
            message: postMessage,
            likes:0,
            dislikes:0
        }
    

    state.profilePage.posts.push(newPost); 
    rerenderEntireTree (state);
};


export default state