import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
import React, {useState} from "react";

export const BasicSearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>IonSearchBar Example</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>Default Searchbar</p>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    Search Text: {searchText ?? '(none)'}
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default BasicSearchBar;
