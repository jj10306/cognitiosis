const users = [
    {
    name: "jakob",
    email: "johnsonjakob99@gmail.com",
    username: "jj10306",
    password: "1234",
    date: "03/12/1999"
    },
    {
        name: "lilian",
        email: "lilylily@lil.com",
        username: "lilianeng",
        password: "5678",
        date: "11/25/1998"
    }
]
const posts = [
    {
        username: "jj10306",
        author: "Jakob Johnson",
        title: "Lorem ipsum",
        content: "dolor sit amet, consectetur adipisicing elit. Aliquam aperiam cupiditate distinctio dolore impedit labore nesciunt, officiis porro, provident quisquam ratione,",// sint voluptatibus voluptatum! Accusamus autem laudantium nulla quo vero.
        likes: [users[1]],
        dislikes: [],
        date: "07/20/2019"
    },
    {
        username: "jj10306",
        author: "Jakob Johnson",
        title: "sint voluptatibus",
        content: "Accusamus autem laudantium nulla quo vero",
        likes: [users[1]],
        dislikes: [],
        date: "07/19/2019"
    },
    {
        username: "jj10306",
        author: "Jakob Johnson",
        title: "asa benchode",
        content: "dooshkan brooshkan, sippo looshkan",
        likes: [users[1]],
        dislikes: [],
        date: "07/18/2019"
    }
];


const profile = {
    username: "jj10306",
    posts,
    teachers: [users[1]],
    students: []
};
module.exports = {
    users,
    posts,
    profile
}