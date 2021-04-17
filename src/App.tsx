import React from 'react';
import { IonApp, IonLabel, IonList, IonItem, IonInput, IonToggle, IonRadio, IonCheckbox,
  IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
import BasicSearchBar from "./components/BasicSearchBar";
import CardExamples from "./components/CardExamples";

const App: React.FC = () => (
  <IonApp>
      {/*-- Search Bar --*/}
      <BasicSearchBar> </BasicSearchBar>

      {/*-- User Card --*/}
      <CardExamples> </CardExamples>

    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonApp>
);

export default App;



export const ListExample: React.FC = () => (
    <IonContent>

    </IonContent>
);