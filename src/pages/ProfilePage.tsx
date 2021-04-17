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
    IonHeader
} from '@ionic/react';
import {mail, people, star} from "ionicons/icons";

import './ProfilePage.css';

export const ProfilePage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={"profile-title"}>
                <IonAvatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                <IonTitle slot="start" >Rasika Navarange</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            {/*-- Items with badge on right --*/}
            <IonItem class={"profile-item"}>
                <IonIcon icon={mail} color="danger" slot="start" />
                <IonLabel>Current Orders</IonLabel>
                <IonBadge class={"profile-badge"} color="danger" slot="end">6</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={people} color="secondary" slot="start" />
                <IonLabel>Followers</IonLabel>
                <IonBadge class={"profile-badge"} color="secondary" slot="end">203</IonBadge>
            </IonItem>
            <IonItem class={"profile-item"}>
                <IonIcon icon={star} color="success" slot="start" />
                <IonLabel>Thimble points</IonLabel>
                <IonBadge class={"profile-badge"} color="success" slot="end">200</IonBadge>
            </IonItem>
        </IonContent>
    </IonPage>
);

export default ProfilePage