import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import {flower} from 'ionicons/icons';

export const CardExamples: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CardExamples</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Radhika's Boutique & Repairs</IonCardTitle>
                        <IonItem>
                            <IonIcon icon={flower} slot="start" />
                            <IonLabel>1.2 miles</IonLabel>
                            <IonButton fill="outline" slot="end">View</IonButton>
                        </IonItem>
                    </IonCardHeader>
                    <IonCardContent>
                        We do repairs, adjustments...
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CardExamples