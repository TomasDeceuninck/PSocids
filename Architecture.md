# Architecture

## General description

Everything is designed like a company with a flat-ish hierarchy.

To optimize CPU usage some 'evaluations' will be done only once per [Iteration].
An [Iteration] is a period of X ticks

In the first tick of an [Iteration] the [Strategy] is defined by the [Board].Meeting() based on priority-ordered [KPI]'s that combine [Indicator]s with a target value.

All day-to-day task are handled by an [Operation]:[Team]
All one-time changes are handled by a [Project]:[Team]

Each [Team] has a [Focus] list that combines [Indicator]s with weights.
Each [Team] has a maximum of 100 points to distribute over all impacted [Indicators]
This is a numeral representation of the impact of the implemented tasks and priorities for that [Team].

After the [Board].Meeting() [CR] assigns resources (creeps) to [Team]s based on the combination of [Strategy] and each [Team]s [Focus].

### Memory structure

Iteration
  Duration
  Start Tick
Strategy
  KPI
    Id
    IndicatorId
    Target
Project


## Possible Extras

Possible extras for in the future.
These are described here mainly to keep track of good ideas.

### 'Learning'

Each [Team] has an [impact] list that combines [indicator]s with an indicative percentage modification per 1? tick ('0.5' would suggest that the [Indicator] would increase by 50% while -0.3 would suggest that the [Indicator] would decrease by 30%)

have the Teams 'learn' how much they impact each indicator
