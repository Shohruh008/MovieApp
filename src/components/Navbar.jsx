import React from 'react'
export default function Navbar() {
    const date=new Date();
    const day=date.getDay();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    return (
        <>
            <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid d-flex fustify-content-between">
                    <a class="navbar-brand" href="#">
                        Movie app
                    </a>
                    <h5>
                        0{day}.0{month}.{year}y
                    </h5>
                </div>
            </nav>
        </>
    )
}
