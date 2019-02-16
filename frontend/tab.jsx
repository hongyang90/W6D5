import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {initialIdx: 0}
    // this.tabs = {
    //   0: 'One', 1: 'Two', 2: 'Three'
    // }
  }



  render() {
    let panes = this.props.panes 

    return (
      <ul>
        {
          panes.map((pane) => {
            return `${pane.title}: ${pane.content}`
          })
        }
      </ul>
    )
  }
}

export default Tab;