import React from 'react';
import styled,{ThemeProvider} from 'styled-components';

const SocialStyled = styled.div`
    margin: 0;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`;

const facebook = {
    color: '#385998'
}

const linkedin = {
    color: '#0e76a8'
}

const getColor = (name) => {
    if (name == 'facebook') return facebook;
    if (name == 'linkedin') return linkedin;
}

const Social = props => (
    <SocialStyled>
        {props.social &&
            <SocialUl>
                {props.social.map((item,index) => (
                    <SocialLi key={`social-${index}`} target="_blank">
                        <SocialAnchor href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fa fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))
                }
            </SocialUl>
        }
    </SocialStyled>
);

export default Social;