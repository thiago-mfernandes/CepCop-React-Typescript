import Acoes from "src/components/Acoes";
import Cabecalho from "src/components/Cabecalho";
import { GlobalStyle } from "src/components/GlobalStyle";

function Analisantes() {
    return (
        <div className="App">
             <GlobalStyle />
             <Cabecalho userName={"teste 1"} />
             <Acoes />
        </div>
    );
}

export default Analisantes;