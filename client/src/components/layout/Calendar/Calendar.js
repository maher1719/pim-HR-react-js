import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import "@fullcalendar/core/main.css";
import  "@fullcalendar/daygrid/main.css";


//import './main.scss'

export default class Calendar extends React.Component {
    componentDidMount()  {
        this.handleDateClick = (arg) => {
            alert("hello");
            console.log('hel');
            if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
                this.setState({  // add new event data
                    calendarEvents: this.state.calendarEvents.concat({ // creates a new array
                        title: 'New Event',
                        start: arg.date,
                        allDay: arg.allDay
                    })
                })
            }
        }
    }
    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
        calendarEvents: [ // initial event data
            { title: 'Event Now', start: new Date() },
            { title: 'Event Now', start: "2020-04-03"}
        ]
    }

    render() {
        return (
            <div className='demo-app'>
                <div className='demo-app-top'>
                    <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
                    <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
                    (also, click a date/time to add an event)
                </div>
                <div className='demo-app-calendar'>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                        ref={ this.calendarComponentRef }
                        weekends={ this.state.calendarWeekends }
                        events={ this.state.calendarEvents }
                        selectable={true}
                        editable={true}
                        draggable={true}
                        droppable={true}
                        eventClcik={this.handleDateClick}
                        dateClick={  this.handleDateClick }
                        onClick={ this.handleDateClick }
                    />
                </div>
            </div>
        )
    }
    toggleWeekends = () => {
        this.setState({ // update a property
            calendarWeekends: !this.state.calendarWeekends
        })
    };

    gotoPast = () => {
        let calendarApi = this.calendarComponentRef.current.getApi()
        calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    };



}