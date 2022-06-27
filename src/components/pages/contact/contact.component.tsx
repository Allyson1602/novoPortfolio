/* eslint-disable no-useless-escape */
import { User, At, Envelope, Check } from "phosphor-react";
import { FC, useState, FormEvent } from "react";

import "./contact.style.css";

interface IFormData {
    name: string;
    email: string;
    message: string;
}

interface IValidationData {
    status: boolean;
    text?: string;
}

const Contact: FC = () => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const ValidationDatas = (): IValidationData => {
        let pattern;

        if(!name || !email || !message) {
            return {
                status: false,
                text: "Preencha todos os campos"
            }
        }

        pattern = /([^A-Za-z\s])/g;
        let validationName = !pattern.test(name);
        if(!validationName) {
            return {
                status: false,
                text: "Informe o nome corretamente"
            }
        }

        pattern = /([^A-Za-z0-9\_\-\@\.\n])/g;
        let validationEmail = !pattern.test(email);
        if(!validationEmail) {
            return {
                status: false,
                text: "Informe o email corretamente"
            }
        }

        return {
            status: true,
        };
    }

    const getDatas = (): IFormData | null => {
        if(!name || !email || !message) return null;

        return {
            name: name,
            email: email,
            message: message
        };
    };

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        if(ValidationDatas().status) {
            console.log(getDatas());
        }
    };

    return (
        <>
            <div className="container-fluid">
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

                    <div className="col-lg-12">
                        <div className="art-section-title">
                            <div className="art-title-frame">
                                <h4>Entrar em contato</h4>
                            </div>
                        </div>
                        <div className="art-a art-card">
                            <form id="form" className="art-contact-form" onSubmit={handleSubmit}>
                                <div className="art-form-field">
                                    <input
                                        id="name"
                                        className="art-input"
                                        type="text"
                                        placeholder="Nome"
                                        value={name || ""}
                                        onChange={(ev) => setName(ev.target.value)}
                                    />
                                    <label htmlFor="name"><User size={20} weight="fill" /></label>
                                </div>
                                <div className="art-form-field">
                                    <input
                                        id="email"
                                        className="art-input"
                                        type="email"
                                        placeholder="Email"
                                        value={email || ""}
                                        onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                    <label htmlFor="email"><At size={20} weight="fill" /></label>
                                </div>
                                <div className="art-form-field">
                                    <textarea
                                        id="message"
                                        className="art-input"
                                        placeholder="Mensagem"
                                        value={message || ""}
                                        onChange={(ev) => setMessage(ev.target.value)}
                                    ></textarea>
                                    <label htmlFor="message"><Envelope size={20} weight="fill" /></label>
                                </div>
                                <div className="art-submit-frame">
                                    <button className="art-btn art-btn-md art-submit" type="submit"><span>Enviar mensagem</span></button>
                                    {
                                        ValidationDatas().status
                                        ? <div className="art-success">Success <Check size={20} weight="fill" /></div>
                                        : <div className="art-success">{ValidationDatas().text}</div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
