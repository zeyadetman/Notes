---
title: "API Design Patterns"
---

## Notes

### Chapter 1

- RPC: Remote Procedure Call because it calls a remote function 'procedure'.
- APIs are special types of interfaces that define how two computer systems interact with one another, coming in many forms, such as downloadable libraries and web APIs.
-  Web APIs are special because they expose functionality over a network, hiding the specific implementation or computational requirements needed for that functionality.
- A list of RPC-oriented APIs, may be something like

```
ScheduleFlight()    -> Schedules a new flight
GetFlightDetails()  -> Shows information about a specific flight
ShowAllBookings()   -> Shows all travel plans currently booked
CancelReservation() -> Cancels an existing flight reservation
RescheduleFlight()  -> Reschedules an existing flight to another date or time
UpgradeTrip()       -> Upgrades from economy class to first class
```

But if we want to call each of them publicly, how can we remember that? For example, we need to remember whether the way to see all of our bookings is `ShowFlights()`, `ShowAllFlights()`, `ListFlights()`, or `ListAllFlights()` (in this case, it’s `ShowAllFlights()`). But what can we do to solve this? The answer comes in the form of standardization "Resource orientation" resource-oriented APIs.
`<StandardMethod><Resource>()`

**StandardMethod**: GET, POST, ...etc
**Resource**: in the prev example is the *FlightReservation*. 

`GET<FlightReservation>()`

#### What makes an API "good"?
- **Operational**: it must do the thing users actually want. there may be nonoperational requirements related to things like *latency* and *accuracy*.
- **Expressive**.
- **Simple**.
- **Predictable**.

### Chapter 2

- **Software design pattern:** is what happens when a particular design can be applied over and over to lots of similar software problems.
- **Anatomy of an API design pattern**: *Name, Motivation, Overview, Implementation, Trade-offs.*
- API design patterns are important because APIs are generally very “rigid” and therefore not easy to change, so design patterns help minimize the need for large structural changes.