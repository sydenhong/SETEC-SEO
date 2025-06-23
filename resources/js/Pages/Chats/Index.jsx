import React, { useEffect, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLTELayout from '@/Layouts/AdminLTELayout';
import Breadcrumb from '@/Components/Breadcrumb';
import Echo from "laravel-echo";

const Chats = ({chatsData}) => {    
    const user = usePage().props.auth.user;
    const [chats, setChats] = useState(chatsData);
    const { data, setData, post, put, delete: destroy } = useForm({ content: "" });

    useEffect(() => {
        const channel = window.Echo.channel("chats");
        console.log("channel::", channel);
        channel.listen(".chats.updated", (event) => {
            console.log("New chat received:", event);
            setChats((prevChats) => {
                const exists = prevChats.some((chat) => chat.id === event.chats.id);
                console.log("Yes", exists);
                return exists
                    ? prevChats.map((chat) => (chat.id === event.chats.id ? event.chats : chat))
                    : [event.chats, ...prevChats]; // Add new chat at the top
            });
        });

        return () => channel.stopListening(".chats.updated");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optimistically update UI
        const newChat = { 
            id: Date.now(), // Temporary ID (Laravel will generate real one)
            content: data.content,
            user: user, // The sender's user data
            created_at: new Date().toISOString() // Format timestamp
        };

        setChats(prevChats => [...prevChats, newChat]);
    
        post(route("chat.store"), {
            onSuccess: () => {
                setData("content", ""); // Clear input after sending
            }
        });
    };
    
    console.log("chats:", chats);
    

    const headWeb = 'Chat group'
    const linksBreadcrumb = [{ title: 'Home', url: '/' }, { title: headWeb, url: '' }];

    return (
        <AdminLTELayout breadcrumb={<Breadcrumb header={headWeb} links={linksBreadcrumb} />}>
            <Head title={`Chats`} />
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!-- DIRECT CHAT --> */}
                        <div class="card direct-chat direct-chat-primary">
                            <div class="card-header">
                                <h3 class="card-title">Direct Chat</h3>
                            </div>
                            {/* <!-- /.card-header --> */}
                            <div class="card-body">
                                {/* <!-- Conversations are loaded here --> */}
                                <div class="direct-chat-messages">
                                    {chats.map((item, k) => {
                                        return (
                                            <>
                                                {/* <!-- Message to the right --> */}
                                                <div class={`direct-chat-msg ${(item?.user_id == user.id) && 'right'}`}>
                                                    <div class="direct-chat-infos clearfix">
                                                        <span class="direct-chat-name float-right">{item?.user?.name}</span>
                                                        <span class="direct-chat-timestamp float-left">{item?.created_at}</span>
                                                    </div>
                                                    {/* <!-- /.direct-chat-infos --> */}
                                                    <img class="direct-chat-img" src="/images/avatar.png" alt="message user image" />
                                                    {/* <!-- /.direct-chat-img --> */}
                                                    <div class="direct-chat-text">
                                                        {item?.content}
                                                    </div>
                                                    {/* <!-- /.direct-chat-text --> */}
                                                </div>
                                                {/* <!-- /.direct-chat-msg --> */}
                                            </>
                                        )
                                    })}




                                </div>
                                {/* <!--/.direct-chat-messages--> */}

                            </div>
                            {/* <!-- /.card-body --> */}
                            <div class="card-footer">
                                <form onSubmit={handleSubmit}>
                                    <div class="input-group">
                                        <input
                                            value={data.content}
                                            onChange={(e) => setData("content", e.target.value)}
                                            type="text"
                                            name="message"
                                            placeholder="Type Message ..."
                                            class="form-control"
                                        />
                                        <span class="input-group-append">
                                            <button type="submit" class="btn btn-primary">Send</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- /.card-footer--> */}
                        </div>
                        {/* <!--/.direct-chat --> */}
                    </div>
                </div>
            </section>

        </AdminLTELayout>
    );
};

export default Chats;

