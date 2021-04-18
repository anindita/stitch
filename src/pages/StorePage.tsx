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
    IonCard, IonCardHeader, IonCardContent, IonHeader, IonIcon, IonButton
} from '@ionic/react';
import {heart, send, star} from "ionicons/icons";
import './StorePage.css';

type Item = {
    src: string;
    text: string;
    likes: number;
};
const items: Item[] = [{ src: '/assets/images/store1.jpg', text: 'One from my latest upscaled dress collection!', likes: 33},
                        { src: '/assets/images/store2.jpg', text: 'Custom shorts for the summer', likes: 14},
                        { src: '/assets/images/store3.jpg', text: 'All of my tools :)', likes: 22 },
                         { src: '/assets/images/store4.jpg', text: 'Hats and scarfs revamped for winter', likes: 53}]

export const StorePage: React.FC = () => (
    <IonPage>
        <IonHeader className={"ion-no-border"}>
            <IonToolbar class={"store-title"}>
                <IonAvatar slot={"start"}>
                    <img src="https://slowflowersjournal.com/wp-content/uploads/2017/04/IMG_0014-1024x1024.jpg" alt={""}/>
                </IonAvatar>
                <IonTitle slot={"start"}>Radhika's Boutique</IonTitle>
                <IonIcon slot={"end"} icon={send} color={"black"} > </IonIcon>
            </IonToolbar>
            <IonItem class={"store-description"}>
                I am a Fashion Student based in London, feel free to check out
                some of my work below!
            </IonItem>
        </IonHeader>
        <IonContent>
            <IonRow>
                <IonCol>
                    {getPostImage(items[0])}
                </IonCol>
                <IonCol>
                    {getPostImage(items[1])}
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    {getPostImage(items[2])}
                </IonCol>
                <IonCol>
                    {getPostImage(items[3])}
                </IonCol>
            </IonRow>
        </IonContent>
    </IonPage>
);

function getPostImage(image: Item) {
    return <>
        <IonCard class={"store-card"}>
            <IonCardHeader class={"store-card-content"}>
                <IonThumbnail class={"store-pic"}>
                    <IonImg src={image.src}/>
                </IonThumbnail>
            </IonCardHeader>
            <IonCardContent style={{"--padding-bottom": "10px"}}>
                <IonIcon icon={heart} slot={"start"} color="danger"> </IonIcon> {image.likes}
                <p>{image.text}</p>
            </IonCardContent>
        </IonCard>
    </>;
}

export default StorePage