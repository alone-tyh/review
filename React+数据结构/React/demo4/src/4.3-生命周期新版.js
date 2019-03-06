import React,{Component} from 'react'

export default class Demo3 extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            time:new Date().getSeconds()
        }
        this.getSec=setInterval(() => {
            this.setState({
                time:new Date().getSeconds()
            })
        }, 500);
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('静态生命周期函数')
        return {
            name:'123123'
        }
    }
   

    componentDidMount(){
        console.log('组件加载完成---componentDidMount')
    }


    getSnapshotBeforeUpdate(){
        console.log('更新前获取快照')
        return '来自快照';
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('组件是否应该更新？---shouldComponentUpdate')
        return true
    }
    componentDidUpdate(prevProps,prevState,info){
        console.log(prevProps,prevState,info)
        console.log('组件更新完成Did---componentDidUpdate')
    }

    
    componentWillUnmount(){
        console.log('组件将要卸载---componentWillUnmount')
        clearInterval(this.getSec)
    }
    render(){
        console.log('render',this.state);
        return (
            <div style={{border:"1px solid red"}}>
                {this.state.time}
                <button onClick={()=>{this.setState({})}}>4.3按钮</button>
            </div>
        )
    }
    
}