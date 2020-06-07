import React from 'react';
import styles from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import Cards from './components/Card/Card';
import CountryDropdown from './components/CountryDropdown/CountryDropdown';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { getData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await getData();
        this.setState({ data: fetchedData });
        //console.log(this.state.data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await getData(country);
        this.setState({ data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return(
            <div>
                <Header />
                <div className={styles.container}>
                    <AppHeader />
                    <CountryDropdown handleCountryChange={this.handleCountryChange} />
                    <div className={styles.dateClass}><u>Last Update: {new Date(data.lastUpdate).toDateString()}</u></div>
                    <Cards data={data}/>
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;