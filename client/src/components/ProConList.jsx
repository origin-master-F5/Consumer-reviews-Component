import React from 'react';
import Pros from './Pros.jsx';
import Cons from './Cons.jsx';



class ProConList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            proWords: ['good', 'wow', 'truly amazing', 'sick', 'awesome', 'best', 'dope'],
            conWords: ['bad', 'not good', 'lame', 'needs improvement', 'challenging', 'confusing', 'dumb', 'hate'],
            reviewWords: 'I found this to be really good.  Like wow it was truly amazing.  truly truly amazing.  It was good and awesome. Some would say dope but i would say awesome.  kinda sick but mostly dope.  Dope and awesome.  And good. This item was not good.  it was bad.  very bad.  needs improvement.  i say again needs improvement.  so lame and so bad.  real bad. really needs improvement.  it was confusing and challenging and lame.  Why was it so confusing?  because it was lame and bad and real bad. Hate how dumb and lame it was.  dumb and bad!',
            usedPros: [],
            usedCons: [],
            
        }
    }
    componentDidMount() {
        this.setState({
            usedPros: this.findWords(this.state.proWords, this.state.reviewWords),
            usedCons: this.findWords(this.state.conWords, this.state.reviewWords),
        })
    }
    findWords(words, text) {
        let wordCounts = {}
        text = text
            .toLowerCase()
            .replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=|\n)/g, ' ')
            .split(' ')
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < text.length; j++) {
                if (words[i] === text[j]) {
                    if (!wordCounts.hasOwnProperty(words[i])) {
                        wordCounts[words[i]] = 1
                    } else {
                        wordCounts[words[i]]++
                    }
                }
            }
        }
        let wordCountArr = Object.keys(wordCounts)
            .sort(
                (a, b) => wordCounts[b] - wordCounts[a]
            )
            .map(
                (word) => [word, wordCounts[word]]
            );
        if (wordCountArr.length > 5) {
            wordCountArr.length = 5
        }
        return wordCountArr
    }
    handleClick(selection) {

    }
    render() {
        return (
            <div className="proconlist-parent-div">
                <Pros filters={this.state.usedPros} />
                <Cons filters={this.state.usedCons}/>
            </div>
        );
    }
}

export default ProConList