import React from "react";
import { Chat } from "../component/Chat";
import { Sidebar } from "../component/Sidebar";

export const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />

            </div>
        </div>
    );
};