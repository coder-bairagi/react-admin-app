import { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Grid } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material'

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = window.innerWidth < 768;
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please Enter a New Title for Your Event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)) {
            selected.event.remove();
        }
    }

    return (
        <>
            <Header title="CALENDAR" subtitle="Interactive Full Calendar" />
            <Grid container spacing={2}>
                {/* Calemdar */}
                <Grid item xs={12} sm={12} md={9}>
                <Box sx={ isMobile ? {
                    "& .fc-header-toolbar": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                    },
                    "& .fc-button-group": {
                        marginTop: "5px",
                    },
                    "& .fc-today-button": {
                        marginTop: "5px",
                    },
                } : undefined }>
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={ isMobile ? {
                            left: "title",
                            center: "prev,next today",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        } : {
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "1546", title: "All Day Event", date: "2024-07-09" },
                            { id: "1547", title: "Team Meeting", date: "2024-07-15" },
                            { id: "1548", title: "Project Deadline", date: "2024-08-01" }

                        ]}
                    />
                    </Box>
                </Grid>
                {/* Calendar Sidebar */}
                <Grid item xs={12} sm={12} md={3}>
                    <Box backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                        <Typography variant="h5">Events</Typography>
                        <List>
                            {currentEvents.map((event) => {
                                return (
                                    <ListItem
                                        key={event.id}
                                        sx={{
                                            backgroundColor: colors.greenAccent[500],
                                            margin: "10px 0",
                                            borderRadius: "2px"
                                        }}>
                                        <ListItemText
                                            primary={event.title}
                                            secondary={
                                                <Typography>{formatDate(
                                                    event.start,
                                                    {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric"
                                                    }
                                                )}</Typography>
                                            }
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Calendar
