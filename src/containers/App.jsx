import React from 'react';
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

const App = () => {
    const data = useGetData();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
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
                <Skills />
                <Languages />
            </Sidebar>
            <Info>
                <Education 
                    data={data.education}
                />
                <Experience 
                    data={data.experience}
                />
                <Certificates 
                    data={data.certificates}
                />
            </Info>
        </Main>
    );
}

export default App;