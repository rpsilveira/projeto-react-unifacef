import * as React from 'react';
import { Container, Card, Grid, Header, Image, List, Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import StarWarsDetailsStore from './store';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  router: NewRouterStore;
  starWarsDetails: StarWarsDetailsStore;
}

@inject('router', 'starWarsDetails')
@observer
export default class StarWarsDetails extends React.Component<RouteComponentProps<{ id: string }> & Props>{

  async componentDidMount() {
    const { buildFilmById } = this.props.starWarsDetails;
    const id = Number(this.props.match.params.id);
    await buildFilmById(id);
  }

  render() {

    const { film } = this.props.starWarsDetails;

    const goBack = () => {
        this.props.router.goBack();
      }

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Header color='blue' as='h2'>
              <Header.Content>
                Star Wars
                <Header.Subheader>
                  Detalhe do filme
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Row>
        </Grid>
        <Card.Group>
          <Card>
            <Image src={film.photo} wrapped ui={false} size='small' />
            <Card.Content>
              <Card.Meta>{film.title} - Episode {film.episode_id}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <p>Diretor: {film.director}</p>
              <p>Data de lançamento: {film.release_date}</p>
            </Card.Content>
            <Card.Content>
              <p>Personagens:</p>
              <List divided={true} relaxed={true}>
                {film.characters?.map((character, indexChar) => {
                  return (
                    <List.Item key={indexChar}>
                      {character.name}
                    </List.Item>
                  )
                })}
              </List>
            </Card.Content>
          </Card>
        </Card.Group>
        <br/>
        <Button type='button' onClick={goBack}>Voltar</Button>
      </Container>
    )
  }
}