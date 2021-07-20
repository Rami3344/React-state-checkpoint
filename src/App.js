import React from "react"
import Photo from './images.jpg'
class App extends React.Component {
  state = {
    Person: {
      fullName: "Tom Cruise",
      bio: "Thomas Cruise Mapother IV is an American actor and producer. He has received various accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards. He is one of the highest-paid actors in the world.",
      imgSrc: Photo,
      profession: "Actor"
    },
    show: true
  };
handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  componentDidMount() {
//idk what to do !!!!!!!!!!!!!!!!!!!!!!!!

  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img style={{width:"450px"}}src={this.state.Person.imgSrc} alt="Tom"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </div>
        )}

        <button style={{width: "150px",height: "50px",marginBottom:"20px",marginTop:"20px"}} onClick={this.handleShowPerson}>Show the profile</button>
     </div>
    );
  }
}
export default App;
