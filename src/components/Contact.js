import React, { useState, useEffect } from 'react';

export const Contact = () => {

    const [userData, setUserData] = useState({ name: '', email: '', message: '' });

    const callContact = async () => {
        try {
            const res = await fetch('/userdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email });

            if (!res.status === 200) {
                const err = new Error(res.err);
                throw err;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callContact();
    }, []);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const sendContact = async (e) => {
        e.preventDefault();
        const { name, email, message } = userData;

        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message
            }),
        });

        const data = await res.json();
        if (!data) {
            window.alert('Invalid credentials');
        } else {
            window.alert('Success');
            setUserData({ ...userData, message: '' });
        }
    };

    return (
        <>
            <section class="contact" id="contact">
                <div class="max-width">
                    
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p>Do give you feedback/suggestions on the given contact. also if have any kind of doubt or query
                                kindy forward the messge to us so that we can resolve.
                                You can direcly message us on the given information. suggestions,doubts,queries,all accepted.
                            </p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Ashwani Kumar</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title">Gorakhpur, Uttarpradesh(India)</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <div class="sub-title">ashwanikum@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <form  method="post" >
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required 
                                        name='name' value={userData.name}
                                        onChange={handleInputs}/>
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required
                                        name='email' value={userData.email}
                                        onChange={handleInputs} />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required
                                    name='message' value={userData.message}
                                    onChange={handleInputs}></textarea>
                                </div>
                                <div class="button-area">
                                    <button type="submit" onClick={sendContact}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
