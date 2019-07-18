import React, { Component } from "react";
import { GET_RANDOM_CHARACTER } from "./components/queries";
import SeenCards from "./components/SeenCards";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";
import Button from "./components/Button";
import { ApolloConsumer } from "react-apollo";

class App extends Component {
  state = {
    seen: new Map(),
    current: {}
  };

  render() {
    const { current, seen } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <div className='App'>
            <div className='container'>
              <div className='row'>
                <div className='col-5'>{this.handleSeenCardsRender(seen)}</div>
                <div className='col-7'>
                  {Object.keys(current).length === 0 && <CardHolder />}
                  {Object.keys(current).length > 0 && (
                    <Card character={current || {}} />
                  )}
                  <Button onClick={this.handleCardUpdate} client={client} />
                </div>
              </div>
            </div>
          </div>
        )}
      </ApolloConsumer>
    );
  }

  handleCardUpdate = async client => {
    const seen = new Map(this.state.seen);

    const {
      data: { character: current }
    } = await client.query({
      query: GET_RANDOM_CHARACTER,
      variables: { _id: "" },
      fetchPolicy: "network-only"
    });

    const { _id } = current;
    if (seen.has(_id)) {
      const current = seen.get(_id);
      //If info has been already requested, there's no need to query again
      return this.setState({ current }); // card was already fetched
    }

    seen.set(current._id.toString(), current); //add to map
    return this.setState({ seen, current });
  };

  handleCardSelect = id => {
    const { seen } = this.state;
    const current = { ...seen.get(id.toString()) };

    return this.setState({ current });
  };

  handleSeenCardsRender = seen => {
    return (
      <React.Fragment>
        <h6>
          Have you seen them all?{" "}
          <span role='img' aria-label='eyes'>
            👀
          </span>
        </h6>
        <SeenCards seen={seen} onClick={this.handleCardSelect} />
      </React.Fragment>
    );
  };
}

export default App;
