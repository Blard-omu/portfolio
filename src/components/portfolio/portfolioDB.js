import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import bg from "../../assets/blard_profile1.jpeg"
import pause_point from "../../assets/pause_1.jpeg"
import git_user from "../../assets/search_1.jpeg"
import blog from "../../assets/blogg_1.jpeg"

const projects = [
    {
        _id: 4,
        title: "Pause Point App",
        desccription: "Pause Point App is a robust application that intend to solve numerious security problem in gated cummuties.",
        banner: pause_point,
        github_repo_link: "#",
        github_icon: <FaGithub/>,
        live_demo_link: "https://pause-web.vercel.app",
        live_demo_icon: <RxExternalLink/>,
    },
    
    {
        _id: 6,
        title: "Github Users Search App",
        desccription: "Seach for any github user with this app. The app was built with react and Gihub user API, also made use of react hooks such as useState and useEffect.",
        banner: git_user,
        github_repo_link: "https://github.com/Blard-omu/Github-User-Search-App",
        github_icon: <FaGithub/>,
        live_demo_link: "https://github-user-search-app-zeta-taupe.vercel.app",
        live_demo_icon: <RxExternalLink/>,
    },
    
    {
        
        _id: 2,
        title: "Blogg ",
        desccription: "Blogg is a simple blogg project with interesting features such as login, logout, search functionality, CRUD functionality, Pagination, responsive design, and smooth interface",
        banner: blog,
        github_repo_link: "https://github.com/Blard-omu/Blogg-Front-end",
        github_icon: <FaGithub/>,
        live_demo_link: "https://blogg-fullstack.vercel.app/",
        live_demo_icon: <RxExternalLink/>,
    },
    {
        _id: 3,
        title: "B-Mart",
        desccription: "B-mart is a fullstack ecommerce platform with advanced features such as admin dashboard, order management, checkout and payment integration with PayPal",
        banner: bg,
        github_repo_link: "https://github.com/",
        github_icon: <FaGithub/>,
        live_demo_link: "",
        live_demo_icon: <RxExternalLink/>,
    },
   
    {
        _id: 1,
        title: "Jazzy Burger E-commerce",
        desccription: "Jazzy Burger E-commerce is a user friendly fullstack project built with Python, Django, Django-Rest, JavaScript, and React.",
        banner: bg,
        github_repo_link_link: "https://github.com/",
        github_icon: <FaGithub/>,
        live_demo_link: "",
        live_demo_icon: <RxExternalLink/>,
    },
    {
        _id: 5,
        title: "Github Search App",
        desccription: "Jazzy Burger E-commerce is a user friendly fullstack project built with Python, Django, Django-Rest, JavaScript, and React.",
        banner: bg,
        github_repo_link: "https://github.com/",
        github_icon: <FaGithub/>,
        live_demo_link: "",
        live_demo_icon: <RxExternalLink/>,
    },
    
]

export default projects