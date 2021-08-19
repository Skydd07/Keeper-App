import React from "react";

const d = new Date();
const y = d.getFullYear();

function Footer(){
    return<footer>
        <p>
            Copyright © {y}
        </p>
    </footer>
}

export default Footer;