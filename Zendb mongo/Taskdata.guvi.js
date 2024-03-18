[
    //user data
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b922"
  },
  "userid": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "mentorallocated": 1
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b923"
  },
  "userid": 2,
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "mentorallocated": 2
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b924"
  },
  "userid": 3,
  "name": "Michael Johnson",
  "email": "michael.johnson@example.com",
  "mentorallocated": 3
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b925"
  },
  "userid": 4,
  "name": "Emily Brown",
  "email": "emily.brown@example.com",
  "mentorallocated": 1
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b926"
  },
  "userid": 5,
  "name": "David Wilson",
  "email": "david.wilson@example.com",
  "mentorallocated": 2
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b927"
  },
  "userid": 6,
  "name": "Sarah Lee",
  "email": "sarah.lee@example.com",
  "mentorallocated": 3
},
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b928"
  },
  "userid": 7,
  "name": "Matthew Taylor",
  "email": "matthew.taylor@example.com",
  "mentorallocated": 1
}, 
{
  "_id": {
    "$oid": "65f83c0584ad52ce89a1b929"
  },
  "userid": 8,
  "name": "Olivia Martinez",
  "email": "olivia.martinez@example.com",
  "mentorallocated": 2
},
// codekata data
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b92b"
  },
  "userid": 1,
  "problems_solved": 10,
  "topics": [
    "HTML",
    "CSS"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b92c"
  },
  "userid": 2,
  "problems_solved": 8,
  "topics": [
    "HTML",
    "CSS"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b92d"
  },
  "userid": 3,
  "problems_solved": 12,
  "topics": [
    "JavaScript",
    "React"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b92e"
  },
  "userid": 4,
  "problems_solved": 7,
  "topics": [
    "JavaScript",
    "React"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b92f"
  },
  "userid": 5,
  "problems_solved": 15,
  "topics": [
    "JavaScript",
    "Node.js"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b930"
  },
  "userid": 6,
  "problems_solved": 9,
  "topics": [
    "HTML",
    "CSS"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b931"
  },
  "userid": 7,
  "problems_solved": 11,
  "topics": [
    "JavaScript",
    "Node.js"
  ]
},
{
  "_id": {
    "$oid": "65f83c4f84ad52ce89a1b932"
  },
  "userid": 8,
  "problems_solved": 6,
  "topics": [
    "HTML",
    "CSS"
  ]
},

// topics data
{
  "_id": {
    "$oid": "65f83fe984ad52ce89a1b950"
  },
  "topic": "HTML",
  "date_taken": "2024-10-05",
  "mentor_id": 1
},
{
  "_id": {
    "$oid": "65f83fe984ad52ce89a1b951"
  },
  "topic": "CSS",
  "date_taken": "2024-10-10",
  "mentor_id": 1
},
{
  "_id": {
    "$oid": "65f83fe984ad52ce89a1b952"
  },
  "topic": "JavaScript",
  "date_taken": "2024-10-15",
  "mentor_id": 2
},
{
  "_id": {
    "$oid": "65f83fe984ad52ce89a1b953"
  },
  "topic": "React",
  "date_taken": "2024-10-20",
  "mentor_id": 2
},
{
  "_id": {
    "$oid": "65f83fe984ad52ce89a1b954"
  },
  "topic": "Node.js",
  "date_taken": "2024-10-25",
  "mentor_id": 3
},
// tasks data
{
  "_id": {
    "$oid": "65f83d4084ad52ce89a1b93a"
  },
  "topic": "HTML",
  "userid": 1,
  "task_name": "HTML Task",
  "completed": true
},
{
  "_id": {
    "$oid": "65f83d4084ad52ce89a1b93b"
  },
  "topic": "CSS",
  "userid": 2,
  "task_name": "CSS Task",
  "completed": true
},
{
  "_id": {
    "$oid": "65f83d4084ad52ce89a1b93c"
  },
  "topic": "JavaScript",
  "userid": 3,
  "task_name": "JavaScript Task",
  "completed": false
},
{
  "_id": {
    "$oid": "65f83d4084ad52ce89a1b93d"
  },
  "topic": "React",
  "userid": 4,
  "task_name": "React Task",
  "completed": false
},
{
  "_id": {
    "$oid": "65f83d4084ad52ce89a1b93e"
  },
  "topic": "Node.js",
  "userid": 5,
  "task_name": "Node.js Task",
  "completed": false
},
// attendance data
{
  "_id": {
    "$oid": "65f83d5284ad52ce89a1b940"
  },
  "user_id": 1,
  "present": true,
  "topic_taken": "HTML",
  "mentor_id": 1
},
{
  "_id": {
    "$oid": "65f83d5284ad52ce89a1b941"
  },
  "user_id": 2,
  "present": true,
  "topic_taken": "CSS",
  "mentor_id": 1
},
{
  "_id": {
    "$oid": "65f83d5284ad52ce89a1b942"
  },
  "user_id": 3,
  "present": false,
  "topic_taken": "JavaScript",
  "mentor_id": 2
},
{
  "_id": {
    "$oid": "65f83d5284ad52ce89a1b943"
  },
  "user_id": 4,
  "present": false,
  "topic_taken": "React",
  "mentor_id": 2
},
{
  "_id": {
    "$oid": "65f83d5284ad52ce89a1b944"
  },
  "user_id": 5,
  "present": false,
  "topic_taken": "Node.js",
  "mentor_id": 3
},
// mentors data
{
  "_id": {
    "$oid": "65f83dd684ad52ce89a1b946"
  },
  "mentorid": 1,
  "name": "John Doe",
  "specialization": "HTML/CSS"
},
{
  "_id": {
    "$oid": "65f83dd684ad52ce89a1b947"
  },
  "mentorid": 2,
  "name": "Jane Smith",
  "specialization": "JavaScript/React"
},
{
  "_id": {
    "$oid": "65f83dd684ad52ce89a1b948"
  },
  "mentorid": 3,
  "name": "Alex Johnson",
  "specialization": "Node.js/Express"
},

//company drives:
{
  "_id": {
    "$oid": "65f83df284ad52ce89a1b94a"
  },
  "userid": 1,
  "company": "Google",
  "date": "2024-03-17",
  "selected": true
},
{
  "_id": {
    "$oid": "65f83df284ad52ce89a1b94b"
  },
  "userid": 2,
  "company": "Facebook",
  "date": "2024-03-17",
  "selected": false
},
{
  "_id": {
    "$oid": "65f83df284ad52ce89a1b94c"
  },
  "userid": 3,
  "company": "Amazon",
  "date": "2024-03-17",
  "selected": false
},
{
  "_id": {
    "$oid": "65f83df284ad52ce89a1b94d"
  },
  "userid": 4,
  "company": "Microsoft",
  "date": "2024-03-17",
  "selected": true
},
{
  "_id": {
    "$oid": "65f83df284ad52ce89a1b94e"
  },
  "userid": 5,
  "company": "Apple",
  "date": "2024-03-17",
  "selected": false
},

]