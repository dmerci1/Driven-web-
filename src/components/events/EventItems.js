import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventAttendes from './EventAttendes';

class EventItems extends Component {
  render() {
    const {event, onEventOpen, deleteEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item  className="nav">
              <Item.Image size="tiny" circular src="assets/pat.jpg"  />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.host}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
                <span>
                  <Icon name="clock" /> {event.date} |
                  <icon name="marker" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                    <List horizontal>
                      {event.attendees && event.attendees.map((attendee) => (
                        <EventAttendes key={attendee.id} attendee = {attendee} />
                      ))}

                    </List>
              </Segment>
              <Segment clearing>
                      <span>{event.description}</span>
                      <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                      <Button onClick={onEventOpen(event)} as="a" color="teal" floated="right" content="View" />
                </Segment>
          </Segment.Group>
    );
  }
}

export default EventItems;