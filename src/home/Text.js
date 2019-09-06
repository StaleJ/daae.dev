import React from 'react';
import './Text.css';

const words = [
    'Haskell 🥰',
    'jazz 🎺',
    'running 🏃‍♂',
    'foosball 🏈',
    'React 🤘',
    'making things 🧰',
    'beef burgers 🍔',
]

class Text extends React.Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            currentText: words[0]
        }

    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state, props) => {
                let next;
                if (state.currentIndex >= words.length - 1) next = 0;
                else next = state.currentIndex + 1;
                return { currentIndex: next, currentText: words[next] };
            });
        }, 1000);
    }

    nextWord(state) {
        if (state.currentIndex >= words.length - 1) return 0;
        return state.currentIndex + 1;
    }

    render() {
        return <p>I like {this.state.currentText}</p>
    }
}

export default Text;