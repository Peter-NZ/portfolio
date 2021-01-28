import React from "react";
import ContactLink from "../../Common/ContactLink/ContactLink";
import classes from "./Contact.module.scss";
import { contactLinkProps } from "./ContactContent";
import Divider from "../../Divider/Divider";


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
    <section className="section">
      <div className="section__content">
        <Divider>Contact Me</Divider>
        <div className={classes.links}>{contactLinks}</div>
      </div>
</section>  );
};

export default Contact;
