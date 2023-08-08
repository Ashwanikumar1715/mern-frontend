import React,{useEffect} from 'react';
import {useState} from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import mypic from "../images/mypic.jpg"

export const About = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    const callAboutpage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const err = new Error(res.err);
                throw err;
            }

        } catch (err) {
            console.log(err);
            navigate('/login')
        }
    }

    useEffect(() => {
        callAboutpage();
    }, []);
    return (
        <>
            <section class="about" id="about">
                <div class="max-width">
                   
                    <div class="about-content">
                        <div class="column left">
                            <img src={mypic} alt="" />
                        </div>
                        <div class="column right">
                            <div class="text"> Hello {userData.name} </div>
                            <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">You are welcomed!! all the information is fetched using backend 
                                        and update profile will be updated soon.</div>
                                       
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head"> Your Email</div>
                                        <div class="sub-title">{userData.email}</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Your phone no.</div>
                                        <div class="sub-title">{userData.phone}</div>
                                    </div>
                                </div>
                            <NavLink to="/">Update Profile</NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
