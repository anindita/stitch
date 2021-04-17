import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonCard,
    IonToolbar,
    useIonViewWillEnter,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonCardContent, IonThumbnail, IonImg, IonAvatar
} from '@ionic/react';
import React, {useState} from 'react';
import './InfiniteScroll.css';

const InfiniteScroll: React.FC = () => {

    const [images, setImages] = useState<string[]>([]);

    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

    async function fetchData() {
        const url: string = 'https://dog.ceo/api/breeds/image/random/3';

        const res: Response = await fetch(url);
        res
            .json()
            .then(async (res) => {
                if (res && res.message && res.message.length > 0) {
                    let message = res.message.map(function (k: any, i: string | number) {
                        return [k, res.message[i]];
                    });
                    setImages([...images, ...message]);
                    // If fewer than 10 doggos, disable infinite scroll
                    setDisableInfiniteScroll(res.message.length < 3);
                } else {
                    setDisableInfiniteScroll(true);
                }
            })
            .catch(err => console.error(err));
    }

    useIonViewWillEnter(async () => {
        await fetchData();
    });

    async function searchNext($event: CustomEvent<void>) {
        await fetchData();

        ($event.target as HTMLIonInfiniteScrollElement).complete();
    }

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
                {images.map((item: any, i: number) => {
                    return <IonCard key={`${i}`} routerLink="/user1/" class={"tailor-card"}>
                        <IonCardHeader>
                            <IonCardTitle>{item[1]}</IonCardTitle>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <IonImg src={item[0]} />
                                </IonThumbnail>
                                <IonLabel>0.{i} miles</IonLabel>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent>
                            We do repairs, adjustments...
                        </IonCardContent>
                    </IonCard>
                })}

                <IonInfiniteScroll threshold="100px" disabled={disableInfiniteScroll}
                                   onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent
                        loadingText="Loading more good tailors near you...">
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
};

export default InfiniteScroll;