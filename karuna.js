// const data = [

// ];

// const getIndexOfCurrentItemByDate = (date) =>{

//     for(let i=0;i<data.length;i++){
//         if(data[i].date === date){
//             return i;
//         }
//     }

//     return -1;
//     // when there is no  record exists
// }

// const ItemIndex = getIndexOfCurrentItemByDate('18-5-2023');

// if(ItemIndex !== -1){
//     data[ItemIndex] = {...data[ItemIndex],totalTime:'3:00'};
// }
// else{
//     data.push(
//         {
//             id:1,
//             clientName:'celebal',
//             project:"emergent ventures",
//             workItem:"timeSheet ui",
//             date:'18-5-2023',
//             totalTime:'6:00'
//         }
//     )
// }

// console.log(data);

const data = [
  {
    id:4,
    clientName: "microsoft",

    projectName: "github",

    jobName: "Internship",

    workItem: "Timesheet",

    billableStatus: "Non-Billable",

    date: "2023-05-22",

    time: "04:00",
  },
  {
    id:5,
    clientName: "CT-L&D",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet",

    billableStatus: "Non-Billable",

    date: "2023-05-01",

    time: "05:00",
  },

  {
    id:4,
    clientName: "CT-L&D",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet",

    billableStatus: "Non-Billable",

    date: "2023-05-02",

    time: "08:00",
  },

  {
    id:7,
    clientName: "CT-L&D",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet",

    billableStatus: "Non-Billable",

    date: "2023-05-03",

    time: "07:00",
  },

  {
    id:8,
    clientName: "CT-LMS",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet UI",

    billableStatus: "Non-Billable",

    date: "2023-05-04",

    time: "09:00",
  },

  {
    id:9,
    clientName: "CT-LMS",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet UI",

    billableStatus: "Non-Billable",

    date: "2023-05-05",

    time: "07:00",
  },

  {
    id:10,
    clientName: "CT-LMS",

    projectName: "Zoho People",

    jobName: "Internship",

    workItem: "Timesheet Backend",

    billableStatus: "Non-Billable",

    date: "2023-05-06",

    time: "09:00",
  },
];



const newData = data.reduce((acc, item) => {
  const existingItem = acc.find((x) =>{
  
  if(x.workItem === item.workItem &&
    x.clientName === item.clientName &&
    x.projectName === item.projectName &&
    x.jobName === item.jobName &&
    x.billableStatus === item.billableStatus &&
    x.id === item.id){
    return true;
  }

  return false;
  
  }
  );
  if (existingItem) {
    existingItem.dates.push({ date: item.date, totalTime: item.time });
  } else {
    acc.push({
      ...item,
      dates: [{ date: item.date, totalTime: item.time }],
    });
  }
  return acc;
}, []);


console.log(newData);

