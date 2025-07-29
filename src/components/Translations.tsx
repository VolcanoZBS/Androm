import React from "react";
import { Building2, Wrench, Users2, Phone, Mail, Shield, Hammer, Lightbulb, PaintBucket, CheckCircle2, Trophy, Clock, Target } from 'lucide-react';

const translations = {
  nav: {
    services: 'Servicii',
    about: 'Despre Noi',
    projects: 'Proiecte',
    contact: 'Contact',
  },
  hero: {
    title: '',
    subtitle: 'Partenerul dvs. de încredere pentru soluții complete în construcții - de la construcții noi până la renovări, aducem expertiză și fiabilitate în fiecare proiect.',
    cta: 'Consultație Gratuită',
  },
  services: {
    title: 'Serviciile Noastre',
    items: [
      { title: 'Construcții Noi', desc: 'Servicii complete de construcții pentru proiecte rezidențiale și comerciale.' },
      { title: 'Reabilitare Termică', desc: 'Soluții eficiente energetic pentru îmbunătățirea performanței termice a clădirii.' },
      { title: 'Reparații și Întreținere', desc: 'Servicii profesionale de reparații pentru toate tipurile de probleme ale clădirilor.' },
      { title: 'Instalații Electrice', desc: 'Instalare și întreținere completă a sistemelor electrice.' },
      { title: 'Renovări Interioare', desc: 'Servicii complete de renovare pentru apartamente și case.' },
      { title: 'Soluții Personalizate', desc: 'Soluții de construcții adaptate cerințelor unice ale proiectului.' },
    ],
  },
  about: {
    title: 'Despre Noi',
    subtitle: 'Experiență și Profesionalism în Construcții',
    description: 'Cu o experiență de peste 15 ani în domeniul construcțiilor, ANDROM CONSTRUCTII s-a remarcat prin calitatea serviciilor și angajamentul față de satisfacția clienților. Echipa noastră de profesioniști este dedicată excelenței în fiecare proiect pe care îl realizăm.',
    stats: [
      { value: '15+', label: 'Ani de Experiență' },
      { value: '500+', label: 'Proiecte Finalizate' },
      { value: '100%', label: 'Clienți Mulțumiți' },
    ],
    values: [
      { 
        title: 'Misiunea Noastră',
        desc: 'Să oferim servicii de construcții de cea mai înaltă calitate, respectând termenele și bugetele stabilite.',
        icon: Target
      },
      {
        title: 'Experiență Dovedită',
        desc: 'Peste 15 ani de experiență în domeniul construcțiilor și renovărilor.',
        icon: Trophy
      },
      {
        title: 'Punctualitate',
        desc: 'Respectăm cu strictețe termenele de execuție agreate pentru fiecare proiect.',
        icon: Clock
      }
    ]
  },
  projects: {
    title: 'Proiectele Noastre',
    subtitle: 'Portofoliu de Lucrări',
    items: [
      {
        title: 'Reabilitare termică',
        category: 'Bd. Tineretului, Bucuresti',
        image: '/Bloc Tineretului .jpg',
        description: 'Reabilitare termică a unui bloc cu 2 scări și 120 de apartamente, terasa blocului, balcoane.',
      },
      {
        title: 'Renovare Clădire Istorică',
        category: 'Renovare',
        image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80',
        description: 'Restaurare completă a unei clădiri istorice din centrul orașului, cu păstrarea elementelor arhitecturale originale.',
      },
      {
        title: 'Centru Comercial Modern',
        category: 'Construcție Comercială',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        description: 'Centru comercial modern cu 30 de spații comerciale, parcare și facilități de ultimă generație.',
      },
    ],
  },
  whyUs: {
    title: 'De Ce Să Ne Alegeți',
    items: [
      { title: 'Licențiați și Asigurați', desc: 'Complet licențiați și asigurați pentru liniștea dvs.' },
      { title: 'Echipă de Experți', desc: 'Profesioniști calificați cu ani de experiență în industrie.' },
      { title: 'Calitate Garantată', desc: 'Garantăm calitatea lucrărilor noastre.' },
    ],
  },
  contact: {
    title: 'Contactați-ne',
    getInTouch: 'Luați Legătura',
    form: {
      name: 'Numele Dvs.',
      email: 'Email-ul Dvs.',
      message: 'Mesajul Dvs.',
      send: 'Trimite Mesaj',
    },
  },
  footer: {
    rights: '© 2025 ANDROM CONSTRUCTII. Toate drepturile rezervate.',
  },
};

export default translations;
