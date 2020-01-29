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
const  URL  =  `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const fetchArticles = () => {

  return axios({
    url: URL,
    method: 'get'
  }).then(response => {

    console.log(response);
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
        <IonList color="primary">

          {
            articles.map(a => {

              return (
                <IonItem>
                  {a['title']}
                  <IonButton href={a['url']} color="primary" slot="end">Read</IonButton>
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
