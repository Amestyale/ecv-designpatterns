let ItemPlayerData = 
[
    {
        id: 'pistolet_laser',
        title: 'Pistolet Laser',
        description: 'Cette arme étrange ressemble fortement à un jouet en plastique, mais elle tire des rayons mortels.',
        type: 'object',
        category: 'weapon',
        stat: [{name: 'strenght', modifier: '1'}],
    },
    {
        id: 'cerveau_parasite_flottant',
        title: 'Cerveau parasite flottant',
        description: 'Créature fascinante et étrange, ce cerveau télépathe se nourrit de la force vitale de son hôte en échange de connaissances.',
        type: 'object',
        category: 'pet',
        stat: [{name: 'intelligence', modifier: '3'},{name: 'maxHealth', modifier: '-20'}],
    },
    {
        id: 'champ_de_force_personnel_tx_4670',
        title: 'Champ de force personnel TX-4670',
        description: 'Merveille de technologie crombonienne, le TX-4670 vous protégera des dangers de type organique tels que les piranhas radioactifs ou les belles-mères.',
        type: 'object',
        category: 'pet',
        stat: [{name: 'intelligence', modifier: '3'}],
    },
    {
        id: 'contusion_legere',
        title: 'Contusion légère',
        description: 'Bien que douloureuse sur le moment, cette blessure ne devrait pas laisser de séquelle à part une sacrée bosse et une vision un peu flou.',
        type: 'effect',
        category: '',
        stat: [{name: 'intelligence', modifier: '-1'}],
    },
    {
        id: 'dechirure_dans_l_espace_temps',
        title: 'Déchirure dans l’espace temps',
        description: 'C’est marrant de savoir que le nom scientifique de ce genre de chose est transition de flop. C’est moins marrant d’en subir une…',
        type: 'effect',
        category: '',
        stat: [{name: 'strenght', modifier: '-2'}],
    },
    {
        id: 'grande_malediction_sacree',
        title: 'Grande malédiction sacrée de l’empereur intergalactique de la souffrance',
        description: 'Avec un nom comme cela, on s’attendait à bien pire…',
        type: 'effect',
        category: '',
        stat: [{name: 'maxHealth', modifier: '-5'}],
    },
];

export default ItemPlayerData;