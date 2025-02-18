import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookCurd from './FacebookCurd';
import Googlecurd from './Googlecurd';
import Swal from 'sweetalert2';
import { sendRequest } from '../calls/request';
import { surve } from '../utils/surve';
import useRequest from '../hooks/call';
import { AUTH_KEY , REFRESH_KEY } from '../utils/constants';

export default function Login() {
    const [Message, setMessage] = useState('');
    const [emailORphone, setemailORphone] = useState();
    const [Security, setSecurity] = useState();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        if (!emailORphone || !Security) {
            Swal.fire('يرجى ملئ جميع الحقول');
            return;
        }

        await sendRequest({
            url: '/api/v1/login/',
            method: 'POST',
            data: JSON.stringify({
                email_or_phone: emailORphone,
                password: Security
            }),
            headers: {
                'content-type': 'application/json',
                 
            }
        })
            .then(data => {
                console.log(data);
                localStorage.setItem(AUTH_KEY,data.access)
                localStorage.setItem(REFRESH_KEY,data.refresh)
                localStorage.setItem('token', JSON.stringify(data));
               
                Swal.fire('تم التسجيل بنجاح');
                navigate('/');
            })
            .catch(error => {
                setMessage(`حدث خطأ ${error.detail}`);
            });
    }

    return (
        <div className=" flex flex-col gap-[50px] items-center">
            <div className="flex gap-[10px]">
                <div
                    className="bg-white
        shadow-lg shadow-gray-200 
        rounded-lg  flex flex-col gap-[30px]
        items-end p-[40px] h-[200px] w-[500px]"
                >
                    <h1 className="font-bold text-3xl">عضو جديد</h1>
                    <Link
                        to={'/Register'}
                        className=" flex items-center
            justify-center rounded-lg
            font-semibold border border-blue-600
            cursor-pointer text-lg
             w-full h-[55px] text-blue-500"
                    >
                        انشاء حساب
                    </Link>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white
        shadow-lg shadow-gray-200 
        rounded  flex flex-col gap-[30px]
        items-end p-[40px]"
                >
                    <h1 className="font-bold text-3xl">الأعضاء المسجلين</h1>
                    <div className="flex flex-col items-end gap-[20px]">
                        <input
                            onChange={e => setemailORphone(e.target.value)}
                            required
                            type="text"
                            placeholder="ادخل الايميل / رقم الموبايل"
                            className="text-gray-400 text-end pr-2
                 outline-none  w-[450px]
                 border rounded h-[55px] 
                 "
                        />
                        <p className="text-sm text-gray-400">
                            رقم الموبايل بدون كود الدولة مثال: 01155555555
                        </p>
                        <input
                            onChange={e => {
                                setSecurity(e.target.value);
                            }}
                            required
                            type="password"
                            placeholder="كلمة المرور"
                            className="text-gray-400 w-[450px] outline-none
                 border rounded h-[55px] text-end pr-2"
                        />
                        <div className="flex    w-full justify-between">
                            <p className="text-gray-400">
                                ليس لديك حساب؟
                                <span>
                                    <Link className="text-blue-600">
                                        تسجيل حساب
                                    </Link>
                                </span>
                            </p>

                            <Link className="text-blue-600">
                                نسيت كلمة السر؟
                            </Link>
                        </div>
                    </div>
                    <input
                        value={'   تسجيل الدخول'}
                        type="submit"
                        className="bg-blue-800 flex 
            items-center justify-center
            rounded-lg font-semibold shadow cursor-pointer
            text-white text-lg w-full h-[55px]"
                    />
                </form>

            </div>
                {Message && <p className="text-red-500 text-lg  pr-[100px]  self-end">{Message}</p>}
        </div>
    );
}
