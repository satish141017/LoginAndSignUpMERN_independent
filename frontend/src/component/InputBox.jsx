import React from "react";
import { UserIcon, LockIcon, HomeIcon, MailIcon, NameIcon } from '../assets/Icons.jsx';

const iconMap = {
    username: UserIcon,
    password: LockIcon,
    address: HomeIcon,
    email: MailIcon,
    name: NameIcon,
};

function InputBox({ placeHolder, label, onChange }) {
    const Icon = iconMap[label];
    return (
        <div className="flex w-full border-2 bg-slate-300 rounded p-2 mb-4">
            <span className=" flex items-center justify-center w-10 h-10">
                {Icon && <Icon />}
            </span>
            <span className="w-full">
                <input onChange={onChange}
                    type={label == 'password' ? 'password' : 'text'}
                    className="focus:outline-none flex items-center justify-center bg-slate-300 rounded text-lg p-1 w-full"
                    id={label}
                    placeholder={placeHolder}
                />
            </span>
        </div>
    );
}

export default InputBox;