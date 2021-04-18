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
    MessageInput, MessageSimple,
} from 'stream-chat-react';
import {
    IonAvatar,
    IonContent, IonFooter,
    IonHeader,
    IonIcon,
    IonPage, IonTitle, IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import { StreamChat } from 'stream-chat';
import axios from 'axios';
import Auth from './Auth';
import './Tab2.css';

import 'stream-chat-react/dist/css/index.css';
import {flower} from "ionicons/icons";
import ReactTextareaAutocomplete from "stream-chat-react/built/types/src/components/AutoCompleteTextarea/Textarea";

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

            const channel = chatClient.channel('messaging', '1');
            await channel.watch();

            setChannel(channel);
        } catch (err) {
            console.log(err);
        }
    }

    if (channel) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar class={"scroll-title"}>
                        <IonTitle>Stitch</IonTitle>
                        <IonAvatar slot="start">
                            <img src="/assets/images/icon.png"  alt={""}/>
                        </IonAvatar>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <Chat client={chatClient} >
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
                                <MessageList Message={CustomMessage} />
                                <MessageInput focus />
                            </Window>
                            <Thread Message={CustomMessage} />
                        </Channel>
                    </Chat>
                </IonContent>
                <IonFooter> </IonFooter>
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

const CustomMessage = (props: any) => {

    if (!(props.message.text === '')) {
        if (props.message.user.name === 'Radhika') {
            return (
                <div>
                    <b style={{marginRight: '4px', color: "#e0ac08"}}>{props.message.user.name}</b> {props.message.text}
                </div>
            )
        } else {
            return (
                <div>
                    <b style={{marginRight: '4px'}}>{props.message.user.name}</b> {props.message.text}
                </div>
            )
        }
    } else {
        return (
            <div>
                <div>
                    <b style={{ marginRight: '4px', color:"#e0ac08"}}>{props.message.user.name}</b>
                </div>
                <div>
                    <img src={props.message.attachments[0].image_url} alt="img" height={200} width={200} />
                </div>
            </div>
        )
    }
}

export default Tab2;