import React from 'react';
import {
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonContent,
    IonPage,
    IonItem,
    IonAvatar,
    IonTitle,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonCard, IonCardHeader, IonCardTitle, IonIcon, IonButton, IonCardContent
} from '@ionic/react';

type Item = {
    src: string;
    text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }]
export const StorePage: React.FC = () => (
    <IonPage>
        <IonContent>
            <IonItem>
                <IonAvatar slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                </IonAvatar>
                <IonTitle size="large" slot="start">Radhika's Boutique</IonTitle>
            </IonItem>
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
                <IonCard>
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