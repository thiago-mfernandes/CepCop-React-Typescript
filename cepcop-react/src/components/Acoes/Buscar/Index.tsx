import InputPadrao from "src/components/UI/Input/InputPadrao";
import Container from "../Container";
import Output from "src/components/UI/Output";
import { Conteudo } from "./styles";

function Buscar() {
    return (
        <>
            <InputPadrao
                typeInput="text"
                placeholderInput="Pesquise..."
                nameInput=""
                ariaDescribedbyInput=""
            />
            <Container
                borderBottom="0px"
                paddingBottom={"0px"}
                justifyContentDireita
            >
                <Conteudo>Mostrar</Conteudo>
                <Output valor={10} /> {/*mockar o dado aqui*/}
                <Conteudo>entradas</Conteudo>
            </Container>
        </>
    );
}

export default Buscar;
