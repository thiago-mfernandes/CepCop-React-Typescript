import { branco, cinzaMedio } from "./../../../variaveis";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BotaoVerAnalisantes from "../../../Botao/BotaoVerAnalisantes";
import ContainerData from "./ContainerData";
import ContainerInfo from "./ContainerInfo";
import ContainerTotal from "./ContainerTotal";
import Data from "./Data";
import DiaSemana from "./DiaSemana";
import PessoaCadastrada from "./PessoaCadastrada";
import TituloCardHoje from "../../Home/Titulos/TituloCardHoje";
import TotalCadastros from "./TotalCadastros";
import dataFormatada from "src/services/dataformatada";
import IconCheckList from "./IconCheckList";

const StyledCardHoje = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${branco};
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    border-bottom: 1px solid ${cinzaMedio};
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-column: 1 / 5;
        grid-row: 1 / 3;
    }
`;

export default function CardHoje() {
    return (
        <StyledCardHoje>
            <TituloCardHoje conteudo="Cadastros Hoje:" />
            <ContainerInfo>
                <ContainerData>
                    <Data dataHoje={`${dataFormatada()}`} />
                    {/* tratar o dado aqui */}
                    <DiaSemana dia="Sexta" />
                    {/* tratar o dado aqui */}
                </ContainerData>
                <ContainerTotal>
                    <TotalCadastros total={21} />
                    {/* mockar o dado */}
                    <IconCheckList />
                </ContainerTotal>
            </ContainerInfo>
            <PessoaCadastrada pessoa="1-João da Silva" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="2-José de Mello" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="3-Jair Oliveira" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="4-Jefté Maanain" />
            {/* mockar o dado */}
            <Link
                to="/analisantes"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <BotaoVerAnalisantes>Ver Analisantes</BotaoVerAnalisantes>
            </Link>
        </StyledCardHoje>
    );
}
