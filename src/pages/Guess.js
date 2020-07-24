import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class Guess extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      cards: [],
      deck_id: 0,
      remaining: 0,
      loading: true,
    };
  }

  fetchData = async () => {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const response = await fetch(url);
    const data = await response.json();
    if (data.success) {
      this.setState({
        deck_id: data.deck_id,
        remaining: data.remaining,
        loading: false,
      });
    }
    console.log(data);
  };

  async componentDidMount() {
    this.fetchData();
  }

  handleGetCard = async () => {
    const id = this.state.deck_id;
    const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      cards: data.cards,
      deck_id: data.deck_id,
      remaining: data.remaining,
      loading: false,
    });
    console.log(data);
  };

  render() {
    if (this.state.loading) {
      return <Spinner animation="border" variant="primary" />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <CardDeck>
                  <Card>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Button
                        variant="primary"
                        size="lg"
                        active
                        onClick={this.handleGetCard}
                      >
                        Get card
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Deck ID {this.state.deck_id}
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body>
                      {this.state.cards.length > 0 ? (
                        <Card.Img
                          bsPrefix="custom"
                          src={this.state.cards[0].images.png}
                        />
                      ) : (
                        <Card.Text>No card</Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        Quedan {this.state.remaining} cartas en el mazo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Guess;
