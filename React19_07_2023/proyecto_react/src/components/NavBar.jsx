import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <div>
            <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand">
                <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                Proyecto React
                </Link>
            </div>
            </nav>
        </div>
    )
}