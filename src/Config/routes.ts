import AuthorsList from "../Pages/AuthorsList";
import BookCreateForm from "../Pages/BookCreateForm";
import BooksList from "../Pages/BooksList";
import Home from "../Pages/Home";
import IRoute from "../Interfaces/IRoute";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    {
        path: '/books',
        name: 'Books Page',
        component: BooksList,
        exact: true
    },
    {
        path: '/books/new',
        name: 'Book Create Page',
        component: BookCreateForm,
        exact: true
    },
    {
        path: '/authors',
        name: 'Authors Page',
        component: AuthorsList,
        exact: true
    },
]

export default routes;