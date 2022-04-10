const hardcodedMessages = {
    'Batman': {
        'Superman': [],
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
        'Ronaldo': [],
        'Max': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:45',
                content: 'Hey Max, how did the race go?'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:46',
                content: 'Im Batman.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:47',
                content: 'Im Batman.'
            },
        ],
        'Joker': []
    },
    'Superman': {
        'Batman': [],
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
        'Batman': [],
        'Max': [],
        'Joker': []
    },
    'Max': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [],
        'Joker': []
    },
    'Joker': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [],
        'Max': []
    }
}
export default hardcodedMessages;