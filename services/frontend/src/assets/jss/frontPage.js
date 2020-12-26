import {
  } from 'assets/jss/common.js';

  
  const frontPage = (theme) => ({
    frontPageContainer: {
        height: "100%",
    },
    internalContainer: {
      height: "100%",
      margin: "0 auto",
      // position: relative
      "@media (min-height: 400px)": {
        marginTop: "100px",
        marginBottom:"100px"
      }

    }
  });
  
  export default frontPage;
  