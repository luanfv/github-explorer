import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from './../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} height="25px" alt="Github Explore" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositorio" />
                <button>Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/42809136?s=460&u=e9aaee21aa9fcba3c5ded6d94fbcde1a9846f202&v=4" 
                        alt="Luan França Vieira"
                    />
                    <div>
                        <strong>luanfv/app-rpgzando</strong>
                        <p>App gerador de ficha de rpg D&D5e, feito com react-native.</p>
                    </div>
                
                    <FiChevronRight size={20} />
                </a>
                <a href="#">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/42809136?s=460&u=e9aaee21aa9fcba3c5ded6d94fbcde1a9846f202&v=4" 
                        alt="Luan França Vieira"
                    />
                    <div>
                        <strong>luanfv/cep-consult</strong>
                        <p></p>
                    </div>
                
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;