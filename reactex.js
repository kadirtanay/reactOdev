import axios from "axios";

export default ((number) => {
    const getUser = () => {
        return new Promise(async (resolve) => {
            const { data } = await (axios("https://jsonplaceholder.typicode.com/users/" + number));
            resolve(data);

        });
    }
    const getPost = () => {
        return new Promise(async (resolve) => {
            const { data } = await (axios("https://jsonplaceholder.typicode.com/posts?userId=" + number));
            resolve((data.filter(({ id }) => id === number)));

        })
    };
    Promise.all([getUser(number),"post :",getPost(number)])
        .then(console.log)
        .catch(console.log);
});


