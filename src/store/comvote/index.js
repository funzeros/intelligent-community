export default {
    namespaced: true,
    state: {
        comvotes: [
            {
                id: 1,
                title: '水电公司投票',
                type: '#选举#',
                people: 50,
                content: '最近水电公司需要更换，物业公司为大家找了几家水电公司，请所有业主投票使用哪家。',
                start: '2019-06-17',
                end: '2019-07-17',
                isRadio: false,
                choice: [
                    {
                        option: '富阳冠宏水厂',
                        number: 15,
                        selected: false
                    },
                    {
                        option: '萧山利一水厂',
                        number: 25,
                        selected: false
                    },
                    {
                        option: '杭州广华水厂',
                        number: 25,
                        selected: false
                    }
                ],
                onGoing: true,
                src: '/images/election.png'
            },
            {
                id: 2,
                type: '#投票#',
                title: '公共设施更改',
                people: 37,
                content: '小区公共游泳池改造成儿童游乐区表决',
                start: '2019-06-13',
                end: '2019-07-13',
                isRadio: true,
                choice: [
                    {
                        option: '同意',
                        number: 15,
                        selected: false
                    },
                    {
                        option: '反对',
                        number: 22,
                        selected: false
                    }
                ],
                onGoing: true,
                src: '/images/vote.png'
            },
            {
                id: 3,
                type: '#投票#',
                title: '学校轰炸投票',
                people: 39,
                content: '爆破学校表决',
                start: '2019-03-09',
                end: '2019-03-15',
                isRadio: true,
                choice: [
                    {
                        option: '同意',
                        number: 39,
                        selected: true
                    },
                    {
                        option: '反对',
                        number: 0,
                        selected: false
                    }
                ],
                onGoing: false,
                src: '/images/vote.png'
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
}
