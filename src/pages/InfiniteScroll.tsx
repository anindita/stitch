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
    IonCardContent,
    IonThumbnail,
    IonImg,
    IonAvatar,
    IonCardSubtitle,
    IonSearchbar,
    IonIcon,
    IonButtons,
    IonButton,
    IonRow, IonCol, IonGrid
} from '@ionic/react';
import React, {useState} from 'react';
import './InfiniteScroll.css';
import {send} from "ionicons/icons";

const InfiniteScroll: React.FC = () => {

    const [images, setImages] = useState<string[][]>([]);

    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

    async function fetchData() {
        const tailors = [["https://www.thecreativefolk.com/wp-content/uploads/2020/04/Yarn-Vs-Wool.jpg", "Sally's Knitwear", "Repairs Only"],
            ["https://images.immediate.co.uk/production/volatile/sites/32/2019/08/Sewing-machine-tips-1d611b4.jpg?quality=90&resize=620,413", "Sew What?", "Repairs, Alterations and Upcycling"],
            ["https://cdn.shopify.com/s/files/1/2447/5025/articles/Afghan-wedding-shawl-detail-35w2_1024x1024.jpg?v=1579278919", "Desi Alterations", "Alterations and Formal Attire"],
            ["https://slowflowersjournal.com/wp-content/uploads/2017/04/IMG_0014-1024x1024.jpg", "Radhika's Boutique", "Repairs and Upcycling"],
            ["https://cdn.shopify.com/s/files/1/0221/1571/3120/products/Knitted_Blanket_kit_Knit_One_kits_440x.jpg?v=1600696522", "Jodie's Patchworks", "Alterations, Upcycling and Masks"],
            ["https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/640x540/54ff6adf88ead-peplum.jpg", "Upcycle Anything!", "Upcycling Only"],
            ["https://i.pinimg.com/600x315/41/c8/c7/41c8c7291e9623e54b6e18e33480ad41.jpg", "Mend and Make Do", "Repairs Only", "Upholstery Only"]
        ]

        setImages([...images, ...tailors])
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
            <IonHeader className={"ion-no-border"}>
                <IonToolbar class={"scroll-title"}>
                    <IonThumbnail class={"logo-image"} slot="start">
                        <img src="/assets/icon/logo.png"  alt={""}/>
                    </IonThumbnail>
                    <IonIcon style={{"--margin-right": "10px"}} slot="end" icon={send}> </IonIcon>
                </IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size={"11"}>
                            <IonSearchbar placeholder={"Filter by service"}> </IonSearchbar>
                        </IonCol>
                        <IonCol>
                            <IonIcon class={"filter"} name={"menu-outline"} size={"largest"} color="primary"> </IonIcon>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonHeader>
            <IonContent>
                {images.map((item: any, i: number) => {
                    return <IonCard key={`${i}`} routerLink="/user1/" class={"tailor-card"}>
                        <IonCardHeader>
                            <IonItem>
                                <IonLabel color={"#ffc409"}><h2>{item[1]}</h2><p>{(i+2*i+1)/10.0} miles</p></IonLabel>
                                <IonThumbnail slot="start" style={{"--size": 20}}>
                                    <IonImg src={item[0]} />
                                </IonThumbnail>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent color={"#ffc409"}>
                            {item[2]}
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