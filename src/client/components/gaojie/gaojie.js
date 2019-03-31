import React, {Component} from 'react';
const Gaojiejiazai = (Zujian) => {
    return class extends Component{
        constructor(props){
            super(props);
        }
        onjiajia(){
        this.setState({newlen: this.state.newlen + this.state.len});
        if(this.state.newlen > this.state.list.length){
            this.setState({text: '没有更多'});
          }
        }
        totop(){
            console.log('totop');
            this.hellojob.scrollTop = 0;
        }
        render(){
            
           let props = Object.assign({}, this.props);
           props.onjiajia = this.onjiajia;
           props.totop = this.totop;
            return(
                <Zujian {...props} />
            )
        }
    }
} 
export default Gaojiejiazai;