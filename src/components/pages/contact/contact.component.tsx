/* eslint-disable no-useless-escape */
import { User, At, Envelope, Check } from "phosphor-react";
import { FC, useState, FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

import "./contact.style.css";

interface IValidationData {
    status: boolean;
    text?: string;
}

const Contact: FC = () => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const [messageSubmit, setMessageSubmit] = useState<IValidationData | null>(null);
    
    const form = useRef(null);

    const validationData = (): IValidationData => {
        let pattern: RegExp;
        let msg: IValidationData = {
            status: true,
        };
        
        if(!name || !email || !message) {
            msg = {
                status: false,
                text: "Preencha todos os campos"
            };

            setMessageSubmit(msg);
            return msg;
        }

        pattern = /([^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s])/g;
        let validationName = !pattern.test(name);
        if(!validationName) {
            msg = {
                status: false,
                text: "Informe o nome corretamente"
            }

            setMessageSubmit(msg);
            return msg;
        }

        pattern = /([^A-Za-z0-9\_\-\@\.\n])/g;
        let validationEmail = !pattern.test(email);
        if(!validationEmail) {
            msg = {
                status: false,
                text: "Informe o email corretamente"
            }

            setMessageSubmit(msg);
            return msg;
        }
        pattern = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        validationEmail = pattern.test(email);
        if(!validationEmail) {
            msg = {
                status: false,
                text: "Informe o email corretamente"
            }

            setMessageSubmit(msg);
            return msg;
        }

        setMessageSubmit(msg);
        return msg;
    }

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        if(
            validationData().status && form.current && (
                process.env.REACT_APP_API_EMAIL_SERVICE &&
                process.env.REACT_APP_API_EMAIL_TEMPLATE &&
                process.env.REACT_APP_API_EMAIL_KEY
            )
        ) {
            console.log(
                process.env.REACT_APP_API_EMAIL_SERVICE,
                process.env.REACT_APP_API_EMAIL_TEMPLATE,
                process.env.REACT_APP_API_EMAIL_KEY
            )
            emailjs.sendForm(`${process.env.REACT_APP_API_EMAIL_SERVICE}`, `${process.env.REACT_APP_API_EMAIL_TEMPLATE}`, form.current, `${process.env.REACT_APP_API_EMAIL_KEY}`)
              .then((result) => {
                    setMessageSubmit({
                        status: true,
                    });
              }, (error) => {
                    setMessageSubmit({
                        status: false,
                        text: error.text
                    });
              });
        }
    };

    return (
        <motion.div
            className="transition-fade"
            id="swup"
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="contact container-fluid">
                <div className="row p-30-0">
                    <div className="col-lg-12">
                        <div className="art-section-title">
                            <div className="art-title-frame">
                                <h4>Informações de contato</h4>
                            </div>
                        </div>
                    </div>
                    <div className="data-contact-information">
                        <div className="col-12 col-xl-4">
                            <div className="art-a art-card">
                                <div className="art-table p-15-15">
                                    <ul>
                                        <li>
                                            <h6>Email:</h6><span>athyrsonallyson@gmail.com</span>
                                        </li>
                                        <li>
                                            <h6>Discord:</h6><span>Allyson Athyrson#7485</span>
                                        </li>
                                        <li>
                                            <h6>Workana:</h6><span>Allyson Athyrson</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="art-a art-card">
                                <div className="art-table p-15-15">
                                    <ul>
                                        <li>
                                            <h6>Instagram:</h6><span>@allysonathyrson</span>
                                        </li>
                                        <li>
                                            <h6>Telefone:</h6><span>(61) 9 9396-8144</span>
                                        </li>
                                        <li>
                                            <h6>Facebook:</h6><span>Allyson Athyrson</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        (!messageSubmit || messageSubmit.status === false) &&
                            <div className="col-lg-12">
                                <div className="art-section-title">
                                    <div className="art-title-frame">
                                        <h4>Entrar em contato</h4>
                                    </div>
                                </div>
                                <div className="art-a art-card">
                                    <form id="form" className="art-contact-form" ref={form} onSubmit={handleSubmit}>
                                        <div className="art-form-field">
                                            <input
                                                id="name"
                                                name="name"
                                                className="art-input"
                                                placeholder="Nome"
                                                value={name || ""}
                                                onChange={(ev) => setName(ev.target.value)}
                                            />
                                            <label htmlFor="name"><User size={20} weight="fill" /></label>
                                        </div>
                                        <div className="art-form-field">
                                            <input
                                                id="email"
                                                name="email"
                                                className="art-input"
                                                placeholder="Email"
                                                value={email || ""}
                                                onChange={(ev) => setEmail(ev.target.value)}
                                            />
                                            <label htmlFor="email"><At size={20} weight="fill" /></label>
                                        </div>
                                        <div className="art-form-field">
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="art-input"
                                                placeholder="Mensagem"
                                                value={message || ""}
                                                onChange={(ev) => setMessage(ev.target.value)}
                                            ></textarea>
                                            <label htmlFor="message"><Envelope size={20} weight="fill" /></label>
                                        </div>
                                            {messageSubmit?.status}
                                        <div className="art-submit-frame">
                                            <button className="art-btn art-btn-md art-submit" type="submit"><span>Enviar mensagem</span></button>
                                            {
                                                messageSubmit && messageSubmit.status === false
                                                ? <div className="message-submit">{messageSubmit && messageSubmit.text}</div>
                                                : null
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                    }

                    {
                        messageSubmit && messageSubmit.status
                        ? <div className="message-submit art-success">Mensagem enviada <Check size={15} weight="fill" /></div>
                        : null
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
