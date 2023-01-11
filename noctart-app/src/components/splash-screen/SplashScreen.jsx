import React, { Component } from "react";
import { motion } from "framer-motion";

import NoctartLogoLightBigSvg from "../svg/NoctartLogoLightBigSvg";
import OrangerieLogoDarkBigSvg from "../svg/OrangerieLogoDarkBigSvg";
import "./splash-screen.css";

function LoadingScreen() {
  return (
    <motion.div
      className="splash-screen"
      initial={{ backgroundColor: "#3d3636" }}
      animate={{
        backgroundColor: "#ffffff",
      }}
      transition={{ type: "spring", delay: 1, duration: 5 }}
    >
      <motion.div
        className="noctart-logo"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0] }}
        transition={{ type: "spring", delay: 0.5, duration: 4 }}
      >
        <NoctartLogoLightBigSvg />
      </motion.div>
      <motion.div
        className="orangerie-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ type: "spring", delay: 2.5, duration: 4 }}
      >
        <OrangerieLogoDarkBigSvg />
      </motion.div>
    </motion.div>
  );
}

export const SplashScreen = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
          localStorage.setItem("visited", "true");
        }, 7200);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      if (this.state.loading && localStorage.getItem("visited") !== "true")
        return LoadingScreen();

      return <WrappedComponent {...this.props} />;
    }
  };
};
