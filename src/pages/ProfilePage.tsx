import React from 'react';
import {
    IonAvatar,
    IonItem,
    IonToolbar,
    IonLabel,
    IonContent,
    IonTitle,
    IonBadge,
    IonIcon,
    IonPage,
    IonHeader, IonThumbnail
} from '@ionic/react';
import {mail, people, send, settings, star} from "ionicons/icons";

import './ProfilePage.css';

export const ProfilePage: React.FC = () => (
    <IonPage>
        <IonHeader className={"ion-no-border"}>
            <IonToolbar class={"profile-title"}>
                <IonAvatar slot="start">
                    <img src="/assets/images/person.png"  alt={""}/>
                </IonAvatar>
                <IonTitle slot="start" >Rasika Navarange</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            {/*-- Items with badge on right --*/}
            <IonItem class={"profile-item"}>
                <IonIcon icon={mail} color="primary" slot="start" />
                <IonLabel>Current Orders</IonLabel>
                <IonBadge class={"profile-badge"} color="primary" slot="end">12</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={people} color="secondary" slot="start" />
                <IonLabel>Followers</IonLabel>
                <IonBadge class={"profile-badge"} color="secondary" slot="end">203</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={people} color="danger" slot="start" />
                <IonLabel>Following</IonLabel>
                <IonBadge class={"profile-badge"} color="danger" slot="end">318</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={star} color="success" slot="start" />
                <IonLabel>Thimble points</IonLabel>
                <IonBadge class={"profile-badge"} color="success" slot="end">260</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={settings} color="tertiary" slot="start" />
                <IonLabel>Settings</IonLabel>
                {/*<IonBadge class={"profile-badge"} color="tertiary" slot="end">2</IonBadge>*/}
            </IonItem>
        </IonContent>
    </IonPage>
);

export default ProfilePage