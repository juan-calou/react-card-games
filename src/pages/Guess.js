import React from "react";
import Button from "react-bootstrap/Button";

class Guess extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      deckid: 0,
      card: "",
    };
  }

  async componentDidMount() {
    console.log("3. componentDidMount()");
    /// set state
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const response = await fetch(url);
    const data = await response.json();
    if (data.success) {
      this.setState({ deckid: data.deck_id });
    }
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount");
  }

  handleGetCard = async () => {
    const id = this.state.deckid;
    const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ card: data.cards[0].image });
    console.log(data.cards[0].image);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Button
                variant="primary"
                size="lg"
                active
                onClick={this.handleGetCard}
              >
                Get card
              </Button>
            </div>
            {this.state.card !== "" ? (
              <div className="col-12">
                <img alt="card" src={this.state.card} />
              </div>
            ) : (
              <div className="col-12">No card</div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Guess;
