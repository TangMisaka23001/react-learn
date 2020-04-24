import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
    // React.js 也提供了一种方式 defaultProps，可以方便的做到默认配置
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor() {
        super();
        this.state = {
            isLiked: false,
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }

}

class Index extends Component {
    render() {
        return (
            // 在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值
            <div>
                <LikeButton likedText='已赞' unlikedText='赞'/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
