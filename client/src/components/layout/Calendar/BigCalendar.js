import React, {Component} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import {createEvent, listEvents} from "../../../api/EventsApi";
import { useSelector, useDispatch } from 'react-redux';


const localizer = momentLocalizer(moment);


class BigCalendar extends Component {

    state = {
        events: [{
            id: 2,
            title: 'DS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        }],


    };

    componentDidMount() {
        //console.log("mount ",CurrentUser);

         listEvents().then((data) => {
             console.log("events mount", data);
             const messages = {
                 allDay: 'journée',
                 previous: 'précédent',
                 next: 'suivant',
                 today: 'aujourd\'hui',
                 month: 'mois',
                 week: 'semaine',
                 day: 'jour',
                 agenda: 'Agenda',
                 date: 'date',
                 time: 'heure',
                 event: 'événement', // Or anything you want
                 showMore: total => `+ ${total} événement(s) supplémentaire(s)`
             };
             const events=data;
             this.state = {
                 name: 'React',
                 events,
                 messages: messages,

             };

             this.setState({
                 events:[
                     ...this.state.events,
                     data
                 ]
             })
        });
         //console.log("user",this.state.userId);


    }
    constructor() {
        super();
        const now = new Date();


        //const ev=  listEvents().then((data)=>{this.state.events=data});
        //console.log("events",this.state.events);
        //console.log("events "+evv);
        const events = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2015, 3, 0),
                end: new Date(2015, 3, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2015, 3, 7),
                end: new Date(2015, 3, 10),
            },

            {
                id: 2,
                title: 'DTS STARTS',
                start: new Date(2016, 2, 13, 0, 0, 0),
                end: new Date(2016, 2, 20, 0, 0, 0),
            },

            {
                id: 3,
                title: 'DTS ENDS',
                start: new Date(2016, 10, 6, 0, 0, 0),
                end: new Date(2016, 10, 13, 0, 0, 0),
            },

            {
                id: 4,
                title: 'Some Event',
                start: new Date(2015, 3, 9, 0, 0, 0),
                end: new Date(2015, 3, 10, 0, 0, 0),
            },
            {
                id: 5,
                title: 'Conference',
                start: new Date(2015, 3, 11),
                end: new Date(2015, 3, 13),
                desc: 'Big conference for important people',
            },
            {
                id: 6,
                title: 'Meeting',
                start: new Date(2015, 3, 12, 10, 30, 0, 0),
                end: new Date(2015, 3, 12, 12, 30, 0, 0),
                desc: 'Pre-meeting meeting, to prepare for the meeting',
            },
            {
                id: 7,
                title: 'Lunch',
                start: new Date(2015, 3, 12, 12, 0, 0, 0),
                end: new Date(2015, 3, 12, 13, 0, 0, 0),
                desc: 'Power lunch',
            },
            {
                id: 8,
                title: 'Meeting',

                start: new Date(2015, 3, 12, 14, 0, 0, 0),
                end: new Date(2015, 3, 12, 15, 0, 0, 0),
            },
            {
                id: 9,
                title: 'Happy Hour',
                start: new Date(2015, 3, 12, 17, 0, 0, 0),
                end: new Date(2015, 3, 12, 17, 30, 0, 0),
                desc: 'Most important meal of the day',
            },
            {
                id: 10,
                title: 'Dinner',
                start: new Date(2015, 3, 12, 20, 0, 0, 0),
                end: new Date(2015, 3, 12, 21, 0, 0, 0),
            },
            {
                id: 11,
                title: 'Birthday Party',
                start: new Date(2015, 3, 13, 7, 0, 0),
                end: new Date(2015, 3, 13, 10, 30, 0),
            },
            {
                id: 12,
                title: 'Late Night Event',
                start: new Date(2015, 3, 17, 19, 30, 0),
                end: new Date(2015, 3, 18, 2, 0, 0),
            },
            {
                id: 12.5,
                title: 'Late Same Night Event',
                start: new Date(2015, 3, 17, 19, 30, 0),
                end: new Date(2015, 3, 17, 23, 30, 0),
            },
            {
                id: 13,
                title: 'Multi-day Event',
                start: new Date(2015, 3, 20, 19, 30, 0),
                end: new Date(2015, 3, 22, 2, 0, 0),
            },
            {
                id: 14,
                title: 'Today',
                start: new Date(new Date().setHours(new Date().getHours() - 3)),
                end: new Date(new Date().setHours(new Date().getHours() + 3)),
            },
            {
                id: 15,
                title: 'Point in Time Event',
                start: now,
                end: now,
            },
        ];


        //console.log(this.state.events);
    };

    handleSelect = ({start, end}) => {
        const title = window.prompt('New Event name');
        const endMoment=moment(end);
        const startMoment=moment(start);


        if (title) {


            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                        id: this.id,
                    },
                ],
            });

            //console.log("all day",allDay);


            createEvent({id: "eess", title: title, start: start, end: end});
            //console.log()
            //console.log(createEvent({id:"eess",title:title,start:start,end:end,allDay:true}));
        }
    };

    render() {
        return (
            <div>
                <p>
                    A test for the React Big Calendar.
                </p>
                <div style={{height: '500pt'}}>
                    <Calendar
                        messages={this.state.messages}
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        selectable
                        onSelectSlot={this.handleSelect}
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                    />
                </div>
            </div>
        );
    }
}

export default BigCalendar;