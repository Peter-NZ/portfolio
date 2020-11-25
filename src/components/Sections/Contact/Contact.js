import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import ContactLink from "../../Common/ContactLink/ContactLink";
import classes from "./Contact.module.scss";
import { contactLinkProps } from "./ContactContent";
const Contact = () => {
  const contactLinks = contactLinkProps.map((link) => (
    <ContactLink
      key={link.title}
      title={link.title}
      subTitle={link.subTitle}
      href={link.href}
      icon={link.icon}
    ></ContactLink>
  ));
  return (
    <div class="section">
      <Cockpit
        title="Contact Me"
        label="Feel free to drop me a line on any of the below channels"
      ></Cockpit>
      <div className={classes.links}>{contactLinks}</div>
</div>  );
};

export default Contact;
