import React,{useState} from 'react';
import FormInput from '../forms/FormInput/index';
import Button from '../forms/Button/index';
import './contact.scss';
export default function Contact() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [msg,setMsg] = useState('');
    return (
        <div className="contact">
            <div className="container">
                <form>
                    <div className="row">
                    <FormInput className="contact-style"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="FullName"
                    handleChange={(e) => setName(e.target.value)}/>

                    <FormInput className="contact-style"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    handleChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <FormInput 
                    type="text"
                    name="subject"
                    value={subject}
                    placeholder="Subject"
                    handleChange={(e) => setSubject(e.target.value)}/>

                    <div className="formRow">
                    <textarea
                    type="textarea"
                    name="msg"
                    value={msg}
                    placeholder="Message"
                    onChange={(e) => setMsg(e.target.value)}/>
                    </div>
                    <Button className="btn first">Send Message</Button>
                </form>
            </div>
        </div>
    )
}
