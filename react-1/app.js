import axios from "axios";

const getData = async userid => {
  const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${userid}`)
  const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
  console.log(user, post)
};

export default getData;