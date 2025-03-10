const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super();

    this.handleAdoption = this.handleAdoption.bind(this)
  }

  handleAdoption() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    var adoptionB;
    if (this.props.isAdopted){
      adoptionB = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptionB = <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header"> {this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptionB}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
