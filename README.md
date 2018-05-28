# Bulb Coding Challenge

## Overview

Thank you for interviewing at Bulb and making the time to complete this coding exercise.

In this challenge, we are looking at the energy usage of a customer. We have built a very basic web application that displays the data and we would like you to improve it.

The challenge is split into two parts. The first part focus on the web application, while the second focuses on how energy usage is calculated.
With these two tasks, we are hoping to assess your coding level. It will also give us a good base for discussion if you are invited to come in (which we hope you are!).

We appreciate that life is busy, so do not spend more than two hours in total. Feel free to split the time as you want between the two tasks.


## Tasks

### 1. Cleaning the code

This task is about cleaning the web application code.

We would like you to:
* Refactor the code to be more React-y
* Write unit tests (we have added [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest/) but feel free to use another framework)
* Fetch meter readings from [https://storage.googleapis.com/bulb-interview/meterReadings.json](https://storage.googleapis.com/bulb-interview/meterReadings.json)
* Style the application (if you are familiar with [styled-components](http://styled-components.com/), we would love to see how you use it, if you are not please feel free to use CSS, SASS or LESS. In any cases, do not spend more than 15 minutes on improving the application style)


We do __not__ want you to spend time on:
* Changing how the application is bundled and run
* Setting up a new linter (we have added eslint with the Airbnb configuration, feel free to tweak it but ideally you wouldn't spend time on this)
* Using Redux (or any other utility libraries that is not necessary in this very simple case)
* "Over-styling" the application

This task should take you roughly 1 hour/45 minutes.

</br>

### 2. Improving the energy usage calculation

This task is about processing meter readings to calculate energy usage.

The application displays the monthly energy usage of a customer over a period of time and their meter readings.
A meter reading is a number in kWh (or cubic feet for gas) shown by an electricity (or gas) meter.
<br/>
Meter readings are used to calculate energy usage using a simple calculation. This is the energy usage over the period [t1, t2]:
```
  Energy Usage(period t1 -> t2) = MeterReading(t2) - MeterReading(t1)
``` 

The application should display **monthly** energy usage. The dataset located [here](https://storage.googleapis.com/bulb-interview/meterReadings.json) is a perfect dataset with only end of month meter readings, so the calculation of the energy usage is fairly simple.
</br>
In practice this never happens and one has to deal with meter readings taken at any time in the month. This is the problem we are addressing in this part of the challenge.


To solve this task, we would like you to:
1. Estimate the end of month meter readings (by interpolating the closest meter readings, i.e. the ones available just before and just after)
2. Calculate the energy usage based on the estimated meter readings


Tips:
* Use the dataset here: [https://storage.googleapis.com/bulb-interview/meterReadingsReal.json](https://storage.googleapis.com/bulb-interview/meterReadingsReal.json)
* You can assume there is exactly one meter reading per month.
* Don't try to interpolate at the edges of the dataset (i.e. if we don't have a meter reading for month M-1, then don't try to estimate the meter reading for month M).
* EnergyUsage(month M) = MeterReading(last day of month M) - MeterReading(last day of month M-1)
* To deal with dates we recommend using [momentjs](https://momentjs.com). This is a great [cheatsheet](https://devhints.io/moment). We have added a few useful things to know below.


MomentJS useful to know:
* Momentjs has a tendency to mutate moment objects.
* We wrote a few function below that may be handy, feel free to use them.

```javascript
/**
 * Check whether a moment object is the end of the month.
 * Ignore the time part.
 * @param {moment} mmt
 */
function isEndOfMonth(mmt) {
  // startOf allows to ignore the time component
  // we call moment(mmt) because startOf and endOf mutate the momentj object.
  return moment.utc(mmt).startOf('day').isSame(moment.utc(mmt).endOf('month').startOf('day'));
}

/**
 * Returns the difference between two moment objects in number of days.
 * @param {moment} mmt1
 * @param {moment} mm2
 */
function getDiffInDays(mmt1, mm2) {
  return mmt1.diff(mm2, 'days');
}

/**
 * Return the number of days between the given moment object
 * and the end of the month of this moment object.
 * @param {moment} mmt
 */
function getDaysUntilMonthEnd(mmt) {
  return getDiffInDays(moment.utc(mmt).endOf('month'), mmt);
}
```

We think this task should take you about 1 hour, but don't worry if you don't finish it, we are still trialing this test.
<br/>
The only thing we ask you is to come prepared, so that we can work together on improving your code when you come on-site.


## Practicalities

* Please add your name and how much time you spent on the exercise to [NOTES](./NOTES.md). Feel free to add any other notes there too.
* We will extend this exercise when you come on-site, so you may want to bring your own laptop if you can (you don't have to though).


## Setup

### Dependencies

The main dependencies are listed below.

* [React](https://reactjs.org/) as web framework
* [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for testing
* [webpack](https://webpack.js.org/) as bundler
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) as a local dev server
* [Babel](https://babeljs.io/) as transpiler
* [recharts](http://recharts.org/#/en-US/) for charts

We use [yarn](https://yarnpkg.com/lang/en/docs/install/) to manage dependencies and we run node 8.9.x.

```
$ yarn install
```


### Build

```
$ yarn build
```


### Start
```
$ yarn start
```

### Test
```
$ yarn test
```
