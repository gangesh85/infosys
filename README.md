# App contains three tables with complex data structure.
User Monthly Rewards, Total Rewards, All Transaction

## Tables and columns to show

### User Monthly Rewards
User monthly rewards table shows seven columns: customerId,  customer name, transaction Id, Amount Spent, Transaction Date, Transaction Year, Points.

### Total Rewards  
Total Rewards table shows two columns: customer name and reward points.

### All Transaction
All Transaction table shows seven columns: transaction id, customer Id, customer name, purchase date, product purchased, price, rewards.

## Images for Reference

Loading message while fetching data:[<img src="./public/Loading message .png">]

Showing error message on screen while there is something wrong :[<img src="/public/Showing error message .png">]

Retailer Reward Program Tables if every thing works well:[<img src="./public/Retailer Reward Program Tables.png">]


## App folder Structure
This app contains three local folders :

### Conponents folder
This folder contains reusable components only.

### Module folder
This folder contains driver files only.

### Services folder
This folder contains api related files only.


## About files

### App.js
App.js is the entry point of the application. It invoke driver module only.

### Transaction.jsx
Transaction.jsx is responsible for structure of all transaction table. useMemo hook is used.

### Rewards.jsx
rewards.jsx is responsible for structure of total rewards table. useMemo hook is used.

### UserCombine.jsx
UserCombine.jsx contains Users.jsx is resuable components that shows three latest month data and responsible for users monthly rewards table.  

### api.js
Create custom hook for making async call and data fetching. useEffect and useState hooks are used.

### TransactionYear.js
TransactionYear.js is responsible to extract year from data. javascript date method is used.

### ToLocalDate.js
ToLocalDate.js is responsible for convert date to local date format. Javascript date method is used.

### SortByDate.js
short data by date. Javascript date method is used.

### PriceToPoint.js
converts price into rewards. used math.floor and math.round math method.

### filterDataByMonth.js
filter data by specific date and month. used filter array method

### getMonth.js
extract latest month form data. Javascript date method is used.

### filterByName
filter data by name and aggregate their value. Used reduce array method.