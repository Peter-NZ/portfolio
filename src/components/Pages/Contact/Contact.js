import React from "react";
import Cockpit from "../../Common/Cockpit/Cockpit";
import ContactLink from "../../Common/ContactLink/ContactLink";
import classes from "./Contact.module.scss";
const Contact = () => {
  const contactLinkProps = [
    {
      href: "mailto:me@peterdavidson.dev",
      title: "Email",
      subTitle: "me@peterdavidson.dev",
      icon: "mail_outline"
    },
    {
      href: "https://www.linkedin.com/in/peteramdavidson",
      title: "Linked In",
      subTitle: "Peter Davidson",
      icon: "perm_identity"
    }
  ];
  const contactLinks = contactLinkProps.map(link => (
    <ContactLink
      key={link.title}
      title={link.title}
      subTitle={link.subTitle}
      href={link.href}
      icon={link.icon}
    ></ContactLink>
  ));
  return (
    <React.Fragment>
      <Cockpit
        title="Contact Me"
        label="Feel free to drop me a line on any of the below channels"
      ></Cockpit>
      <div className={classes.links}>{contactLinks}</div>
    </React.Fragment>
  );
};

export default Contact;
