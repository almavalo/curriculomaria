import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #FFF2F5;
    }
`;

const App = () => {
    const data = useGetData();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <GlobalStyle />
                <Sidebar>
                    <About 
                        addres = {data.addres}
                        avatar = { data.avatar}
                        bio = {data.bio}
                        email = { data.email}
                        name = { data.name}
                        phone = { data.phone}
                        profession = {data.profession}
                        social = {data.social}
                    />
                    <Skills 
                        data={data.skills}
                    />
                    <Languages />
                </Sidebar>
                <Info>
                    <Experience 
                        data={data.experience}
                    />
                    <Education 
                        data={data.education}
                    />
                    <Certificates 
                        data={data.certificates}
                    />
                </Info>
        </Main>
    );
}

export default App;