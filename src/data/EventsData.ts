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
    }
]