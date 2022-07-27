import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../configUrl/configURL";
import httpServ from "../../serviceWorker/http.service";
import UserNav from "../../components/NavHeader/UserNav";
import FooterNav from "../Footer/Footer";
import "./register.css";
import { useFormik } from 'formik';

export default function Register() {
    let history = useHistory();

    const [eroremail, setErorEmail] = useState('');
    const [erorpass, setErorPass] = useState('');

    const validateEmail = (value) => {
        if (!value) {
            setErorEmail('Trường này không để rỗng.');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setErorEmail('Invalid email address');
        }
    }

    const validatePass = (value) => {
        if (!value) {
            setErorPass('Trường này không để rỗng.');
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: '',
            address: '',
        },
        onSubmit: values => {
            validateEmail(values.email);
            validatePass(values.password);
            httpServ
                .dangKi(values)
                .then((res) => {
                    message.success("Đăng kí thành công");
                    console.log("res", res);
                    setTimeout(() => {
                        history.push("/login");
                    }, 3000);
                })
                .catch((err) => {
                    message.error("Đăng kí không thành công");
                    console.log("err", err);
                });
            console.log("value", values);
        }
    });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit(event);
        }}
            className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 object-cover hidden bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)' }}>
                <div className="absolute bg-black opacity-20 inset-0 z-0" />
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: '#161616' }}>
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)' }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0" />
                </div>
                <div className="w-full py-3 z-20">
                    <h1 className="text-white text-5xl font-bold">Đăng kí</h1>
                    <div action className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto mb-10">
                        <div className="pb-1 pt-2">
                            <input type="text" onChange={formik.handleChange} name="name" id="name" placeholder="Họ và tên" className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" />
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2">
                            <input type="email" onChange={formik.handleChange} name="email" id="email" placeholder="Email" className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" />
                            {eroremail !== null ? (
                                <p className="eror_email">{eroremail}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2">
                            <input onChange={formik.handleChange} className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" type="password" name="password" id="password" placeholder="Mật khẩu" />
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2">
                            <input onChange={formik.handleChange} className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" type="text" name="phone" id="phone" placeholder="Số điện thoại" />
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2 text-white">
                            <input onChange={formik.handleChange} className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" type="date" name="birthday" id="birthday" placeholder="Ngày sinh nhật" />
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2">
                            <select onChange={formik.handleChange} name="gender" className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black">
                                <option value="">lựa chọn</option>
                                <option value="true">Nam</option>
                                <option value="false">Nữ</option>
                            </select>
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="pb-2 pt-2">
                            <input onChange={formik.handleChange} className="block w-full p-3 text-lg rounded-sm bg-black text-white focus:bg-white focus:text-black" type="text" name="address" id="address" placeholder="Địa chỉ" />
                            {erorpass !== null ? (
                                <p className="eror_email">{erorpass}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="px-4 pt-5">
                            <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Đăng kí</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
