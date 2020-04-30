import React, {useState} from 'react';
import style from "./contact.module.sass";
import useFetch from "../../hooks/useFetch";


function Contact() {
    const [{response, isLoading}, doFetch] = useFetch("https://formspree.io/mgenwrwy");
    const [form, setForm] = useState({});

    function onChangeForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function sendForm() {
        doFetch({
            method: "post",
            data: form
        });
    }

    return (
        <div>
            <h3 className="title-text">Contact</h3>
            <div className={style.form}>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={onChangeForm} id="name" name="name" type="text"/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={onChangeForm} id="email" name="email" type="email"/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea onChange={onChangeForm} id="textarea" name="message" className="materialize-textarea"/>
                        <label htmlFor="textarea">Message</label>
                    </div>
                </div>
                <button disabled={isLoading} onClick={sendForm} className="btn waves-effect waves-light" name="action">
                    Send <i className="fas fa-paper-plane"/>
                </button>
            </div>
            {response && (
                <p>Message sent, thanks, I will contact you!</p>
            )}
        </div>
    );
}

export default Contact;
