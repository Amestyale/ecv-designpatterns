let RoomData = 
[
    {
        id: 10,
        title: 'La banquise',
        text: 'Décidément, c’est bien vide ici.<br>Et je ne vous parle pas du silence, l’air froid souffle et siffle autour du vaisseau.<br>Vous n’êtes pas vraiment sûr que fouiller les alentours servira à quoi que ce soit…',
        options: [
            {
                name : "Fouiller les alentours", 
                description : "Après deux heures de fouille à des températures glaciales, la seule chose que vous avez trouvée est une engelure à l’une de vos extrémités.<br>-10 de santé",
                consequences: [{type: "player-data", name: 'health', modifier: '-10'}]
            },
            {
                name : "Repartir immédiatement", 
                description : "Vous décidez de ne pas prendre de risque aujourd’hui.<br>Votre vaisseau repart juste dix minutes après son arrivée.<br>Il ne s'est rien passé.",
                consequences: []
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 11,
        title: 'Ville morte',
        text: 'Après quelques heures de marches, vous tombez sur les restes d’une étrange métropole. Des bâtiments fin et lisse sortent de la glace tels des monolithes noirs et silencieux.<br>Vous remarquez quelques entrées qui de par leur obscurité se fonde presque à la surface de ces mornes gratte-ciel.<br>Seul la neige s’engouffrant dedans permet de faire la différence…',
        options: [
            {
                name : "Entrer dans un bâtiment", 
                description : "L’intérieur de la structure est extrêmement sombre, l’endroit sent la poussière et la solitude.<br>Soudainement, un soupir brise le silence et par la même occasion le peu de courage qu’il vous restait et ce qui vous sert de jambes vous précipite vers la sortie.<br>Vous ne soufflez qu’une fois de retour en orbite, vous n’avez toujours pas remarqué que vous n’êtes plus vraiment seul.e dans le vaisseau.<br>Vous vous êtes fait un ami suspect…",
                consequences: [{type: "player-data", name: 'health', modifier: '-20'}]
            },
            {
                name : "Visiter le centre de la ville", 
                description : "Vous finissez par atteindre une ouverture aux milieux des rues désertes, les restes de ce qui aurait pu autrefois être la place centrale s’offre à vous.<br>Une gigantesque fontaine noire et luisante continue de couler doucement malgré le froid, le liquide visqueux et sombre n’ayant pas gelé.<br>Mais. Il s’agit d’essence ! Ces anciennes civilisations perdues ont vraiment des goûts douteux…<br>+3 fuel!",
                consequences: [{type: "ship-data", name: 'fuel', modifier: '3'}]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 20,
        title: 'Plus vrai que nature',
        text: 'Décidément, c’est plus que bien fait, on se laisserait presque prendre au jeu !<br>L’environnement, les gens, les animaux, tous est parfaitement comme sur terre.<br>Après une balade d’une vingtaine de minutes, vous finissez par reconnaitre quelque chose…',
        options: [
            {
                name : "Une station essence", 
                description : "Incroyable une station essence fonctionnelle sur une copie parfaite de la terre au beau milieu d’un système astrale totalement différent du système solaire ! Qui l’aurait cru ?<br>Vous décidez de célébrer l’occasion en faisant un petit plein, personne ne semble surpris de vous voir remplir votre vaisseau en plein jour.<br>-20 crédits +1 fuel",
                consequences: [
                  {type: "player-data", name: 'money', modifier: -2000},
                  {type: "ship-data", name: 'fuel', modifier: '10'}]
            },
            {
                name : "La maison de votre grand-mère ?", 
                description : "Après avoir toqué à la porte, votre grand-mère (ou une copie parfaite d’elle) ouvre la porte.<br>*Et bien mon trésor ? On joue au cosmonaute ?*, dit-elle. *C’est adorable mon poussin, tiens, j'ai un petit quelque chose pour toi, mais ne vas pas le dire à tes parents !*<br>Elle vous glisse discrètement un billet avant de refermer la porte. C’est définitivement l’événement le plus bizarre de la journée…<br>+20 crédits",
                consequences: [{type: "player-data", name: 'money', modifier: '20'}]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 21,
        title: 'Des mimiques, partout des mimiques !',
        text: 'Vous décidez de vous asseoir dans un parc pour observer un peu ce qu’il se passe.<br>Le regard des gens est franchement insistant pour ne pas dire… carnassier ?<br>Vous continuer de scanner les alentours quand vos yeux croisent ceux d’une fleur, puis ceux d’un arbre, puis celui d’un nuage.<br>Oh non ! Ce n’est pas la terre ! C’est une mimique de la terre !<br>Soudainement, le banc sur lequel vous êtes assis vous mord et ne vous lâche plus. Vous devez agir vite !',
        options: [
            {
                name : "Utiliser la faiblesse des mimiques", 
                description : "Vous décidez de distraire le banc avec ce que la chose préférée des mimiques même avant la chaire fraiche… L’argent !<br>Vous lancez l’intégralité du contenu de vos poches en l’air dans une pluie de pièce et de crédits. Les mimiques mordent à l’hameçon et sont absolument émerveillées par votre performance, vous en profitez pour vous enfuir.<br>-25 crédits",
                consequences: [{type: "player-data", name: 'money', modifier: '-25'}]
            },
            {
                name : "Faire passer un sale quart d’heure au banc", 
                description : "Vraiment ? Vous avez déjà essayé de cogner un banc avec vos poings ?<br>Ces bestiaux sont bien plus solides que ce que vous pensiez.<br>Vous réussissez quand même à lui donner un œil au beurre noir en échange d’une partie de votre pantalon et de ce qui pourrait être appelé votre jambe gauche…<br>-30 de santé",
                consequences: [{type: "player-data", name: 'health', modifier: '-30'}]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 30,
        title: 'Globalgosaur, Votre supermarché stratyn-nien',
        text: 'Vous faites votre entrée dans un magasin vraisemblablement propre et parfaitement normal, si ce n’est pour la sélection d’items disponible sur les différents rayons et étalages.<br>Un caissier à mi-chemin entre un saumon et un figuier vous fait un léger salut de sa nageoire.<br>Le bruit épouvantable qu’il s’efforçât de transmettre après ça veut probablement dire bienvenue...<br>Allez-vous achetez quelque chose ou juste faire un tour des rayons ?',
        options: [
            {
                name : "Un étrange boitier noir affublé d’une bandoulière", 
                description : "Après une lecture attentive du manuel d’utilisation, vous vous rendez-compte qu’il s’agit d’un champ de force miniature.<br>Vous vous sentez tout de suite plutôt fier de votre achat et repartez satisfait.<br>-50 crédits, +1 Champ de force personnel",
                consequences: [{type: "player-data", name: 'money', modifier: '-50'},{type: "ship-data", name: 'shield', modifier: '2'}]
            },
            {
                name : "Un pistolet un plastique", 
                description : "Ce petit pistolet en plastique que vous venez de trouver dans la section enfant du magasin vous a curieusement rappelé votre enfance.<br>À la sortie du magasin, vous vous amusez à faire semblant de tirer avant de couper un panneau publicitaire en deux d’un coup de laser.<br>Eh bien, il faut croire que les normes galactiques en matière de jouet sont bien lax en ce moment !<br>-20 crédits, +1 Pistolet laser",
                consequences: [{type: "player-data", name: 'money', modifier: '-20'},{type: "ship-data", name: 'fuel', modifier: '20'}]
            },
            {
                name : "Un nez de clown", 
                description : "Il s’agit littéralement d’un nez de clown.<br>Vous remarquez facilement l’air moqueur du caissier, qui pourtant est franchement peu expressif à cause de ses caractéristiques physiques.<br>Il vous remet votre nouvelle acquisition dans un sac plastique et vous repartez de la planète en vous demandant ce qui ne va pas chez vous.<br>-5 crédits, +1 nez de clown",
                consequences: [{type: "player-data", name: 'money', modifier: '-5'}]
            },
        ],
        optionFacade : "buttons"
    },
    {
        id: 40,
        title: 'Bozo, le clown triste',
        text: 'Au beau milieu de cette joyeuse aberration de son et de couleur, un individu fais tâche.<br>Un clown sans nez vous dévisage d’un air fatigué, il ne danse pas, ne rigole pas et ne cherche pas à vous chatouiller sans votre consentement.<br>Il vous fait bien de la peine ce clown, essayez donc de lui remonter le moral.',
        options: [
            {
                name : "Offir un nouveau nez à Bozo", 
                description : "À la vue d’un nouvel appendice rouge, le visage de Bozo s’écarquille.<br>Il vous arrache presque le nez des mains avant de le coller à son visage, il semblerait presque soulager sous sa perruque multicolore.<br>En guise de remerciement, le clown sort un porte-monnaie d’une taille imposante de son pantalon et en sort une seule pièce comiquement large.<br>Votre bonne action a été largement remboursée par une forte somme d’argent et un mal de dos causé par le retour au vaisseau avec une pièce de plusieurs dizaines de kilos sur votre dos.<br>-1 nez de clown, +60 crédits",
                consequences: [{type: "player-data", name: 'money', modifier: '60'}]
            },
            {
                name : "Raconter un blague à Bozo", 
                description : "Le clown essaye de sourire à votre tentative pitoyable d’humour, mais n’y arrive décidément pas.<br>Bravo, vous devez bien être le seul être vivant à des années lumières à la ronde qui ne réussit pas à faire rire un clown !<br>Vous repartez avec moins d’estime en vous qu’à l’arrivée.",
                consequences: []
            }
        ],
        optionFacade : "buttons"
    },
    
    {
        id: 50,
        title: 'Le cratère en éruption',
        text: 'Le vaisseau atterrit en douceur sur une plateforme rocheuse. Tout autour, des volcans crachent des flammes et de la lave. Le ciel est rougeoyant et l air est brûlant.<br>Vous entendez des cris au loin, il y a peut-être des survivants. Que décidez-vous de faire ?',
        options: [
            {
            name : "Chercher des survivants",
            description : "Vous vous dirigez vers les cris et trouvez un groupe de survivants acculés par des créatures de lave. Vous engagez le combat pour les aider.<br> Au prix de quelques blessures, vous gagné le combat, pour vous remercier, le plus vieux des survivants vous offre le peu de monnaie qu'il a sur lui<br>+10 d argent, -5 de vie",
            consequences: [
                {type: "player-data", name: 'health', modifier: '+10'},
                {type: "player-data", name: 'money', modifier: '+5'}
            ]
            },
            {
            name : "Explorer les environs",
            description : "Vous décidez d'explorer les environs, malgré les dangers. Vous trouvez une grotte qui mène à une chambre de cristal remplie de pierres précieuses.<br>+50 de richesse",
            consequences: [
                {type: "player-data", name: 'money', modifier: '+50'}
            ]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 51,
        title: 'Au bord du cratère',
        text: 'Vous êtes au bord d’un cratère immense, rempli de lave bouillonnante.<br>Les éruptions volcaniques sont visibles à l’horizon et des cendres tombent du ciel.<br>Vous apercevez quelque-chose de brillant au fond du cratère. Que décidez-vous de faire ?',
        options: [
            {
                name : "Descendre dans le cratère",
                description : "Vous descendez dans le cratère, mais la lave est trop chaude et vous brûlez vos pieds.<br>-10 de santé.",
                consequences: [{type: "player-data", name: 'health', modifier: '-10'}]
            },
            {
                name : "Repartir",
                description : "Vous décidez de ne pas prendre de risque et de repartir immédiatement.<br>Vous ne trouvez rien d'intéressant, mais vous êtes en sécurité.",
                consequences: [{type: "player-data", name: 'health', modifier: '0'}]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 60,
        title: 'Les profondeurs marines',
        text: 'Le vaisseau atterrit en douceur sur l océan de la planète aquatique. Tout autour, des créatures marines étranges nagent autour du vaisseau.<br> Vous apercevez également ce qui semble être une épave au loin.<br>Que décidez-vous de faire ?',
        options: [
            {
                name : "Explorer l épave",
                description : "Vous trouvez une vieille épave au fond de l'océan et décidez de l'explorer. Vous trouvez un coffre rempli de richesses.<br>+50 de richesse",
                consequences: [
                {type: "player-data", name: 'money', modifier: '+10'}
                ]
            },
            {
                name : "Rencontrer la civilisation sous-marine",
                description : "Vous rencontrez une civilisation sous-marine avancée qui vous invite à discuter.C est finalement un piège, vous vous faites dépouiller.<br>-10 d argent",
                consequences: [
                {type: "player-data", name: 'money', modifier: '-10'}
                ]
            }
        ],
        optionFacade : "buttons"
    },
    {
        id: 61,
        title: 'Dans les abysses',
        text: 'Vous plongez dans les abysses de la planète aquatique.<br>Les créatures marines les plus étranges nagent autour de vous, certaines étant amicales, d’autres plus hostiles.<br> Certaine semblent posséder des écailles de valeur, d autres des dents de couleur or. Que choisissez-vous de faire ?',
        options: [
        {
            name : "Observer les créatures aux dents d orées",
            description : "Vous décidez de chasser la créature aux dents d orées.<br> Celle-ci se montre très agressive. Elle vous mort violament le bras",
            consequences: [{type: "player-data", name: 'health', modifier: '-5'}]
        },
        {
            name : "Chasser les créatures aux écailles de valeur",
            description : "Vous décidez de chasser la créature.<br>Vous réussissez à la vaincre et récupérer ses écailles.<br>",
            consequences: [{type: "player-data", name: 'money', modifier: '15'}]
        }
        ],
        optionFacade : "buttons"
    }
];

export default RoomData;