import React, { useState } from 'react';
import {
    Chat,
    Channel,
    ChannelHeader,
    Thread,
    Window,
    ChannelList,
    ChannelListTeam,
    MessageList,
    MessageTeam,
    MessageInput,
} from 'stream-chat-react';
import {
    IonPage,
    useIonViewWillEnter,
} from '@ionic/react';
import { StreamChat } from 'stream-chat';
import axios from 'axios';
import Auth from './Auth';

import 'stream-chat-react/dist/css/index.css';

let chatClient: any;

function useInput(type: string) {
    const [value, setValue] = useState('');
    const input = (
        <input
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            type={type}
        />
    );
    return [value, input];
}

function Tab2() {
    const [channel, setChannel] = useState(undefined);
    const [auth, setAuth] = useState('login');
    const [firstName, firstNameInput] = useInput('text');
    const [lastName, lastNameInput] = useInput('text');
    const [email, emailInput] = useInput('text');
    const [password, passwordInput] = useInput('password');

    async function login() {
        const payload = {
            name: {
                first: firstName,
                last: lastName,
            },
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                'http://localhost:8080/v1/auth/init',
                payload
            );

            const { apiKey, user, token } = response.data;
            chatClient = new StreamChat(apiKey);
            await chatClient.setUser(
                {
                    id: user._id,
                    name: user.name.first,
                    role: 'admin',
                },
                token
            );

            const channel = chatClient.channel('messaging', 'General');
            await channel.watch();

            setChannel(channel);
        } catch (err) {
            console.log(err);
        }
    }

    if (channel) {
        return (
            <IonPage>
                <Chat client={chatClient} theme="messaging light">
                    <ChannelList
                        options={{
                            state: true,
                        }}
                        filters={{
                            type: 'messaging',
                        }}
                        List={ChannelListTeam}
                    />
                    <Channel channel={channel}>
                        <Window>
                            <ChannelHeader />
                            <MessageList Message={MessageTeam} />
                            <MessageInput focus />
                        </Window>
                        <Thread Message={MessageTeam} />
                    </Channel>
                </Chat>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Auth
                auth={auth}
                setAuth={setAuth}
                firstNameInput={firstNameInput}
                lastNameInput={lastNameInput}
                emailInput={emailInput}
                passwordInput={passwordInput}
                login={login}
            />
        </IonPage>
    );
}

export default Tab2;
