import Express,{Request,Response} from "express"

console.log("hola mundo")

const app =Express()
app.use(Express.json())
interface Iusuario {
    id: number;
    nombre: string;
}

const usuario: Iusuario[]= []
const puerto = 2500
//debe llevar request , response
// toda funcion lleva ()=>{
//}
app.get("/usuario",(req:Request, res:Response)=>{
    res.json(usuario)
})

app.get("/usuario/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const usuarioEncontrado = usuario.find(( ele)=>{ele.id=== parseInt(id)})
    {
        res.status (404).json({
            mensaje: "no se encontro el usuario"
        })
    }
    res.status(200).json(usuarioEncontrado)
});




app.post("/usuario",(req:Request, res:Response)=>{
    const {body}= req
    usuario.push()
    res.status(201).json(body)
})

app.patch("/usuario/:id",(req: Request, res: Response)=>{
    const {id} = req.params;
    const {nombre} = req.body

    const usuarioEncontrado = usuario.find((ele)=>ele.id=== parseInt(id))
    if (!usuarioEncontrado)
    {
        res.status(404).json({
            mensaje:"usuario no encontrado"
        })
        return
    }
    usuarioEncontrado.nombre=nombre;
    res.status(200).json(usuarioEncontrado)
})

app.listen(puerto,()=>{
    console.log("el servicio funciona")
})

//hacer delete
//logica
usuario.splice(usuario.indexOf(usuarioEncontrado),1)

res.status(200).json(usuarioEncontrado)
