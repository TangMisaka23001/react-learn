import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Title extends Component {
    handleClickOnTitle() {
        console.log('Click on title.')
    }

    handleClickOnTitleWithEvent(e) {
        console.log(e.target.innerHTML)
    }

    // In React, how to call multiple functions with their own arguments?
    // https://stackoverflow.com/questions/51435345/in-react-how-to-call-multiple-functions-with-their-own-arguments
    handleClickOnTitleWithBindThis(e) {
        console.log(this)
    }

    render() {
        return (
            <h1 onClick={(event) => {
                this.handleClickOnTitle()
                this.handleClickOnTitleWithEvent(event)
                this.handleClickOnTitleWithBindThis.call(this, event)
            }}>React 小书</h1>
        )
    }

}

class Header extends Component {
    render() {
        return (
            <div>
                <Title/>
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
