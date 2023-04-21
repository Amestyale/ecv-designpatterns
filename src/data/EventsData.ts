import Item from "../classes/Item";

export default 
[
    {
        id: 1001,
        title: 'Les pirates qui piquent, les PICPIRATES',
        text: 'Des coups résonnent sur la coque du vaisseau, comme si on vous balançaient des mini-astéroïdes sur la figure.<br/><br/>"OUVREZ OU ON VOUS FAIT TOMBER" beugle un mégaphone dehors.<br/><br/>Inquiets mais soucieux de ne pas sombrer dans cet espace peu attrayant, vous leur ouvrez la porte. Ils vous réclament avec véhémence et postillons une sacré somme d\'argent',
        options: [
            {
                name : "Refuser et se bastonner", 
                description : "",
                consequences: [{type: "player-data", name: 'health', modifier: '-25'}]
            },
            {
                name : "Leur donner ce qu'ils demandent", 
                description : "",
                consequences: [
                  {type: "player-data", name: 'money', modifier: '-50'},
                  {type: "player-item", item: 'biscuits_durs', modifier: -1}
                ]
                

            },
            {
              name : "On est 4 ? Et si on jouait au Kems ?", 
              description : "",
              consequences: [{type: "player-data", name: 'money', modifier: '50'}]
            },
        ],
        optionFacade : "buttons"
    },
    {
        id: 1002,
        title: 'Une avarie sur le vaisseau',
        text: 'Le vaisseau commence à vibrer fortement et les lumières clignotent. Une alarme stridente se déclenche, indiquant une avarie dans la salle des machines. Vous devez agir rapidement pour réparer les dégâts avant que le vaisseau ne soit gravement endommagé.',
        options: [
            {
              name : "Se précipiter vers la salle des machines pour réparer la panne",
              description : "",
              consequences: [{type: "player-data", name: 'health', modifier: '-10'}]
            },
            {
              name : "Envoyer un robot pour réparer la panne",
              description : "",
              consequences: [{type: "player-item", item: 'robot_reparation', modifier: -1}]
            },
            {
              name : "Ignorer l'alarme et continuer à vaquer à vos occupations",
              description : "",
              consequences: [{type: "ship-data", name: 'health', modifier: '-10'}]
            },
        ],
        optionFacade : "buttons"
    },     
    {
        id: 1003,
        title: 'Une rencontre extraterrestre',
        text: 'Un signal inconnu est détecté sur les scanners. Vous décidez de vous approcher pour enquêter. Soudain, un vaisseau spatial émerge de l\'obscurité et s\'approche de vous. Des extraterrestres apparaissent sur l\'écran de communication. Ils ont besoin d\'aide pour réparer leur vaisseau endommagé.',
        options: [
            {
              name : "Accepter d'aider les extraterrestres",
              description : "",
              consequences: [{type: "player-data", name: 'money', modifier: '25'}]
            },
            {
              name : "Refuser d'aider les extraterrestres et poursuivre votre chemin",
              description : "",
              consequences: []
            },
            {
              name : "Tenter d'attaquer le vaisseau extraterrestre",
              description : "",
              consequences: [{type: "player-data", name: 'health', modifier: '-10'}, {type: "player-data", name: 'money', modifier: '-10'}]
            },
        ],
        optionFacade : "buttons"
    },
    {
        id: 1005,
        title: 'Un trou noir',
        text: 'Vous vous approchez d\'un trou noir et vous vous rendez compte que votre vaisseau est attiré par sa force gravitationnelle. Vous devez prendre une décision rapide pour éviter d\'être aspiré dans le trou noir.',
        options: [
            {
              name : "Utiliser les moteurs pour sortir de la zone d'attraction du trou noir",
              description : "",
              consequences: [{type: "ship-data", name: 'health', modifier: '-5'}, {type: "player-data", name: 'health', modifier: '-10'}]
            },
            {
              name : "Utiliser le champ de force personnel tx-4670 pour résister à la force gravitationnelle",
              description : "",
              consequences: [{type: "player-item", item: 'champ_de_force_personnel_tx_4670', modifier: -1}]
            },
        ],
        optionFacade : "buttons"
        },
]