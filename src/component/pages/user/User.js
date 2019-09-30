import React,{Component} from 'react';


class User extends Component{
    constructor(props){
        super(props);

    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<text>
            个人
        </text>);
    }
}

export default  User;
