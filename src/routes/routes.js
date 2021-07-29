import Signup from "../pages/Auth/Signup"
import Login from "../pages/Auth/Login"
import Landing from "../pages/Landing/Landing"
import Challenge from "../pages/Challenge/Challenge"
import Teams from "../pages/Teams/Teams"


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
export const CHALLENGE_PAGE = route('Challenge', '/challenge', Challenge)
export const TEAMS_PAGE = route('Teams', '/teams', Teams)


export const AllPrivateRoutes = [
    CHALLENGE_PAGE,
    TEAMS_PAGE,
]

export const AllOpenRoutes = [
    LANDING_PAGE,
    LOGIN_PAGE,
    SIGNUP_PAGE,
]

export const NavbarRoutes = [
    LANDING_PAGE,
    CHALLENGE_PAGE,
    TEAMS_PAGE,
]