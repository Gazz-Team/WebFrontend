import Signup from "../pages/Auth/Signup"
import Login from "../pages/Auth/Login"
import About from "../pages/About/About"
import Landing from "../pages/Landing/Landing"
import Contact from "../pages/Contact/Contact"


const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route

export const SIGNUP_PAGE = route("Signup","/signup",Signup)
export const LOGIN_PAGE = route('Login', '/login', Login)

//Misal nanti ada page ini:
export const LANDING_PAGE = route('Home', '/', Landing)
export const ABOUT_PAGE = route('About us', '/about', About)
export const CONTACT_PAGE = route('Contact us', '/contact', Contact)


export const AllPrivateRoutes = [

]

export const AllOpenRoutes = [
    LANDING_PAGE,
    LOGIN_PAGE,
    SIGNUP_PAGE,
    ABOUT_PAGE,
    CONTACT_PAGE,
]

export const NavbarRoutes = [
    LANDING_PAGE,
    ABOUT_PAGE,
    CONTACT_PAGE,
]