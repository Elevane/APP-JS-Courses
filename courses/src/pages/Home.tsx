import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

import {
  IonButton
} from '@ionic/react';

import axios from 'axios';
const  API_KEY  =  "c65d00b4aec24e1bb37e9ae9dd81d8cd";
const  URL  =  'http://127.0.0.1:8000/article/list';

const fetchArticles = () => {

  return axios({
    url: URL,
    method: 'get'
  }).then(response => {

    console.log("qzd");
    return response.data;
  })
};
const HomePage: React.FunctionComponent = () => {

  const [articles, setArticles] = React.useState([]);
  const items: any[] = [];

  React.useEffect(() => {

    fetchArticles().then(data => setArticles(data.articles));

  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" >
        <IonList >

          {
            articles.map(a => {

              return (
                <IonItem>
                  {a['nom']}
                  <IonButton slot="end">Read</IonButton>
                </IonItem>
              );
            })
          }

        </IonList>
      </IonContent>
    </>
  );
};

export default HomePage;
