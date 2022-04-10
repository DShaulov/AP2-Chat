const hardcodedMessages = {
    'Batman': {
        'Superman': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '21:44',
                content: 'Yo Clark, Man Of Steel sucked.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '21:45',
                content: 'Dont you have a clown to chase?'
            }
        ],
        'Messi': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:23',
                content: 'Im vengeance.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:24',
                content: 'Que?'
            }, 
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:25',
                content: 'No hablo ingles'
            }
        ],
        'Ronaldo': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '8:52',
                content: 'Going to Manchester United was a huge mistake.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '8:53',
                content: 'Siiiiiiiiuuuuuu'
            }
        ],
        'Max': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:31',
                content: 'Hey Max, how did the race go?'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '12:32',
                content: 'Awful, car had battery problems.'
            }
        ],
        'Joker': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '15:27',
                content: 'You are garbage that kills for money.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '15:28',
                content: 'Its not about money, its about sending a message.'
            },
        ]
    },
    'Superman': {
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '21:44',
                content: 'Yo Clark, Man Of Steel sucked.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '21:45',
                content: 'Dont you have a clown to chase?'
            }
        ],
        'Messi': [],
        'Ronaldo': [],
        'Max': [],
        'Joker': []

    },
    'Messi': {
        'Superman': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:23',
                content: 'Im Batman.'
                
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:24',
                content: 'Que?'
            }, 
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:25',
                content: 'No hablo ingles'
            }
        ],
        'Ronaldo': [],
        'Max': [],
        'Joker': []
    },
    'Ronaldo': {
        'Superman': [],
        'Messi': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '8:52',
                content: 'Going to Manchester United was a huge mistake.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '8:53',
                content: 'Siiiiiiiiuuuuuu'
            }
        ],
        'Max': [],
        'Joker': []
    },
    'Max': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '12:31',
                content: 'Hey Max, how did the race go?'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:32',
                content: 'Awful, car had battery problems.'
            }
        ],
        'Joker': []
    },
    'Joker': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '15:27',
                content: 'You are garbage that kills for money.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '15:28',
                content: 'Its not about money, its about sending a message.'
            },
        ],
        'Max': []
    }
}
export default hardcodedMessages;