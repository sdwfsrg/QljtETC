import React,{Component} from 'react';


class Home extends Component{
    constructor(props){
        super(props);

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<text>
            首页
        </text>);
    }
}

export default Home;
