import React from 'react';
import './Text.css';

const words = [
    'Haskell 🥰',
    'jazz 🎺',
    'running 🏃',
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
            currentText: '|',
            animationFinished: false,
            direction: 1,
            lingerCount: 0
        }
    }

    componentDidMount() {
        setInterval(async () => {
            this.setState((state, props) => {
                if (state.animationFinished) {
                    let next;
                    if (state.currentIndex >= words.length - 1) next = 0;
                    else next = state.currentIndex + 1;
                    return { currentIndex: next, currentText: '', animationFinished: false, direction: 1, lingerCount: 0 };
                } else {
                    let currentWord = words[state.currentIndex];
                    let maxSize = currentWord.length;
                    let currentSize = state.currentText.length - 1;
                    if (state.direction > 0) {
                        if (currentSize === maxSize - 2) return { currentText: currentWord + '|' };
                        if (currentSize === maxSize && state.lingerCount < 20) return { lingerCount: state.lingerCount + 1 };
                        if (currentSize === maxSize) return { direction: -1 };
                        return { currentText: currentWord.substring(0, currentSize + 1) + '|' };
                    } else {
                        if (currentSize === maxSize) return { currentText: currentWord.substring(0, maxSize - 3) + '|' }
                        if (currentSize === 0) return { animationFinished: true };
                        return { currentText: currentWord.substring(0, currentSize - 1) + '|' };
                    }
                }
            });
        }, 50);
    }

    render() {
        return <p>In my spear time I enjoy {this.state.currentText}</p>
    }
}

export default Text;