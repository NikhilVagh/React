import React from "react";
import { Input } from "./Input";
import { Messages } from "./Messages";

export const Chat = () => {
    return (
        <div className="chat">
            <div className="ChatInfo">
                <span> Name </span>
                <div className="chatIcons">
                    <img src="https://th.bing.com/th/id/OIP.YsTRF2RS5Kk4W3NSzJJHdgHaGX?w=202&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <img src="https://th.bing.com/th/id/OIP.4UDGzDQhtqxuBsGpYHeCGwHaHC?w=198&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <img src="https://www.bing.com/th?id=OIP.UUFx98DzvmqyQgHmMY76_AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}