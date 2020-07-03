import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core";
import Chart from "../components/Chart";
import Summary from "../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByCountryOrDefault } from "../store/actions";
import CountryPicker from "../components/CountryPicker";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    marginTop: "3rem",
  },
}));

function Home() {
  const { selectedCountry } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCountryOrDefault(selectedCountry));
  }, [dispatch, selectedCountry]);

  const styles = useStyles();
  return (
    <Layout>
      <div className={styles.root}>
        <section>
          <Summary className={styles.spacing} />
        </section>
        <section className={styles.spacing}>
          <CountryPicker country={selectedCountry} />
        </section>
        <section className={styles.spacing}>
          <Chart />
        </section>
      </div>
    </Layout>
  );
}

export default Home;
