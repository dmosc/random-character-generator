import React, { Component } from "react";
import { GET_RANDOM_CHARACTER } from "./components/queries";
import SeenCards from "./components/SeenCards";
import Card from "./components/Card";
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
                <div className='col-5'>
                  <h6>
                    Have you seen them all?{" "}
                    <span role='img' aria-label='eyes'>
                      👀
                    </span>
                  </h6>
                  <SeenCards seen={seen} onClick={this.handleCardSelect} />
                </div>
                <div className='col-7'>
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
    const randId = Math.trunc(Math.random() * (400 - 1) + 1);

    if (seen.has(randId)) {
      const current = seen.get(randId);
      //If info has been already requested, there's no need to query again
      return this.setState({ current }); // card was already fetched
    }

    const {
      data: { character: current }
    } = await client.query({
      query: GET_RANDOM_CHARACTER,
      variables: { randId }
    });

    seen.set(randId.toString(), current); //add to map
    return this.setState({ seen, current });
  };

  handleCardSelect = id => {
    const { seen } = this.state;
    const current = { ...seen.get(id.toString()) };

    return this.setState({ current });
  };
}

export default App;
