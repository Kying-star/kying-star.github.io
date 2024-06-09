let data = {
    id: '01',
    pid: '',
    name: '张大大',
    job: '项目经理',
    children: [{
            id: '02',
            pid: '01',
            name: '小亮',
            job: '产品leader',
            children: [{
                    id: '07',
                    pid: '02',
                    name: '小丽',
                    job: '产品经理',
                    children: []
                },
                {
                    id: '08',
                    pid: '02',
                    name: '大光',
                    job: '产品经理',
                    children: []
                }
            ]
        },
        {
            id: '03',
            pid: '01',
            name: '小美',
            job: 'UIleader',
            children: [{
                id: '09',
                pid: '03',
                name: '小高',
                job: 'UI设计师',
                children: []
            }]
        },
        {
            id: '04',
            pid: '01',
            name: '老马',
            job: '技术leader',
            children: [{
                    id: '10',
                    pid: '04',
                    name: '小刘',
                    job: '前端工程师',
                    children: []
                },
                {
                    id: '11',
                    pid: '04',
                    name: '小华',
                    job: '后端工程师',
                    children: []
                },
                {
                    id: '12',
                    pid: '04',
                    name: '小李',
                    job: '后端工程师',
                    children: []
                }
            ]
        },
        {
            id: '05',
            pid: '01',
            name: '老王',
            job: '测试leader',
            children: [{
                    id: '13',
                    pid: '05',
                    name: '小赵',
                    job: '测试工程师',
                    children: []
                },
                {
                    id: '14',
                    pid: '05',
                    name: '小强',
                    job: '测试工程师',
                    children: []
                }
            ]
        },
        {
            id: '06',
            pid: '01',
            name: '老李',
            job: '运维leader',
            children: [{
                id: '15',
                pid: '06',
                name: '小涛',
                job: '运维工程师',
                children: []
            }]
        }
    ]
}
let ArrayToTree = (tree) => {
    if(Array.isArray(tree)){
        return tree.reduce((arr, {id , pid , name , job , children = []}) => 
        arr.concat([{id , pid , name , job}] ,ArrayToTree(children)),[])
    }else{
        return [tree].reduce((arr, {id , pid , name , job , children = []}) => 
        arr.concat([{id , pid , name , job}] ,ArrayToTree(children)),[])
    }
}

console.dir(ArrayToTree(data) , {depth : null})