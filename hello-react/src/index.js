import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
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
        // 通过函数调用 可以利用上一次 setState 结果进行运算
        this.setState((prevState) => {
            return { count: 0 }
        })
        this.setState((preState) => {
            return {count: preState.count + 1}
        })
        this.setState((preState) => {
            return {count: preState.count + 2}
        })
        /*
        上面我们进行了三次 setState，但是实际上组件只会重新渲染一次，而不是三次；
        这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的
        同一个消息中的 setState 都进行合并以后再重新渲染组件。
         */
        this.setState((preState) => {
            console.log(preState.count)
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍 {this.state.count}
            </button>
        )
    }

}

class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton />
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
