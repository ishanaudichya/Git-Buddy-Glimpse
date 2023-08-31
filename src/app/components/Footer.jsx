import React from 'react'
// import React, { useEffect, useState } from "react";


export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Made with ♥ by <a href='https://github.com/ishanaudichya'> <u>Ishan Audichya</u> </a></p>
    </footer>
  )
}
const styles = {
    footer: {

      color: '#fff',
      textAlign: 'center',
      padding: '4rem 0 2rem 0',
      bottom: "0",
      position: 'relative',
    },
  };
export default Footer