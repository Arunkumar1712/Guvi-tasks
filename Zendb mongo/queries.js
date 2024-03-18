//Find all the topics and tasks which were taught or completed in the month of October:

db.topics.find({ "date_taken": { $gte: "2024-10-01", $lte: "2024-10-31" } })

// Find all the company drives that appeared between 15th October 2024 and 31st October 2024:

db.companydrives.find({ "date": { $gte: "2024-10-15", $lte: "2024-10-31" } })

//Find all the company drives and students who appeared for the placement:

db.companydrives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "student"
      }
    },
    {
      $project: {
        company: 1,
        date: 1,
        selected: 1,
        students: {
          $map: {
            input: "$student",
            as: "stud",
            in: "$$stud.name"
          }
        }
      }
    }
  ])

//Find the number of problems solved by each user in codekata:

db.codekata.aggregate([
  {
    $group: {
      _id: "$userid",
      total_problems_solved: { $sum: "$problems_solved" }
    }
  }
])

//Find all the mentors who have mentored more than 15 students:

db.users.aggregate([
  {
    $group: {
      _id: "$mentorallocated",
      mentee_count: { $sum: 1 }
    }
  },
  {
    $match: {
      mentee_count: { $gt: 15 }
    }
  }
])

//Find the number of users who were absent and did not submit tasks between 15th October 2024 and 31st October 2024:

db.attendance.aggregate([
  {
    $match: {
      "date": { $gte: "2024-10-15", $lte: "2024-10-31" },
      "present": false
    }
  }
])