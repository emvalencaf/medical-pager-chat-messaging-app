# Medical Pager (Chat Messaging)

A medical pager app with a real-time chat messaging built with react.js (frontend) and node.js (backend).

this is a fullstack app

## Features

- [x] Create/edit tematic teams;
- [x] Chat between 1 a 3 users;
- [x] Notification of messagings using twilio if the user is on;
- [x] search for users and teams;

## HOW TO USE THE DEMO

You can create new users but there are some users created for testing.

```
username: mdeforeman
password: 123456

username: mdacameron
password: 123456

username: mdrchase
password: 123456

username: mdlcuddle
password: 123456

username: mdghouse
password: 123456
```

## HOW TO USE THE REPO

1. Sign up (or sign in, with you already had a account) on [Stream Chat API](https://getstream.io/chat/?utm_source={google}&utm_medium={cpc}&utm_campaign=GOO|S|BRN|ROW|ALL-EN&utm_adgroup=Chat&utm_custom=15702481917&utm_content=571825906716&utm_term=stream%20chat&matchtype=e&device=c&_location=1001625&_bt=571825906716&_bk=stream%20chat&_bm=e&_bn=g&gad=1&gclid=CjwKCAjwhJukBhBPEiwAniIcNXicO9_e6fsS1ZDrkAmFtefq9XyBOw3KDYICBXljiLB69CSPrgLT5hoCrt0QAvD_BwE) and on [Twilio](https://www.twilio.com/en-us);
2. Go to the ```backend`` folder and create a ``.env`` filling thoses variables:
```
STREAM_APP_ID=
STREAM_API_KEY=
STREAM_API_SECRET=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
```
3. Open up the terminal at ``backend`` folder and type the command: ``npm install``;
4. Open up a new terminal at ``frontend`` folder and type the command: ``npm install``;
5. On the terminal open at ``backend`` folder type the command: ``npm start`` or ``npm run dev``;
6. Go to the file ``frontend/src/app.jsx`` and at the the line 19 changed the apikey for the Stream Chat API:
```
const apiKey = ;
```
7. Go to the file ``frontend/src/components/auth/index.jsx`` and change the lines 51-53:
```
        // testing URL
        const URL = 'http://localhost:5000/api/auth';
        // const URL = 'https://api-medical-pager-chat-messaging.onrender.com/api/auth';

```
8. at the terminal with frontend open, type the command: ``npm start``

### [DEMO](https://cosmic-puffpuff-69ef0c.netlify.app/)