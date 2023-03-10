import personajes from "./Component/Personajes.js";
import  hechizos from "./Component/Hechizos.js";

function App(){
    const router = {
        '/personajes': personajes,
        '/hechizos': hechizos
    }
    
}


export default App;