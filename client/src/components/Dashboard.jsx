import React from 'react';
import '../styles.css';

import InformationSection from './informationSection';
import DailyWeatherSection from './DailyWeatherSection';
import Header from './InformationHeader';

function Dashboard(){
    return(
        <div>
            <Header />
            <InformationSection />
            <DailyWeatherSection />
        </div>
    );
}

export default Dashboard;