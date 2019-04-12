import React from 'react';

class Protected extends React.Component {

    componentDidMount(){
        this.props.getData();
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        name="name"
                        placeholder='name'
                        value={this.props.updateField.name}
                        onChange={(e) => this.props.updateFriendField(e)}
                    />
                     <input 
                        type="text"
                        name="age"
                        placeholder='age'
                        value={this.props.updateField.age}
                        onChange={(e) => this.props.updateFriendField(e)}
                    />
                     <input 
                        type="text"
                        name="email"
                        placeholder='email'
                        value={this.props.updateField.email}
                        onChange={(e) => this.props.updateFriendField(e)}
                    />
                     <input 
                        type="text"
                        name="id"
                        placeholder='id'
                        value={this.props.updateField.id}
                        onChange={(e) => this.props.updateFriendField(e)}
                    />

                    <button type="button" onClick={()=> this.props.updateFriend(this.props.updateField)}>Update</button>

                </form>
                {this.props.data.map((x,index) => {
                  return(
                    <div key={index}> 
                        <h2>{x.name}</h2>
                        <h2>{x.age}</h2>
                        <h2>{x.email}</h2>
                        <button onClick={()=>this.props.deleteData(x.id)}>Delete Friend</button>
                    </div>
                        
                  ) 
                   
                })}
            </div>
        )
    }
}

export default Protected;