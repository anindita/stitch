import React from 'react';
import {
    IonRow,
    IonCol,
    IonContent,
    IonPage,
    IonItem,
    IonAvatar,
    IonTitle,
    IonThumbnail,
    IonImg,
    IonToolbar,
    IonCard, IonCardHeader, IonCardContent, IonHeader
} from '@ionic/react';
import './StorePage.css';

type Item = {
    src: string;
    text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }]
export const StorePage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={"store-title"}>
                <IonAvatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                </IonAvatar>
                <IonTitle size="large" slot="start">Radhika's Boutique</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonItem>
                Welcome to my page! I am a Fashion Designer in London, check out my work below.
            </IonItem>
            <IonRow>
                <IonCol>
                    {getCatImage()}
                </IonCol>
                <IonCol>
                    {getCatImage()}
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    {getCatImage()}
                </IonCol>
                <IonCol>
                    {getCatImage()}
                </IonCol>
            </IonRow>
        </IonContent>
    </IonPage>
);

function getCatImage() {
    return <>
        {items.map((image, i) => (
            <IonItem key={i}>
                <IonCard class={"store-card"}>
                    <IonCardHeader>
                        <IonThumbnail>
                            <IonImg src={image.src}/>
                        </IonThumbnail>
                    </IonCardHeader>
                    <IonCardContent>
                        {image.text}
                    </IonCardContent>
                </IonCard>
            </IonItem>
        ))}
    </>;
}

export default StorePage