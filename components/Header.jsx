import React from 'react';
import Brace from './HeaderBrace';
import Button from './HeaderButton';
import ProfileImage from './HeaderProfile';
import Title from './HeaderTitle';
import ParticlesBackground from './ParticlesBackground';

const themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a'
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4'
    }
};

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: 'dark'
        };
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light';
        this.setState({
            theme: newtheme
        });
    }

    render() {
        let theme = themes[this.state.theme];
        return (
            <>
                <ParticlesBackground />
                <section className="hero is-fullheight has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-mobile">
                                <Brace type="left" color={theme.font} />
                                <ProfileImage toggle={this.toggleTheme.bind(this)} />
                                <Brace type="right" color={theme.font} />
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <Title color={theme.font} />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="buttons is-centered are-medium">
                                        <Button title="My GitHub" url="https://github.com/Jessteijn" />
                                        <Button title="My LinkedIn" url="https://www.linkedin.com/in/jessewessteijn/" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}