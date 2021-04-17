import React from 'react';
import {IonAvatar, IonItem, IonLabel, IonContent, IonTitle, IonBadge, IonIcon, IonPage} from '@ionic/react';
import {mail, people, star} from "ionicons/icons";

export const ProfilePage: React.FC = () => (
    <IonPage>
    <IonContent>
        <IonItem>
            <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonTitle size="large" slot="start" >Rasika Navarange</IonTitle>
        </IonItem>

        {/*-- Items with badge on right --*/}
        <IonItem>
            <IonIcon icon={mail} slot="start" />
            <IonLabel>Current Orders</IonLabel>
            <IonBadge slot="end">6</IonBadge>
        </IonItem>
        <IonItem>
            <IonIcon icon={people} slot="start" />
            <IonLabel>Followers</IonLabel>
            <IonBadge color="secondary" slot="end">203</IonBadge>
        </IonItem>
        <IonItem>
            <IonIcon icon={star} slot="start" />
            <IonLabel>Thimble points</IonLabel>
            <IonBadge color="success" slot="end">200</IonBadge>
        </IonItem>
    </IonContent>
    </IonPage>
);

export default ProfilePage