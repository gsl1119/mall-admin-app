const roleRouter = {
    "customer": [
        {name:'Product'},
        {name:'ProductList'},
        {name:'ProductAdd'},
    ],
    "admin":[
        {name:'Product'},
        {name:'ProductList'},
        {name:'ProductAdd'},
        {name:'Category'},
    ]
}

export default function getMenuRouter(role, routes) {
    const allowRouterName = roleRouter[role].map(item=>item.name)
    const resultRoutes = routes.filter(r=>{
        const obj = r
        if (allowRouterName.indexOf(r.name) !== -1) {
            const {children} = obj
            obj.children = children.filter(c=>allowRouterName.indexOf(c.name) !== -1)
            return true 
        }
    })
    return false
}