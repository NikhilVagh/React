import React from "react";

export const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <img src="data:image/jpeg;base64,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" />
                <input type="file" style={{display: "none"}} id='file' />
                <label htmlFor="file">
                    <img src="https://th.bing.com/th/id/OIP.zT5VYJ2zR7O53gmD36lNYwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}