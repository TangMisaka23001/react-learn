import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    return (
        <div>
          <h1>React 小书</h1>
        </div>
    )
  }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)

// 编译以后会变成
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
//
// class Header extends Component {
//     render () {
//         return (
//             React.createElement(
//                 "div",
//                 null,
//                 React.createElement(
//                     "h1",
//                     { className: 'title' },
//                     "React 小书"
//                 )
//             )
//         )
//     }
// }
//
// ReactDOM.render(
//     React.createElement(Header, null),
//     document.getElementById('root')
// );