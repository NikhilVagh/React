import React from "react";

export const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://www.bing.com/th?id=OIP.7G6XwS4BzQWHQl-VoyvCFgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>
                    Hello
                </p>
                <img src="https://www.bing.com/th?id=OIP.y7XPzjE6dkuP3STU-9KV7QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
            </div>
        </div>
    );
}