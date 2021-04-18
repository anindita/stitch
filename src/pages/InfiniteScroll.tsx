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
import BasicSearchBar from "../components/BasicSearchBar";
import {flower, send, star} from "ionicons/icons";

const InfiniteScroll: React.FC = () => {

    const [images, setImages] = useState<string[][]>([]);

    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

    async function fetchData() {
        const tailors = [["https://www.thecreativefolk.com/wp-content/uploads/2020/04/Yarn-Vs-Wool.jpg", "Sally's Knitwear", "Repairs Only", "4.5"],
            ["https://images.immediate.co.uk/production/volatile/sites/32/2019/08/Sewing-machine-tips-1d611b4.jpg?quality=90&resize=620,413", "Sew What?", "Repairs, Alterations and Upcycling", "3.6"],
            ["https://cdn.shopify.com/s/files/1/2447/5025/articles/Afghan-wedding-shawl-detail-35w2_1024x1024.jpg?v=1579278919", "Desi Alterations", "Alterations and Formal Attire", "4.1"],
            ["https://slowflowersjournal.com/wp-content/uploads/2017/04/IMG_0014-1024x1024.jpg", "Radhika's Boutique", "Repairs and Upcycling", "4.9"],
            ["https://cdn.shopify.com/s/files/1/0221/1571/3120/products/Knitted_Blanket_kit_Knit_One_kits_440x.jpg?v=1600696522", "Jodie's Patchworks", "Alterations, Upcycling and Masks", "3.8"],
            ["https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/640x540/54ff6adf88ead-peplum.jpg", "Upcycle Anything!", "Upcycling Only", "4.7"],
            ["https://i.pinimg.com/600x315/41/c8/c7/41c8c7291e9623e54b6e18e33480ad41.jpg", "Mend and Make Do", "Repairs Only", "Upholstery Only", "3.2"]
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
                    <IonIcon style={{"--margin-right": "10px"}} slot="end" icon={send} > </IonIcon>
                </IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size={"11"}>
                            <IonSearchbar placeholder={"Filter by service"}> </IonSearchbar>
                        </IonCol>
                        <IonCol>
                            <IonIcon class={"filter"} name={"menu-outline"} size={"20"} color="primary"> </IonIcon>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonHeader>
            <IonContent>
                {images.map((item: any, i: number) => {
                    return <IonCard key={`${i}`} routerLink="/user1/" class={"tailor-card"}>
                        <IonImg src={item[0]} />
                        <IonCardHeader>
                            <IonCardTitle color={"#ffc409"}>{item[1]}</IonCardTitle>
                            <IonCardSubtitle>{(i+2*i+1)/10.0} miles</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent style={{"--padding-bottom": "10px"}}>
                            <IonIcon icon={star} slot={"start"} color="primary"> </IonIcon> {item[3]}
                            <p>{item[2]}</p>
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