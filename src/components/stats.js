import React from 'react'


function Stats() {
    
    const personalInfo = { name:"Mike", height:175, dob:new Date(1989, 0, 31), 
                       maxBpm: 188, weightGoal:85.0, waistGoal:95.5 };

    const stats = [  
                    {date:new Date(2021, 0, 25), weight:96.4, waist:106.5, kCal:0,    slept:"true",  },
                    {date:new Date(2021, 0, 27), weight:97.2, waist:105.0, kCal:512,  slept:"false"  },
                    {date:new Date(2021, 1, 1), weight:99.1, waist:108.0,  kCal:1150, slept:"false", },
                    {date:new Date(2021, 1, 2), weight:99.0, waist:107.5,  kCal:0,    slept:"true" , },
                    {date:new Date(2021, 1, 4), weight:99.0, waist:107.4, kCal:666, slept:"false"             },
                    {date:new Date(2021, 1, 5), weight:99.0, waist:107.5, kCal:0,     slept:"false" },
                ];

    
    const itemRows = stats.map((stats) => 
            <tr key={stats.date}>
              <td>{stats.date.getDate() + " . "+ (stats.date.getMonth()+1) + " . "+stats.date.getUTCFullYear()}</td>
              <td>{stats.weight}</td>
              <td>{stats.waist}</td>
              <td>{stats.kCal}</td>
              <td>{stats.slept}</td>
           </tr>
         )

    return(
        <div>
            <h2>Stats</h2>

            
            <table>
            <tbody >
                <tr>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Waist</th>
                    <th>kCal</th>
                    <th>Sleep</th>
                </tr>
                {itemRows}
            </tbody>
            </table>
        </div>
    
    )
}


export default Stats
