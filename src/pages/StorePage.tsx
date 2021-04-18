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
    IonCard, IonCardHeader, IonCardContent, IonHeader, IonIcon
} from '@ionic/react';
import './StorePage.css';
import {flower, heart, send, sendOutline, star} from "ionicons/icons";

type Item = {
    src: string;
    text: string;
};
const items: Item[] = [{ src: '/assets/images/store1.jpg', text: 'One from my latest upscaled dress collection!' },
                        { src: '/assets/images/store2.jpg', text: 'Custom shorts for the summer' },
                        { src: '/assets/images/store3.jpg', text: 'All of my tools :)' },
                         { src: '/assets/images/store4.jpg', text: 'Hats and scarfs revamped for winter' }]

export const StorePage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar class={"scroll-title"}>
                <IonTitle>Radhika's Boutique</IonTitle>
                <IonAvatar slot="start">
                    <img src="https://slowflowersjournal.com/wp-content/uploads/2017/04/IMG_0014-1024x1024.jpg" alt={""}/>
                </IonAvatar>
                <IonIcon style={{"--margin-right": "10px"}} slot="end" icon={send} color={"black"}> </IonIcon>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonItem class={"store-description"}>
                I am a Fashion Student based in London, feel free to check out
                some of my work below!
            </IonItem>
            <IonRow>
                <IonCol>
                    {getCatImage(items[0])}
                </IonCol>
                <IonCol>
                    {getCatImage(items[1])}
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    {getCatImage(items[2])}
                </IonCol>
                <IonCol>
                    {getCatImage(items[3])}
                </IonCol>
            </IonRow>
        </IonContent>
    </IonPage>
);

function getCatImage(image: Item) {
    return <>
        <IonCard class={"store-card"}>
            <IonCardHeader>
                <IonThumbnail class={"store-pic"}>
                    <IonImg src={image.src}/>
                </IonThumbnail>
            </IonCardHeader>
            <IonCardContent>
                {/*<IonIcon icon={heart}> slot={"start"} </IonIcon>*/}
                {image.text}
            </IonCardContent>
        </IonCard>
    </>;
}

export default StorePage