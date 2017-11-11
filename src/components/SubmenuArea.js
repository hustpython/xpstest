import React,{Component}from 'react'
class SubmenuArea extends Component{

    constructor(props){
        super(props)
        this.state={
            collapsedstate:this.props.collpased
        }
    }
    
     handleChangeCollpased(){
        this.setState({collapsedstate:!this.state.collapsedstate});
    }
    
    render(){
        
        let collapsedstate = (
            <div className='submenupanel' onDoubleClick={this.handleChangeCollpased.bind(this)}>
            <p style={{fontFamily:'STKaiti'}}>子菜单面板</p>
            <hr/>
            <submenu/>
            <this.props.submenu/>
        </div>
        )
    
    return(
        this.state.collapsedstate === 'false' ? collapsedstate:null
    )
}
}
export default SubmenuArea